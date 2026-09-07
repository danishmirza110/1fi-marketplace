import { useNavigate } from 'react-router-dom'
import { Star } from 'lucide-react'
import Badge from '../common/Badge'
import { formatCurrency } from '../../utils/formatCurrency'
import styles from './ProductCard.module.css'

export default function ProductCard({ product }) {
  const navigate = useNavigate()

  return (
    <button
      type="button"
      className={styles.card}
      onClick={() => navigate(`/shop/marketplace/product/${product.id}`)}
    >
      <div className={styles.imageWrap}>
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className={styles.body}>
        <p className={styles.brand}>{product.brand}</p>
        <p className={styles.name}>{product.name}</p>
        <div className={styles.ratingRow}>
          <Star size={12} fill="#FF8A3D" color="#FF8A3D" />
          <span>{product.rating}</span>
          <span className={styles.reviewCount}>({product.reviewCount})</span>
        </div>
        <p className={styles.price}>{formatCurrency(product.price)}</p>
        <Badge tone="success">No-cost EMI</Badge>
      </div>
    </button>
  )
}
