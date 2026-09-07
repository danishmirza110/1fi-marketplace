import { Home, Store, Receipt, TrendingUp, User } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './BottomNav.module.css'

const ITEMS = [
  { id: 'home', label: 'Home', icon: Home, path: null },
  { id: 'shop', label: 'Shop', icon: Store, path: '/shop' },
  { id: 'emi', label: 'EMI Dues', icon: Receipt, path: null },
  { id: 'limit', label: 'Limit', icon: TrendingUp, path: null },
  { id: 'profile', label: 'Profile', icon: User, path: null },
]

export default function BottomNav() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <nav className={styles.nav} aria-label="Primary">
      {ITEMS.map(({ id, label, icon: Icon, path }) => {
        const isActive = path && location.pathname.startsWith(path)
        return (
          <button
            key={id}
            type="button"
            className={`${styles.item} ${isActive ? styles.active : ''}`}
            onClick={() => path && navigate(path)}
          >
            <Icon size={22} strokeWidth={isActive ? 2.4 : 2} />
            <span>{label}</span>
          </button>
        )
      })}
    </nav>
  )
}
