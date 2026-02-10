import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import LoginPage from "@/components/LoginPage";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Shop from "./pages/Shop";
import Store from "./pages/Store";
import ArtisanStories from "./pages/ArtisanStories";
import Blog from "./pages/Blog";
import HandloomTextiles from "./pages/shop/HandloomTextiles";
import NotFound from "./pages/NotFound";
import LogoProcessor from "./components/LogoProcessor";
import BuyerPatterns from "./pages/BuyerPatterns";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import VendorDashboard from "./pages/vendor/VendorDashboard";
import VendorProducts from "./pages/vendor/VendorProducts";
import VendorOrders from "./pages/vendor/VendorOrders";
import VendorAnalytics from "./pages/vendor/VendorAnalytics";
import VendorProfile from "./pages/vendor/VendorProfile";
import CentreLocator from "./pages/vendor/CentreLocator";
import AddProduct from "./pages/vendor/AddProduct";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminAnalytics from "./pages/admin/AdminAnalytics";
import Dataset from "./pages/admin/Dataset";
import Artisans from "./pages/Artisans";
import ArtisanProfile from "./pages/ArtisanProfile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Public Login Route */}
              <Route path="/login" element={<LoginPage />} />
              
              {/* Protected Routes with Layout */}
              <Route path="/*" element={
                <ProtectedRoute>
                  <Layout>
                    <Routes>
                      {/* Customer Routes */}
                      <Route path="/" element={
                        <ProtectedRoute allowedRoles={['customer']}>
                          <Home />
                        </ProtectedRoute>
                      } />
                      <Route path="/shop" element={
                        <ProtectedRoute allowedRoles={['customer']}>
                          <Shop />
                        </ProtectedRoute>
                      } />
                      <Route path="/shop/handloom" element={
                        <ProtectedRoute allowedRoles={['customer']}>
                          <HandloomTextiles />
                        </ProtectedRoute>
                      } />
                      <Route path="/shop/:category" element={
                        <ProtectedRoute allowedRoles={['customer']}>
                          <HandloomTextiles />
                        </ProtectedRoute>
                      } />
                      <Route path="/store" element={
                        <ProtectedRoute allowedRoles={['customer']}>
                          <Store />
                        </ProtectedRoute>
                      } />
                      <Route path="/stores" element={
                        <ProtectedRoute allowedRoles={['customer']}>
                          <Store />
                        </ProtectedRoute>
                      } />
                      <Route path="/product/:id" element={
                        <ProtectedRoute allowedRoles={['customer']}>
                          <ProductDetail />
                        </ProtectedRoute>
                      } />
                      <Route path="/cart" element={
                        <ProtectedRoute allowedRoles={['customer']}>
                          <Cart />
                        </ProtectedRoute>
                      } />
                      <Route path="/checkout" element={
                        <ProtectedRoute allowedRoles={['customer']}>
                          <Checkout />
                        </ProtectedRoute>
                      } />
                      <Route path="/artisans" element={
                        <ProtectedRoute allowedRoles={['customer']}>
                          <Artisans />
                        </ProtectedRoute>
                      } />
                      <Route path="/artisan/:id" element={
                        <ProtectedRoute allowedRoles={['customer']}>
                          <ArtisanProfile />
                        </ProtectedRoute>
                      } />
                      <Route path="/artisan-stories" element={
                        <ProtectedRoute allowedRoles={['customer']}>
                          <ArtisanStories />
                        </ProtectedRoute>
                      } />
                      <Route path="/blog" element={
                        <ProtectedRoute allowedRoles={['customer']}>
                          <Blog />
                        </ProtectedRoute>
                      } />
                      <Route path="/about" element={
                        <ProtectedRoute allowedRoles={['customer']}>
                          <About />
                        </ProtectedRoute>
                      } />
                      <Route path="/contact" element={
                        <ProtectedRoute allowedRoles={['customer']}>
                          <Contact />
                        </ProtectedRoute>
                      } />
                      <Route path="/faq" element={
                        <ProtectedRoute allowedRoles={['customer']}>
                          <FAQ />
                        </ProtectedRoute>
                      } />

                      {/* Vendor Routes */}
                      <Route path="/vendor/dashboard" element={
                        <ProtectedRoute allowedRoles={['vendor']}>
                          <VendorDashboard />
                        </ProtectedRoute>
                      } />
                      <Route path="/vendor/products" element={
                        <ProtectedRoute allowedRoles={['vendor']}>
                          <VendorProducts />
                        </ProtectedRoute>
                      } />
                      <Route path="/vendor/products/new" element={
                        <ProtectedRoute allowedRoles={['vendor']}>
                          <AddProduct />
                        </ProtectedRoute>
                      } />
                      <Route path="/vendor/orders" element={
                        <ProtectedRoute allowedRoles={['vendor']}>
                          <VendorOrders />
                        </ProtectedRoute>
                      } />
                      <Route path="/vendor/analytics" element={
                        <ProtectedRoute allowedRoles={['vendor']}>
                          <VendorAnalytics />
                        </ProtectedRoute>
                      } />
                      <Route path="/vendor/centre-locator" element={
                        <ProtectedRoute allowedRoles={['vendor']}>
                          <CentreLocator />
                        </ProtectedRoute>
                      } />
                      <Route path="/vendor/profile" element={
                        <ProtectedRoute allowedRoles={['vendor']}>
                          <VendorProfile />
                        </ProtectedRoute>
                      } />

                      {/* Admin Routes */}
                      <Route path="/admin/dashboard" element={
                        <ProtectedRoute allowedRoles={['admin']}>
                          <AdminDashboard />
                        </ProtectedRoute>
                      } />
                      <Route path="/admin/users" element={
                        <ProtectedRoute allowedRoles={['admin']}>
                          <AdminUsers />
                        </ProtectedRoute>
                      } />
                      <Route path="/admin/analytics" element={
                        <ProtectedRoute allowedRoles={['admin']}>
                          <AdminAnalytics />
                        </ProtectedRoute>
                      } />
                      <Route path="/admin/dataset" element={
                        <ProtectedRoute allowedRoles={['admin']}>
                          <Dataset />
                        </ProtectedRoute>
                      } />
                      <Route path="/buyer-patterns" element={
                        <ProtectedRoute allowedRoles={['admin']}>
                          <BuyerPatterns />
                        </ProtectedRoute>
                      } />

                      {/* Shared Routes */}
                      <Route path="/logo-processor" element={<LogoProcessor />} />
                      
                      {/* Catch-all */}
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </Layout>
                </ProtectedRoute>
              } />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;