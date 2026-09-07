import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckCircle2, Info, ShoppingBag } from 'lucide-react'
import AppShell from '../components/layout/AppShell'
import PageHeader from '../components/layout/PageHeader'
import ErrorState from '../components/common/ErrorState'
import EmptyState from '../components/common/EmptyState'
import Badge from '../components/common/Badge'
import { usePurchaseFlow } from '../context/PurchaseFlowContext'
import { placeOrder } from '../api/marketplaceService'
import { computeFinalPrice } from '../utils/pricing'
import { formatCurrency } from '../utils/formatCurrency'
import styles from './ConfirmationPage.module.css'

function getVariantLabel(product, groupId, optionId) {
  const group = product.variantGroups?.find((g) => g.id === groupId)
  const option = group?.options.find((o) => o.id === optionId)
  return option ? `${group.label}: ${option.label}` : null
}

export default function ConfirmationPage() {
  const navigate = useNavigate()
  const { product, variantSelections, emiPlan, resetFlow } = usePurchaseFlow()

  const [status, setStatus] = useState('review') // review | placing | success | error
  const [error, setError] = useState(null)
  const [order, setOrder] = useState(null)

  const isFlowComplete = Boolean(product && emiPlan)

  const handleConfirm = async () => {
    setStatus('placing')
    setError(null)
    try {
      const result = await placeOrder({ product, variantSelections, emiPlan })
      setOrder(result)
      setStatus('success')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
      setStatus('error')
    }
  }

  const handleBackToShop = () => {
    resetFlow()
    navigate('/shop/marketplace')
  }

  if (!isFlowComplete && status !== 'success') {
    return (
      <AppShell>
        <PageHeader title="Order Summary" onBack={() => navigate('/shop/marketplace')} />
        <EmptyState
          icon={<ShoppingBag size={22} />}
          title="Nothing to confirm yet"
          message="Pick a product and an EMI plan first, then come back here to confirm."
          action={
            <button type="button" className={styles.linkBtn} onClick={() => navigate('/shop/marketplace')}>
              Browse Marketplace
            </button>
          }
        />
      </AppShell>
    )
  }

  if (status === 'success') {
    return (
      <AppShell>
        <div className={styles.successWrap}>
          <div className={styles.successIcon}>
            <CheckCircle2 size={40} strokeWidth={1.8} />
          </div>
          <h1 className={styles.successTitle}>Order Confirmed</h1>
          <p className={styles.successSubtitle}>
            Your EMI plan is set up and your first instalment will be debited next month.
          </p>

          <div className={styles.successCard}>
            <div className={styles.row}>
              <span>Order ID</span>
              <strong>{order.orderId}</strong>
            </div>
            <div className={styles.row}>
              <span>Product</span>
              <strong>{product.name}</strong>
            </div>
            <div className={styles.row}>
              <span>EMI Plan</span>
              <strong>
                {emiPlan.months} months · {formatCurrency(emiPlan.monthlyAmount)}/mo
              </strong>
            </div>
          </div>

          <button type="button" className={styles.primaryBtn} onClick={handleBackToShop}>
            Back to Shop
          </button>
        </div>
      </AppShell>
    )
  }

  const finalPrice = computeFinalPrice(product, variantSelections)
  const variantLabels = Object.entries(variantSelections)
    .map(([groupId, optionId]) => getVariantLabel(product, groupId, optionId))
    .filter(Boolean)

  return (
    <AppShell>
      <PageHeader
        title="Order Summary"
        onBack={() => navigate(`/shop/marketplace/product/${product.id}/emi`)}
      />

      <div className={styles.scrollArea}>
        <div className={styles.productCard}>
          <img src={product.image} alt={product.name} />
          <div>
            <p className={styles.brand}>{product.brand}</p>
            <p className={styles.productName}>{product.name}</p>
            {variantLabels.length > 0 && (
              <p className={styles.variantLine}>{variantLabels.join(' · ')}</p>
            )}
          </div>
        </div>

        <div className={styles.section}>
          <p className={styles.sectionLabel}>Payment Plan</p>
          <div className={styles.planCard}>
            <div className={styles.planRow}>
              <span>Tenure</span>
              <strong>{emiPlan.months} months</strong>
            </div>
            <div className={styles.planRow}>
              <span>Monthly instalment</span>
              <strong>{formatCurrency(emiPlan.monthlyAmount)}</strong>
            </div>
            <div className={styles.planRow}>
              <span>Total payable</span>
              <strong>{formatCurrency(emiPlan.totalAmount)}</strong>
            </div>
            <div className={styles.planRow}>
              <span>Interest</span>
              <Badge tone="success">0% · No-cost EMI</Badge>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <p className={styles.sectionLabel}>Price Details</p>
          <div className={styles.priceCard}>
            <div className={styles.planRow}>
              <span>Item total</span>
              <strong>{formatCurrency(finalPrice)}</strong>
            </div>
            <div className={styles.planRow}>
              <span>EMI processing fee</span>
              <strong>₹0</strong>
            </div>
            <div className={`${styles.planRow} ${styles.totalRow}`}>
              <span>Total amount</span>
              <strong>{formatCurrency(finalPrice)}</strong>
            </div>
          </div>
        </div>

        {status === 'error' && (
          <ErrorState title="Order could not be placed" message={error} onRetry={handleConfirm} />
        )}

        <div className={styles.noteBox}>
          <Info size={14} />
          <span>By confirming, units worth {formatCurrency(finalPrice)} in your mutual fund portfolio will be marked as collateral for this EMI.</span>
        </div>
      </div>

      <div className={styles.ctaBar}>
        <button type="button" className={styles.primaryBtn} onClick={handleConfirm} disabled={status === 'placing'}>
          {status === 'placing' ? (
            <span className={styles.btnLoading}>
              <span className={styles.btnSpinner} />
              Placing order...
            </span>
          ) : (
            `Confirm & Pay ${formatCurrency(emiPlan.monthlyAmount)}/mo`
          )}
        </button>
      </div>
    </AppShell>
  )
}
