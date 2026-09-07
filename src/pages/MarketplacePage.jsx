import { useState } from 'react'
import { PackageSearch } from 'lucide-react'
import SearchBar from '../components/marketplace/SearchBar'
import CategoryChips from '../components/marketplace/CategoryChips'
import ProductGrid, { ProductGridSkeleton } from '../components/marketplace/ProductGrid'
import ErrorState from '../components/common/ErrorState'
import EmptyState from '../components/common/EmptyState'
import { useProducts } from '../hooks/useProducts'
import { CATEGORIES } from '../data/products'
import styles from './MarketplacePage.module.css'

export default function MarketplacePage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')

  const { products, loading, error, refetch } = useProducts({ category, search })

  return (
    <div className={styles.page}>
      <SearchBar value={search} onChange={setSearch} placeholder="Search phones, jewellery, trips..." />
      <CategoryChips categories={CATEGORIES} activeCategory={category} onSelect={setCategory} />

      <div className={styles.sectionHeading}>
        <h2>1Fi Marketplace</h2>
        <p>Shop now, pay in easy no-cost EMIs backed by your investments.</p>
      </div>

      {loading && <ProductGridSkeleton />}

      {!loading && error && (
        <ErrorState
          title="Couldn't load the marketplace"
          message={error}
          onRetry={refetch}
        />
      )}

      {!loading && !error && products.length === 0 && (
        <EmptyState
          icon={<PackageSearch size={24} />}
          title="No products found"
          message={
            search
              ? `We couldn't find anything matching "${search}". Try a different search.`
              : 'No products available in this category right now.'
          }
        />
      )}

      {!loading && !error && products.length > 0 && <ProductGrid products={products} />}
    </div>
  )
}
