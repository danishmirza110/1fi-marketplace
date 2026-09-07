import { NavLink } from 'react-router-dom'
import styles from './ShopTabs.module.css'

const TABS = [
  { path: '/shop/top-brands', label: 'Top Brands' },
  { path: '/shop/nearby-stores', label: 'Nearby Stores' },
  { path: '/shop/marketplace', label: '1Fi Marketplace' },
]

export default function ShopTabs() {
  return (
    <div className={styles.tabBar} role="tablist" aria-label="Shop sections">
      {TABS.map((tab) => (
        <NavLink
          key={tab.path}
          to={tab.path}
          role="tab"
          className={({ isActive }) => `${styles.tab} ${isActive ? styles.active : ''}`}
        >
          {tab.label}
        </NavLink>
      ))}
    </div>
  )
}
