/**
 * @param {object} product - product record from the catalogue
 * @param {Record<string, string>} variantSelections - map of groupId -> optionId
 * @returns {number} final price including any variant price deltas
 */
export function computeFinalPrice(product, variantSelections = {}) {
  if (!product) return 0

  const delta = (product.variantGroups || []).reduce((sum, group) => {
    const selectedOptionId = variantSelections[group.id]
    const option = group.options.find((o) => o.id === selectedOptionId)
    return sum + (option?.priceDelta || 0)
  }, 0)

  return product.price + delta
}

export function getDefaultVariantSelections(product) {
  if (!product) return {}
  return (product.variantGroups || []).reduce((acc, group) => {
    acc[group.id] = group.options[0]?.id
    return acc
  }, {})
}
