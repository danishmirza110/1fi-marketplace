import styles from './VariantPicker.module.css'

export default function VariantPicker({ variantGroups, selections, onChange }) {
  if (!variantGroups?.length) return null

  return (
    <div className={styles.wrap}>
      {variantGroups.map((group) => (
        <div key={group.id} className={styles.group}>
          <p className={styles.groupLabel}>{group.label}</p>
          <div className={styles.options}>
            {group.options.map((option) => {
              const isSelected = selections[group.id] === option.id
              return (
                <button
                  key={option.id}
                  type="button"
                  className={`${styles.option} ${isSelected ? styles.selected : ''}`}
                  onClick={() => onChange(group.id, option.id)}
                  aria-pressed={isSelected}
                >
                  {option.swatch && (
                    <span className={styles.swatch} style={{ background: option.swatch }} />
                  )}
                  {option.label}
                  {option.priceDelta > 0 && (
                    <span className={styles.delta}>+₹{option.priceDelta.toLocaleString('en-IN')}</span>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
