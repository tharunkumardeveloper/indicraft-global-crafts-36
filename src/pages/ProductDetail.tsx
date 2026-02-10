import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, Heart, Share2, ShoppingCart, Truck, Shield, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";
import { products } from "@/data/products";
import { getArtisanIdByName } from "@/data/artisans";

const ProductDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products.find(p => p.id === parseInt(id || "1")) || products[0];

  // Generate additional product images (in a real app, each product would have multiple images)
  const productImages = [
    product.image,
    product.image, // Using same image for now - in real app would have different angles
    product.image,
    product.image
  ];

  const addToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: parseInt(product.price.replace(/[₹,]/g, "")),
        image: product.image,
        category: product.category,
        artisan: product.artisan
      });
    }
    toast({
      title: "Added to Cart",
      description: `${product.name} (${quantity}) added to your cart`,
    });
  };

  const addToWishlist = () => {
    toast({
      title: "Added to Wishlist",
      description: `${product.name} saved to your wishlist`,
    });
  };

  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-primary">Shop</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button variant="ghost" className="mb-6" asChild>
          <Link to="/shop">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Shop
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-muted">
              <img
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? "border-primary" : "border-transparent"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-2">{product.category}</Badge>
              <h1 className="font-sanskrit text-3xl font-bold text-foreground mb-2">
                {product.name}
              </h1>
              <p className="text-muted-foreground mb-4">{product.description}</p>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating || 4.5)
                          ? "text-yellow-500 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    {product.rating || 4.5} ({product.reviews || 0} reviews)
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-foreground">{product.price}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-lg text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                    <Badge variant="destructive">
                      {Math.round((1 - parseInt(product.price.replace(/[₹,]/g, "")) / parseInt(product.originalPrice.replace(/[₹,]/g, ""))) * 100)}% OFF
                    </Badge>
                  </>
                )}
              </div>

              <p className="text-sm text-primary mb-6">
                Handcrafted by{" "}
                {getArtisanIdByName(product.artisan) ? (
                  <Link 
                    to={`/artisan/${getArtisanIdByName(product.artisan)}`}
                    className="font-semibold hover:underline"
                  >
                    {product.artisan}
                  </Link>
                ) : (
                  <span className="font-semibold">{product.artisan}</span>
                )}
              </p>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium">Quantity:</label>
                <div className="flex items-center border rounded-md">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 hover:bg-muted"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 border-x">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 hover:bg-muted"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button onClick={addToCart} className="flex-1 bg-gradient-heritage">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
                <Button variant="outline" onClick={addToWishlist}>
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>

              <Button variant="outline" className="w-full" asChild>
                <Link to="/cart">
                  Buy Now
                </Link>
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="flex items-center space-x-2 text-sm">
                <Truck className="h-4 w-4 text-primary" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Shield className="h-4 w-4 text-primary" />
                <span>Authentic Product</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <RotateCcw className="h-4 w-4 text-primary" />
                <span>Easy Returns</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-sanskrit text-xl font-semibold mb-4">Product Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Category:</span>
                  <span>{product.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Artisan:</span>
                  <span>{product.artisan}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Material:</span>
                  <span>Traditional Handcrafted</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Origin:</span>
                  <span>India</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Care:</span>
                  <span>Handle with care</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-sanskrit text-xl font-semibold mb-4">Shipping & Returns</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium">Free Shipping:</span>
                  <p className="text-muted-foreground">On orders above ₹2,000</p>
                </div>
                <div>
                  <span className="font-medium">Delivery Time:</span>
                  <p className="text-muted-foreground">5-7 business days</p>
                </div>
                <div>
                  <span className="font-medium">Returns:</span>
                  <p className="text-muted-foreground">30-day return policy</p>
                </div>
                <div>
                  <span className="font-medium">Warranty:</span>
                  <p className="text-muted-foreground">1-year craftsmanship warranty</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;