import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/handloom" element={<HandloomTextiles />} />
            <Route path="/shop/:category" element={<HandloomTextiles />} />
            <Route path="/store" element={<Store />} />
            <Route path="/stores" element={<Store />} />
            <Route path="/product/:id" element={<div className="pt-16 p-8"><h1>Product Detail Page - Coming Soon</h1></div>} />
            <Route path="/artisan/:id" element={<div className="pt-16 p-8"><h1>Artisan Profile Page - Coming Soon</h1></div>} />
            <Route path="/artisan-stories" element={<ArtisanStories />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/buyer-patterns" element={<BuyerPatterns />} />
            <Route path="/logo-processor" element={<LogoProcessor />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
