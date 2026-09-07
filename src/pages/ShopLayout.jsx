import { Outlet } from 'react-router-dom'
import AppShell from '../components/layout/AppShell'
import BottomNav from '../components/layout/BottomNav'
import ShopHero from '../components/shop/ShopHero'
import ShopTabs from '../components/shop/ShopTabs'
import styles from './ShopLayout.module.css'

export default function ShopLayout() {
  return (
    <AppShell>
      <div className={styles.scrollArea}>
        <ShopHero />
        <ShopTabs />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
      <BottomNav />
    </AppShell>
  )
}
