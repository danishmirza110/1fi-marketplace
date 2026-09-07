import styles from './Spinner.module.css'

export default function Spinner({ label = 'Loading' }) {
  return (
    <div className={styles.wrap} role="status" aria-live="polite">
      <span className={styles.spinner} />
      {label && <p className={styles.label}>{label}</p>}
    </div>
  )
}
