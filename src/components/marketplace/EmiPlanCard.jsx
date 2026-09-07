import { Check } from 'lucide-react'
import Badge from '../common/Badge'
import { formatCurrency } from '../../utils/formatCurrency'
import styles from './EmiPlanCard.module.css'

export default function EmiPlanCard({ plan, isSelected, onSelect }) {
  return (
    <button
      type="button"
      className={`${styles.card} ${isSelected ? styles.selected : ''}`}
      onClick={() => onSelect(plan)}
      aria-pressed={isSelected}
    >
      <div className={styles.radio}>{isSelected && <Check size={13} strokeWidth={3} />}</div>

      <div className={styles.info}>
        <div className={styles.topRow}>
          <p className={styles.months}>{plan.months} months</p>
          {plan.recommended && <Badge tone="accent">Most popular</Badge>}
        </div>
        <p className={styles.monthly}>
          {formatCurrency(plan.monthlyAmount)}
          <span>/month</span>
        </p>
        <p className={styles.meta}>
          Total {formatCurrency(plan.totalAmount)} · {plan.provider}
        </p>
      </div>

      <Badge tone="success">0% interest</Badge>
    </button>
  )
}
