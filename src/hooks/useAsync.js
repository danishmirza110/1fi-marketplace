import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Runs an async function and exposes { data, loading, error, refetch }.
 * Centralises loading/error state handling so pages/components never
 * have to hand-roll their own try/catch + isLoading booleans.
 *
 * @param {() => Promise<any>} asyncFn - factory returning a fresh promise each call
 * @param {Array} deps - dependency array, re-runs the fetch when it changes
 */
export function useAsync(asyncFn, deps = []) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const requestId = useRef(0)

  const run = useCallback(() => {
    const currentRequestId = ++requestId.current
    setLoading(true)
    setError(null)

    asyncFn()
      .then((result) => {
        if (currentRequestId !== requestId.current) return // stale response, ignore
        setData(result)
      })
      .catch((err) => {
        if (currentRequestId !== requestId.current) return
        setError(err instanceof Error ? err.message : 'Something went wrong.')
      })
      .finally(() => {
        if (currentRequestId !== requestId.current) return
        setLoading(false)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  useEffect(() => {
    run()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [run])

  return { data, loading, error, refetch: run }
}
