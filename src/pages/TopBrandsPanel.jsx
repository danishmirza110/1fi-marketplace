import { Store } from 'lucide-react'
import EmptyState from '../components/common/EmptyState'

export default function TopBrandsPanel() {
  return (
    <EmptyState
      icon={<Store size={24} />}
      title="Top Brands"
      message="Browse deals from your favourite brands here soon."
    />
  )
}
