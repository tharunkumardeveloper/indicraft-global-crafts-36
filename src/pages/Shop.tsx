import { Link } from "react-router-dom";
import { ArrowRight, Star, Truck, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { products, categories } from "@/data/products";
import { getArtisanIdByName } from "@/data/artisans";

const Shop = () => {

  const features = [
    {
      icon: Award,
      title: "100% Authentic",
      description: "Certified handcrafted products"
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders above ₹2,000"
    },
    {
      icon: Star,
      title: "Quality Assured",
      description: "Premium quality guarantee"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-heritage">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-sanskrit text-4xl lg:text-5xl font-bold text-white mb-6">
            Shop Authentic Indian Crafts
          </h1>
          <p className="font-body text-lg text-white/90 max-w-2xl mx-auto">
            Discover handcrafted treasures from across India. Each piece tells a story 
            of tradition, skill, and cultural heritage passed down through generations.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-sanskrit text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Filter */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center mb-8 px-2">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className="mb-2 text-xs sm:text-sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* All Products */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-sanskrit text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Handcrafted Indian Products
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover {products.length} authentic handcrafted treasures from skilled artisans across India. 
              Each piece tells a story of tradition, skill, and cultural heritage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {products.map((product, index) => (
              <Card 
                key={product.id}
                className="group cursor-pointer hover:shadow-warm transition-all duration-300 animate-fade-in-up border-border/50 overflow-hidden"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-36 sm:h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.featured && (
                      <Badge className="absolute top-2 left-2 bg-accent text-white text-xs">
                        Featured
                      </Badge>
                    )}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="secondary" size="icon" className="h-8 w-8">
                        <Star className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-3 sm:p-4">
                    <div className="mb-2">
                      <Badge variant="secondary" className="text-xs mb-2">
                        {product.category}
                      </Badge>
                    </div>
                    
                    <h3 className="font-sanskrit text-sm font-semibold text-foreground mb-1 line-clamp-2">
                      {product.name}
                    </h3>
                    
                    <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                      {product.description}
                    </p>
                    
                    <p className="text-xs text-primary mb-3">
                      By{" "}
                      {getArtisanIdByName(product.artisan) ? (
                        <Link 
                          to={`/artisan/${getArtisanIdByName(product.artisan)}`}
                          className="hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {product.artisan}
                        </Link>
                      ) : (
                        product.artisan
                      )}
                    </p>
                    
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-base sm:text-lg font-bold text-foreground">
                        {product.price}
                      </span>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Star className="h-3 w-3 text-yellow-500 fill-current mr-1" />
                        {product.rating || 4.5}
                      </div>
                    </div>
                    
                    <Button 
                      size="sm" 
                      className="w-full bg-gradient-heritage text-xs"
                      asChild
                    >
                      <Link to={`/product/${product.id}`}>
                        View Details
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sanskrit text-3xl lg:text-4xl font-bold text-white mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="font-body text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Our artisans can create custom pieces just for you. Get in touch to discuss 
            your vision and bring your dream piece to life.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
            asChild
          >
            <Link to="/contact" target="_blank" rel="noopener noreferrer">
              Request Custom Order
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Shop;