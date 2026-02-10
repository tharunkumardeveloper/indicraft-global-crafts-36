import { useState } from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";
import handloomImage from "@/assets/handloom-weaving.jpg";
import potteryImage from "@/assets/hero-artisan.jpg";
import woodcraftImage from "@/assets/woodcraft.jpg";
import productsImage from "@/assets/products-collection.jpg";

interface CartItem {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  artisan: string;
  quantity: number;
}

const Cart = () => {
  const { toast } = useToast();
  const { items: cartItems, updateQuantity, removeItem } = useCart();
  
  // Add original prices for display (in a real app, this would come from the product data)
  const cartItemsWithOriginalPrice = cartItems.map(item => ({
    ...item,
    originalPrice: Math.round(item.price * 1.25) // Mock 25% discount
  }));

  const handleUpdateQuantity = (id: number, newQuantity: number) => {
    updateQuantity(id, newQuantity);
  };

  const handleRemoveItem = (id: number) => {
    removeItem(id);
    toast({
      title: "Item Removed",
      description: "Item has been removed from your cart",
    });
  };

  const moveToWishlist = (id: number) => {
    const item = cartItemsWithOriginalPrice.find(item => item.id === id);
    handleRemoveItem(id);
    toast({
      title: "Moved to Wishlist",
      description: `${item?.name} moved to your wishlist`,
    });
  };

  const subtotal = cartItemsWithOriginalPrice.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const originalTotal = cartItemsWithOriginalPrice.reduce((sum, item) => sum + (item.originalPrice * item.quantity), 0);
  const savings = originalTotal - subtotal;
  const shipping = subtotal >= 2000 ? 0 : 150;
  const total = subtotal + shipping;

  if (cartItemsWithOriginalPrice.length === 0) {
    return (
      <div className="pt-16 min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <ShoppingBag className="mx-auto h-24 w-24 text-muted-foreground mb-6" />
          <h1 className="font-sanskrit text-3xl font-bold text-foreground mb-4">
            Your Cart is Empty
          </h1>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Looks like you haven't added any items to your cart yet. 
            Start shopping to fill it up!
          </p>
          <Button asChild className="bg-gradient-heritage">
            <Link to="/shop">
              Continue Shopping
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/30 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-sanskrit text-3xl font-bold text-foreground">
            Shopping Cart
          </h1>
          <p className="text-muted-foreground mt-2">
            {cartItemsWithOriginalPrice.length} {cartItemsWithOriginalPrice.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItemsWithOriginalPrice.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full sm:w-24 h-32 sm:h-24 object-cover rounded-lg"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 space-y-2">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <div>
                          <Badge variant="secondary" className="text-xs mb-1">
                            {item.category}
                          </Badge>
                          <h3 className="font-sanskrit text-lg font-semibold text-foreground">
                            {item.name}
                          </h3>
                          <p className="text-sm text-primary">
                            By {item.artisan}
                          </p>
                        </div>
                        
                        <div className="text-right">
                          <div className="flex items-center space-x-2">
                            <span className="text-lg font-bold text-foreground">
                              ₹{item.price.toLocaleString()}
                            </span>
                            <span className="text-sm text-muted-foreground line-through">
                              ₹{item.originalPrice.toLocaleString()}
                            </span>
                          </div>
                          <Badge variant="destructive" className="text-xs mt-1">
                            {Math.round((1 - item.price / item.originalPrice) * 100)}% OFF
                          </Badge>
                        </div>
                      </div>

                      {/* Quantity and Actions */}
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 pt-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center border rounded-md">
                            <button
                              onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                              className="px-3 py-1 hover:bg-muted transition-colors"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="px-4 py-1 border-x min-w-[3rem] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                              className="px-3 py-1 hover:bg-muted transition-colors"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          
                          <span className="text-sm text-muted-foreground">
                            Total: ₹{(item.price * item.quantity).toLocaleString()}
                          </span>
                        </div>

                        <div className="flex space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => moveToWishlist(item.id)}
                            className="text-primary hover:text-primary/80"
                          >
                            <Heart className="h-4 w-4 mr-1" />
                            Wishlist
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleRemoveItem(item.id)}
                            className="text-destructive hover:text-destructive/80"
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Continue Shopping */}
            <div className="pt-4">
              <Button variant="outline" asChild>
                <Link to="/shop">
                  Continue Shopping
                </Link>
              </Button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="font-sanskrit text-xl font-semibold mb-4">
                  Order Summary
                </h3>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal ({cartItemsWithOriginalPrice.length} items)</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between text-green-600">
                    <span>You Save</span>
                    <span>-₹{savings.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>
                      {shipping === 0 ? (
                        <span className="text-green-600">FREE</span>
                      ) : (
                        `₹${shipping}`
                      )}
                    </span>
                  </div>
                  
                  {shipping > 0 && (
                    <p className="text-xs text-muted-foreground">
                      Add ₹{(2000 - subtotal).toLocaleString()} more for free shipping
                    </p>
                  )}
                </div>

                <Separator className="my-4" />

                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>

                <Button className="w-full mt-6 bg-gradient-heritage" asChild>
                  <Link to="/checkout">
                    Proceed to Checkout
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                  <p className="text-xs text-muted-foreground text-center">
                    🔒 Secure checkout with 256-bit SSL encryption
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;