import { Sparkles } from 'lucide-react'
import styles from './ShopHero.module.css'

export default function ShopHero() {
  return (
    <div className={styles.hero}>
      <div className={styles.badge}>
        <Sparkles size={13} />
        <span>NO-COST EMIs</span>
      </div>
      <h1 className={styles.heading}>
        Shop today,
        <br />
        <em>pay later</em> using
        <br />
        Mutual funds.
      </h1>
      <p className={styles.subtext}>No credit score required. No interest. Backed by your investments.</p>
    </div>
  )
}
