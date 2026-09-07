import styles from './CategoryChips.module.css'

export default function CategoryChips({ categories, activeCategory, onSelect }) {
  return (
    <div className={styles.row} role="tablist" aria-label="Filter by category">
      {categories.map((cat) => (
        <button
          key={cat.id}
          type="button"
          role="tab"
          aria-selected={activeCategory === cat.id}
          className={`${styles.chip} ${activeCategory === cat.id ? styles.active : ''}`}
          onClick={() => onSelect(cat.id)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}
