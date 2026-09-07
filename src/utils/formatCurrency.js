const formatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
})

export function formatCurrency(amount) {
  if (typeof amount !== 'number' || Number.isNaN(amount)) return '\u20b9--'
  return formatter.format(amount)
}
