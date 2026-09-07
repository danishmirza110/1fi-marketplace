

const TENURE_TIERS = [
  { maxPrice: 50000, tenures: [3, 6, 9] },
  { maxPrice: 100000, tenures: [3, 6, 9, 12] },
  { maxPrice: Infinity, tenures: [3, 6, 9, 12, 18, 24] },
]

function getTenuresForPrice(price) {
  const tier = TENURE_TIERS.find((t) => price <= t.maxPrice)
  return tier ? tier.tenures : TENURE_TIERS[TENURE_TIERS.length - 1].tenures
}

export function generateEmiPlans(price) {
  const tenures = getTenuresForPrice(price)

  return tenures.map((months) => {
    const monthlyAmount = Math.ceil(price / months)
    return {
      id: `emi-${months}m`,
      months,
      monthlyAmount,
      totalAmount: monthlyAmount * months,
      interestFree: true,
      provider: 'Backed by your Mutual Funds',
      recommended: months === 9,
    }
  })
}
