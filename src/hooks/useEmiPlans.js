import { useAsync } from './useAsync'
import { fetchEmiPlans } from '../api/marketplaceService'

export function useEmiPlans(price) {
  const { data, loading, error, refetch } = useAsync(
    () => fetchEmiPlans(price),
    [price],
  )

  return { plans: data || [], loading, error, refetch }
}
