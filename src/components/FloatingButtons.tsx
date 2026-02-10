import { useState } from "react";
import { ShoppingCart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SimpleChatInterface from "./SimpleChatInterface";
import { useCart } from "@/contexts/CartContext";

const FloatingButtons = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { getTotalItems } = useCart();
  
  const cartItemCount = getTotalItems();

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col space-y-3 z-40">
        {/* Cart Button */}
        <Button
          asChild
          className="h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 hover:shadow-xl transition-all duration-300 group hover:scale-105 relative"
          size="sm"
        >
          <Link to="/cart">
            <ShoppingCart className="h-6 w-6 text-primary-foreground group-hover:scale-110 transition-transform duration-200" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold border-2 border-background">
                {cartItemCount > 9 ? '9+' : cartItemCount}
              </span>
            )}
          </Link>
        </Button>

        {/* Chat Button */}
        <Button
          onClick={() => setIsChatOpen(true)}
          className={`h-14 w-14 rounded-full shadow-lg bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 hover:shadow-xl transition-all duration-300 group ${
            isChatOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100 hover:scale-105'
          }`}
          size="sm"
        >
          <MessageCircle className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-200" />
        </Button>
      </div>

      {/* Chat Interface */}
      <SimpleChatInterface isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
};

export default FloatingButtons;