import { MapPin } from 'lucide-react'
import EmptyState from '../components/common/EmptyState'

export default function NearbyStoresPanel() {
  return (
    <EmptyState
      icon={<MapPin size={24} />}
      title="Nearby Stores"
      message="Stores near you that accept 1Fi EMIs will show up here soon."
    />
  )
}
