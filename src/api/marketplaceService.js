
import { PRODUCTS, CATEGORIES } from '../data/products'
import { generateEmiPlans } from '../data/emiPlans'

const NETWORK_DELAY_MS = 650

// Small, deliberate chance of a transient failure so the UI's error/retry
// states are real code paths, not just theoretical. Tune to 0 to disable.
const RANDOM_FAILURE_RATE = 0

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function maybeFail(errorMessage) {
  if (Math.random() < RANDOM_FAILURE_RATE) {
    throw new Error(errorMessage)
  }
}

/**

 * @param {{ category?: string, search?: string }} filters
 */
export async function fetchProducts({ category = 'all', search = '' } = {}) {
  await delay(NETWORK_DELAY_MS)
  maybeFail('Could not load the marketplace right now.')

  const query = search.trim().toLowerCase()

  const results = PRODUCTS.filter((product) => {
    const matchesCategory = category === 'all' || product.category === category
    const matchesSearch =
      query.length === 0 ||
      product.name.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query)
    return matchesCategory && matchesSearch
  })

  return results
}

export async function fetchCategories() {
  await delay(200)
  return CATEGORIES
}

/**
 * Fetch a single product's full detail record.
 * @param {string} productId
 */
export async function fetchProductById(productId) {
  await delay(NETWORK_DELAY_MS)
  maybeFail('Could not load this product right now.')

  const product = PRODUCTS.find((p) => p.id === productId)
  if (!product) {
    throw new Error('This product could not be found.')
  }
  return product
}

/**
 * Fetch the EMI plans available for a given final price.
 * @param {number} price
 */
export async function fetchEmiPlans(price) {
  await delay(NETWORK_DELAY_MS)
  maybeFail('Could not load EMI plans right now.')

  if (typeof price !== 'number' || price <= 0) {
    throw new Error('Invalid product price.')
  }

  return generateEmiPlans(price)
}

/**
 * Simulates placing the order against a payment backend.
 * @param {{ product: object, variantSelections: object, emiPlan: object }} order
 */
export async function placeOrder(order) {
  await delay(900)
  maybeFail('We could not confirm your order. Please try again.')

  return {
    orderId: `1FI-${Math.floor(100000 + Math.random() * 900000)}`,
    status: 'CONFIRMED',
    placedAt: new Date().toISOString(),
    ...order,
  }
}
