import { useAsync } from './useAsync'
import { fetchProducts } from '../api/marketplaceService'

export function useProducts({ category, search }) {
  const { data, loading, error, refetch } = useAsync(
    () => fetchProducts({ category, search }),
    [category, search],
  )

  return { products: data || [], loading, error, refetch }
}
