import { Star, Heart, ShoppingCart, Truck, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import handloomImage from "@/assets/handloom-weaving.jpg";
import productsImage from "@/assets/products-collection.jpg";
import silkSareeImage from "@/assets/silk-saree-collection.jpg";
import cottonDupattaImage from "@/assets/cotton-dupatta.jpg";
import bedCoverImage from "@/assets/bed-cover-set.jpg";
import silkScarfImage from "@/assets/silk-scarf-collection.jpg";

const HandloomTextiles = () => {
  const dealOfTheDay = {
    name: "Kanchipuram Silk Saree - Royal Blue",
    originalPrice: "₹8,500",
    discountPrice: "₹6,800",
    discount: "20% OFF",
    image: silkSareeImage,
    rating: 4.9,
    reviews: 156,
    artisan: "Meera Devi, Kancheepuram"
  };

  const recentlyBought = [
    {
      name: "Traditional Handloom Cotton Saree",
      price: "₹2,400",
      image: handloomImage,
      rating: 4.8,
      artisan: "Kamala Devi, Madurai"
    },
    {
      name: "Silk Dupatta with Gold Border",
      price: "₹1,800",
      image: cottonDupattaImage,
      rating: 4.7,
      artisan: "Priya Sharma, Varanasi"
    },
    {
      name: "Handwoven Table Runner",
      price: "₹950",
      image: handloomImage,
      rating: 4.9,
      artisan: "Lakshmi Bai, Chennai"
    }
  ];

  const products = [
    {
      name: "Pure Silk Kanchipuram Saree",
      price: "₹7,500",
      image: silkSareeImage,
      rating: 4.9,
      reviews: 89,
      artisan: "Meera Devi, Tamil Nadu",
      featured: true
    },
    {
      name: "Handloom Cotton Saree",
      price: "₹2,200",
      image: productsImage,
      rating: 4.7,
      reviews: 123,
      artisan: "Kamala Devi, Tamil Nadu"
    },
    {
      name: "Traditional Silk Dupatta",
      price: "₹1,650",
      image: cottonDupattaImage,
      rating: 4.8,
      reviews: 67,
      artisan: "Ravi Kumar, Tamil Nadu"
    },
    {
      name: "Handwoven Bed Cover Set",
      price: "₹3,200",
      image: bedCoverImage,
      rating: 4.6,
      reviews: 45,
      artisan: "Suresh Chandra, Tamil Nadu"
    },
    {
      name: "Silk Scarf Collection",
      price: "₹1,200",
      image: silkScarfImage,
      rating: 4.8,
      reviews: 78,
      artisan: "Arjun Pillai, Tamil Nadu"
    },
    {
      name: "Cotton Khadi Kurta Set",
      price: "₹1,800",
      image: productsImage,
      rating: 4.5,
      reviews: 56,
      artisan: "Priya Sharma, Rajasthan"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-heritage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="font-sanskrit text-4xl lg:text-5xl font-bold mb-4">
              Handloom Textiles
            </h1>
            <p className="font-body text-lg text-white/90 max-w-2xl mx-auto">
              Discover exquisite handwoven fabrics that carry centuries of tradition. 
              Each piece is a masterwork of skill, patience, and cultural heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Deal of the Day */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-sanskrit text-3xl font-bold text-foreground mb-2">
              Deal of the Day
            </h2>
            <p className="text-muted-foreground">Limited time offer - Don't miss out!</p>
          </div>
          
          <Card className="max-w-4xl mx-auto overflow-hidden border-accent shadow-warm">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img 
                    src={dealOfTheDay.image} 
                    alt={dealOfTheDay.name}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-accent text-white text-lg px-3 py-1">
                    {dealOfTheDay.discount}
                  </Badge>
                </div>
                
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="font-sanskrit text-2xl font-bold text-foreground mb-3">
                    {dealOfTheDay.name}
                  </h3>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-muted-foreground">
                      {dealOfTheDay.rating} ({dealOfTheDay.reviews} reviews)
                    </span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    By {dealOfTheDay.artisan}
                  </p>
                  
                  <div className="flex items-center space-x-3 mb-6">
                    <span className="text-2xl font-bold text-foreground">
                      {dealOfTheDay.discountPrice}
                    </span>
                    <span className="text-lg text-muted-foreground line-through">
                      {dealOfTheDay.originalPrice}
                    </span>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button className="flex-1 bg-gradient-warm">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                    <Button variant="outline" size="icon">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recently Bought */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <TrendingUp className="h-6 w-6 text-primary mr-2" />
            <h2 className="font-sanskrit text-2xl font-bold text-foreground">
              Highest Recently Bought Products
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentlyBought.map((product, index) => (
              <Card key={index} className="group hover:shadow-warm transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-2 right-2 bg-primary">
                      Hot
                    </Badge>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-sanskrit font-semibold text-foreground mb-2">
                      {product.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-2">
                      By {product.artisan}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-primary">{product.price}</span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 text-yellow-500 fill-current" />
                        <span className="text-xs">{product.rating}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Products */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-sanskrit text-3xl font-bold text-foreground">
              All Handloom Textiles
            </h2>
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">Quality Assured</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card 
                key={index}
                className="group cursor-pointer hover:shadow-warm transition-all duration-300 animate-fade-in-up border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.featured && (
                      <Badge className="absolute top-3 left-3 bg-accent text-white">
                        Featured
                      </Badge>
                    )}
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-sanskrit text-lg font-semibold text-foreground mb-2">
                      {product.name}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-3">
                      By {product.artisan}
                    </p>
                    
                    <div className="flex items-center mb-4">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 text-yellow-500 fill-current" />
                        ))}
                      </div>
                      <span className="ml-2 text-xs text-muted-foreground">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xl font-bold text-primary">
                        {product.price}
                      </span>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Truck className="h-3 w-3 mr-1" />
                        Free Shipping
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-gradient-heritage"
                      size="sm"
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HandloomTextiles;