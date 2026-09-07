import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowRight, Info } from 'lucide-react'
import AppShell from '../components/layout/AppShell'
import PageHeader from '../components/layout/PageHeader'
import EmiPlanCard from '../components/marketplace/EmiPlanCard'
import Spinner from '../components/common/Spinner'
import ErrorState from '../components/common/ErrorState'
import EmptyState from '../components/common/EmptyState'
import { useEmiPlans } from '../hooks/useEmiPlans'
import { usePurchaseFlow } from '../context/PurchaseFlowContext'
import { computeFinalPrice } from '../utils/pricing'
import { formatCurrency } from '../utils/formatCurrency'
import styles from './EmiSelectionPage.module.css'

export default function EmiSelectionPage() {
  const { productId } = useParams()
  const navigate = useNavigate()
  const { product, variantSelections, selectEmiPlan } = usePurchaseFlow()

  const flowMatchesRoute = product && product.id === productId
  const finalPrice = flowMatchesRoute ? computeFinalPrice(product, variantSelections) : null

  const { plans, loading, error, refetch } = useEmiPlans(finalPrice)
  const [selectedPlanId, setSelectedPlanId] = useState(null)

  useEffect(() => {
    setSelectedPlanId(null)
  }, [finalPrice])

  const selectedPlan = plans.find((p) => p.id === selectedPlanId) || null

  const handleProceed = () => {
    if (!selectedPlan) return
    selectEmiPlan(selectedPlan)
    navigate('/shop/marketplace/confirm')
  }

  // Guards against someone landing here directly (refresh / bookmark) without
  // having gone through the product page first, since the selection lives
  // in in-memory context rather than the URL.
  if (!flowMatchesRoute) {
    return (
      <AppShell>
        <PageHeader title="Choose EMI Plan" onBack={() => navigate('/shop/marketplace')} />
        <EmptyState
          icon={<Info size={22} />}
          title="Let's pick a product first"
          message="Select a product from the marketplace to see its EMI plans."
          action={
            <button
              type="button"
              className={styles.linkBtn}
              onClick={() => navigate('/shop/marketplace')}
            >
              Browse Marketplace
            </button>
          }
        />
      </AppShell>
    )
  }

  return (
    <AppShell>
      <PageHeader
        title="Choose EMI Plan"
        subtitle={product.name}
        onBack={() => navigate(`/shop/marketplace/product/${product.id}`)}
      />

      <div className={styles.scrollArea}>
        <div className={styles.summaryCard}>
          <img src={product.image} alt={product.name} />
          <div>
            <p className={styles.productName}>{product.name}</p>
            <p className={styles.productPrice}>{formatCurrency(finalPrice)}</p>
          </div>
        </div>

        <p className={styles.sectionLabel}>Available EMI plans</p>

        {loading && <Spinner label="Fetching EMI plans..." />}

        {!loading && error && (
          <ErrorState title="Couldn't load EMI plans" message={error} onRetry={refetch} />
        )}

        {!loading && !error && plans.length === 0 && (
          <EmptyState title="No EMI plans available" message="Please try again in a moment." />
        )}

        {!loading && !error && plans.length > 0 && (
          <div className={styles.planList}>
            {plans.map((plan) => (
              <EmiPlanCard
                key={plan.id}
                plan={plan}
                isSelected={selectedPlanId === plan.id}
                onSelect={(p) => setSelectedPlanId(p.id)}
              />
            ))}
          </div>
        )}

        <div className={styles.noteBox}>
          <Info size={14} />
          <span>No credit score check. No interest, ever. Your mutual fund units stay invested and keep growing.</span>
        </div>
      </div>

      <div className={styles.ctaBar}>
        <button type="button" className={styles.ctaBtn} disabled={!selectedPlan} onClick={handleProceed}>
          Proceed to Confirm
          <ArrowRight size={16} />
        </button>
      </div>
    </AppShell>
  )
}
