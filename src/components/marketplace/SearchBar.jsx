import { Search, X } from 'lucide-react'
import styles from './SearchBar.module.css'

export default function SearchBar({ value, onChange, placeholder = 'Search online stores...' }) {
  return (
    <div className={styles.wrap}>
      <Search size={18} className={styles.icon} />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={styles.input}
        aria-label="Search products"
      />
      {value.length > 0 && (
        <button
          type="button"
          className={styles.clearBtn}
          onClick={() => onChange('')}
          aria-label="Clear search"
        >
          <X size={16} />
        </button>
      )}
    </div>
  )
}
