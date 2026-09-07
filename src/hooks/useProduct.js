import { useAsync } from './useAsync'
import { fetchProductById } from '../api/marketplaceService'

export function useProduct(productId) {
  const { data, loading, error, refetch } = useAsync(
    () => fetchProductById(productId),
    [productId],
  )

  return { product: data, loading, error, refetch }
}
