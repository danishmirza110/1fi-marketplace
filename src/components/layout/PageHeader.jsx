import { ChevronLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import styles from './PageHeader.module.css'

export default function PageHeader({ title, onBack, subtitle }) {
  const navigate = useNavigate()

  const handleBack = () => {
    if (onBack) return onBack()
    navigate(-1)
  }

  return (
    <header className={styles.header}>
      <button
        type="button"
        className={styles.backBtn}
        onClick={handleBack}
        aria-label="Go back"
      >
        <ChevronLeft size={22} strokeWidth={2.4} />
      </button>
      <div className={styles.titleWrap}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </header>
  )
}
