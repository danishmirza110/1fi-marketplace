import { AlertTriangle } from 'lucide-react'
import styles from './ErrorState.module.css'

export default function ErrorState({
  title = 'Something went wrong',
  message = 'Please try again.',
  onRetry,
}) {
  return (
    <div className={styles.wrap} role="alert">
      <div className={styles.iconWrap}>
        <AlertTriangle size={22} strokeWidth={2} />
      </div>
      <p className={styles.title}>{title}</p>
      <p className={styles.message}>{message}</p>
      {onRetry && (
        <button type="button" className={styles.retryBtn} onClick={onRetry}>
          Try again
        </button>
      )}
    </div>
  )
}
