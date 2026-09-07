import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { PurchaseFlowProvider } from './context/PurchaseFlowContext'
import ShopLayout from './pages/ShopLayout'
import TopBrandsPanel from './pages/TopBrandsPanel'
import NearbyStoresPanel from './pages/NearbyStoresPanel'
import MarketplacePage from './pages/MarketplacePage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import EmiSelectionPage from './pages/EmiSelectionPage'
import ConfirmationPage from './pages/ConfirmationPage'

export default function App() {
  return (
    <BrowserRouter>
      <PurchaseFlowProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/shop/marketplace" replace />} />

          <Route path="/shop" element={<ShopLayout />}>
            <Route index element={<Navigate to="marketplace" replace />} />
            <Route path="top-brands" element={<TopBrandsPanel />} />
            <Route path="nearby-stores" element={<NearbyStoresPanel />} />
            <Route path="marketplace" element={<MarketplacePage />} />
          </Route>

          <Route path="/shop/marketplace/product/:productId" element={<ProductDetailsPage />} />
          <Route path="/shop/marketplace/product/:productId/emi" element={<EmiSelectionPage />} />
          <Route path="/shop/marketplace/confirm" element={<ConfirmationPage />} />

          <Route path="*" element={<Navigate to="/shop/marketplace" replace />} />
        </Routes>
      </PurchaseFlowProvider>
    </BrowserRouter>
  )
}
