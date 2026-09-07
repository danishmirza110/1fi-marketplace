import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Star, ShieldCheck } from 'lucide-react'
import AppShell from '../components/layout/AppShell'
import PageHeader from '../components/layout/PageHeader'
import VariantPicker from '../components/marketplace/VariantPicker'
import Spinner from '../components/common/Spinner'
import ErrorState from '../components/common/ErrorState'
import Badge from '../components/common/Badge'
import { useProduct } from '../hooks/useProduct'
import { usePurchaseFlow } from '../context/PurchaseFlowContext'
import { computeFinalPrice, getDefaultVariantSelections } from '../utils/pricing'
import { formatCurrency } from '../utils/formatCurrency'
import styles from './ProductDetailsPage.module.css'

export default function ProductDetailsPage() {
  const { productId } = useParams()
  const navigate = useNavigate()
  const { product, loading, error, refetch } = useProduct(productId)
  const { startFlow } = usePurchaseFlow()

  const [selections, setSelections] = useState({})
  const [activeImage, setActiveImage] = useState(0)

  // Seed the default variant selections as soon as the product loads.
  useEffect(() => {
    if (product) {
      setSelections(getDefaultVariantSelections(product))
      setActiveImage(0)
    }
  }, [product])

  const handleVariantChange = (groupId, optionId) => {
    setSelections((prev) => ({ ...prev, [groupId]: optionId }))
  }

  const handleProceed = () => {
    startFlow(product, selections)
    navigate(`/shop/marketplace/product/${product.id}/emi`)
  }

  return (
    <AppShell>
      <PageHeader title={product?.name || 'Product'} onBack={() => navigate('/shop/marketplace')} />

      <div className={styles.scrollArea}>
        {loading && <Spinner label="Loading product..." />}

        {!loading && error && (
          <ErrorState
            title="Couldn't load this product"
            message={error}
            onRetry={refetch}
          />
        )}

        {!loading && !error && product && (
          <>
            <div className={styles.gallery}>
              <img src={product.gallery[activeImage]} alt={product.name} className={styles.heroImage} />
              {product.gallery.length > 1 && (
                <div className={styles.thumbRow}>
                  {product.gallery.map((src, i) => (
                    <button
                      key={src}
                      type="button"
                      className={`${styles.thumb} ${i === activeImage ? styles.thumbActive : ''}`}
                      onClick={() => setActiveImage(i)}
                      aria-label={`View image ${i + 1}`}
                    >
                      <img src={src} alt="" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className={styles.info}>
              <p className={styles.brand}>{product.brand}</p>
              <h1 className={styles.name}>{product.name}</h1>

              <div className={styles.ratingRow}>
                <Star size={13} fill="#FF8A3D" color="#FF8A3D" />
                <span>{product.rating}</span>
                <span className={styles.reviewCount}>({product.reviewCount} reviews)</span>
              </div>

              <p className={styles.price}>{formatCurrency(computeFinalPrice(product, selections))}</p>
              <Badge tone="success">No-cost EMI available</Badge>

              <p className={styles.description}>{product.description}</p>

              {product.highlights?.length > 0 && (
                <ul className={styles.highlights}>
                  {product.highlights.map((h) => (
                    <li key={h}>
                      <ShieldCheck size={14} />
                      {h}
                    </li>
                  ))}
                </ul>
              )}

              <div className={styles.variantSection}>
                <VariantPicker
                  variantGroups={product.variantGroups}
                  selections={selections}
                  onChange={handleVariantChange}
                />
              </div>
            </div>
          </>
        )}
      </div>

      {!loading && !error && product && (
        <div className={styles.ctaBar}>
          <div className={styles.ctaPrice}>
            <span>Total price</span>
            <strong>{formatCurrency(computeFinalPrice(product, selections))}</strong>
          </div>
          <button type="button" className={styles.ctaBtn} onClick={handleProceed}>
            View EMI Plans
          </button>
        </div>
      )}
    </AppShell>
  )
}
