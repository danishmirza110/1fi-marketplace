import { createContext, useContext, useMemo, useState, useCallback } from 'react'

const PurchaseFlowContext = createContext(null)

/**
 * Holds the state of an in-progress marketplace purchase as the user
 * moves across the Product -> EMI selection -> Confirmation screens.
 * A context (rather than prop-drilling or URL state) is used because the
 * selection needs to survive independent route navigations and because
 * more than one page needs to both read and update it.
 */
export function PurchaseFlowProvider({ children }) {
  const [product, setProduct] = useState(null)
  const [variantSelections, setVariantSelections] = useState({})
  const [emiPlan, setEmiPlan] = useState(null)

  const startFlow = useCallback((selectedProduct, selectedVariants) => {
    setProduct(selectedProduct)
    setVariantSelections(selectedVariants)
    setEmiPlan(null)
  }, [])

  const selectEmiPlan = useCallback((plan) => {
    setEmiPlan(plan)
  }, [])

  const resetFlow = useCallback(() => {
    setProduct(null)
    setVariantSelections({})
    setEmiPlan(null)
  }, [])

  const value = useMemo(
    () => ({
      product,
      variantSelections,
      emiPlan,
      startFlow,
      selectEmiPlan,
      resetFlow,
    }),
    [product, variantSelections, emiPlan, startFlow, selectEmiPlan, resetFlow],
  )

  return <PurchaseFlowContext.Provider value={value}>{children}</PurchaseFlowContext.Provider>
}

export function usePurchaseFlow() {
  const ctx = useContext(PurchaseFlowContext)
  if (!ctx) {
    throw new Error('usePurchaseFlow must be used within a PurchaseFlowProvider')
  }
  return ctx
}
