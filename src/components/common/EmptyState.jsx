import styles from './EmptyState.module.css'

export default function EmptyState({ icon, title, message, action }) {
  return (
    <div className={styles.wrap}>
      {icon && <div className={styles.iconWrap}>{icon}</div>}
      <p className={styles.title}>{title}</p>
      {message && <p className={styles.message}>{message}</p>}
      {action}
    </div>
  )
}
