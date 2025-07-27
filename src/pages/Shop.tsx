import { Link } from "react-router-dom";
import { ArrowRight, Star, Truck, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import handloomImage from "@/assets/handloom-weaving.jpg";
import potteryImage from "@/assets/hero-artisan.jpg";
import woodcraftImage from "@/assets/woodcraft.jpg";
import productsImage from "@/assets/products-collection.jpg";

const Shop = () => {
  const products = [
    // Handwoven Sarees
    { id: 1, name: "Kanchipuram Silk Saree - Royal Blue", price: "₹6,800", category: "Handwoven Sarees", image: handloomImage, description: "Traditional silk saree with intricate gold border", artisan: "Meera Devi", featured: true },
    { id: 2, name: "Banarasi Silk Saree - Emerald Green", price: "₹5,200", category: "Handwoven Sarees", image: productsImage, description: "Handwoven silk with traditional motifs", artisan: "Priya Sharma" },
    { id: 3, name: "Cotton Handloom Saree - Pink", price: "₹2,400", category: "Handwoven Sarees", image: handloomImage, description: "Soft cotton saree with natural dyes", artisan: "Kamala Devi" },
    
    // Terracotta Items
    { id: 4, name: "Traditional Terracotta Diyas Set", price: "₹450", category: "Terracotta Items", image: potteryImage, description: "Handcrafted oil lamps for festivals", artisan: "Ravi Kumar", featured: true },
    { id: 5, name: "Terracotta Water Pot - Large", price: "₹1,200", category: "Terracotta Items", image: potteryImage, description: "Traditional water storage pot", artisan: "Ravi Kumar" },
    { id: 6, name: "Decorative Terracotta Vase", price: "₹800", category: "Terracotta Items", image: productsImage, description: "Beautiful vase with tribal patterns", artisan: "Suresh Das" },
    
    // Wooden Toys
    { id: 7, name: "Channapatna Wooden Toys Set", price: "₹950", category: "Wooden Toys", image: woodcraftImage, description: "Colorful traditional wooden toys", artisan: "Lakshmi Bai", featured: true },
    { id: 8, name: "Wooden Rocking Horse", price: "₹1,800", category: "Wooden Toys", image: woodcraftImage, description: "Hand-carved rocking horse", artisan: "Lakshmi Bai" },
    { id: 9, name: "Traditional Wooden Puzzle", price: "₹600", category: "Wooden Toys", image: woodcraftImage, description: "Educational wooden puzzle game", artisan: "Suresh Chandra" },
    
    // Brass Puja Items
    { id: 10, name: "Brass Pooja Thali Set", price: "₹2,200", category: "Brass Puja Items", image: productsImage, description: "Complete brass worship set", artisan: "Arjun Sharma", featured: true },
    { id: 11, name: "Brass Diya with Stand", price: "₹1,100", category: "Brass Puja Items", image: handloomImage, description: "Traditional brass lamp", artisan: "Arjun Sharma" },
    { id: 12, name: "Brass Incense Holder", price: "₹750", category: "Brass Puja Items", image: productsImage, description: "Ornate incense stick holder", artisan: "Arjun Sharma" },
    
    // Block-printed Scarves
    { id: 13, name: "Block Printed Silk Scarf - Blue", price: "₹1,650", category: "Block-printed Scarves", image: handloomImage, description: "Hand block printed silk scarf", artisan: "Priya Patel", featured: true },
    { id: 14, name: "Cotton Block Print Dupatta", price: "₹900", category: "Block-printed Scarves", image: productsImage, description: "Traditional block printed dupatta", artisan: "Priya Sharma" },
    { id: 15, name: "Kalamkari Print Stole", price: "₹1,200", category: "Block-printed Scarves", image: handloomImage, description: "Hand-painted Kalamkari stole", artisan: "Priya Patel" },
    
    // Handmade Journals
    { id: 16, name: "Handmade Paper Journal - Large", price: "₹800", category: "Handmade Journals", image: productsImage, description: "Eco-friendly handmade paper journal", artisan: "Suresh Das", featured: true },
    { id: 17, name: "Leather Bound Diary", price: "₹1,200", category: "Handmade Journals", image: handloomImage, description: "Traditional leather diary", artisan: "Anita Devi" },
    { id: 18, name: "Recycled Paper Notebook Set", price: "₹450", category: "Handmade Journals", image: productsImage, description: "Set of eco-friendly notebooks", artisan: "Suresh Das" },
    
    // Jute Bags
    { id: 19, name: "Embroidered Jute Tote Bag", price: "₹650", category: "Jute Bags", image: handloomImage, description: "Eco-friendly jute bag with embroidery", artisan: "Kamala Devi" },
    { id: 20, name: "Jute Shopping Bag - Large", price: "₹400", category: "Jute Bags", image: productsImage, description: "Sturdy jute shopping bag", artisan: "Priya Patel" },
    { id: 21, name: "Jute Lunch Bag", price: "₹350", category: "Jute Bags", image: handloomImage, description: "Insulated jute lunch bag", artisan: "Anita Devi" },
    
    // Clay Kitchenware
    { id: 22, name: "Clay Cooking Pot Set", price: "₹1,800", category: "Clay Kitchenware", image: potteryImage, description: "Traditional clay cooking pots", artisan: "Ravi Kumar" },
    { id: 23, name: "Clay Water Bottles", price: "₹600", category: "Clay Kitchenware", image: potteryImage, description: "Natural clay water bottles", artisan: "Ravi Kumar" },
    { id: 24, name: "Earthenware Dinner Set", price: "₹2,400", category: "Clay Kitchenware", image: productsImage, description: "Complete clay dinner set", artisan: "Suresh Das" },
    
    // Palm Leaf Items
    { id: 25, name: "Palm Leaf Storage Baskets", price: "₹750", category: "Palm Leaf Items", image: handloomImage, description: "Set of woven palm leaf baskets", artisan: "Suresh Chandra" },
    { id: 26, name: "Palm Leaf Wall Hanging", price: "₹900", category: "Palm Leaf Items", image: productsImage, description: "Decorative palm leaf art", artisan: "Anita Devi" },
    { id: 27, name: "Palm Leaf Table Mats", price: "₹450", category: "Palm Leaf Items", image: handloomImage, description: "Set of eco-friendly table mats", artisan: "Suresh Chandra" },
    
    // Additional Items
    { id: 28, name: "Hand-painted Coasters Set", price: "₹550", category: "Home Décor", image: productsImage, description: "Wooden coasters with traditional art", artisan: "Lakshmi Bai" },
    { id: 29, name: "Tribal Silver Jewelry Set", price: "₹3,200", category: "Jewelry", image: handloomImage, description: "Traditional tribal silver ornaments", artisan: "Anita Devi" },
    { id: 30, name: "Bamboo Table Lamp", price: "₹1,400", category: "Home Décor", image: woodcraftImage, description: "Eco-friendly bamboo lamp", artisan: "Anita Devi" }
  ];

  const categories = [
    "All Products",
    "Handwoven Sarees", 
    "Terracotta Items",
    "Wooden Toys",
    "Brass Puja Items", 
    "Block-printed Scarves",
    "Handmade Journals",
    "Jute Bags",
    "Clay Kitchenware",
    "Palm Leaf Items",
    "Home Décor",
    "Jewelry"
  ];

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
              Discover 30 authentic handcrafted treasures from skilled artisans across India. 
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
                      By {product.artisan}
                    </p>
                    
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-base sm:text-lg font-bold text-foreground">
                        {product.price}
                      </span>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Star className="h-3 w-3 text-yellow-500 fill-current mr-1" />
                        4.8
                      </div>
                    </div>
                    
                    <Button 
                      size="sm" 
                      className="w-full bg-gradient-heritage text-xs"
                      asChild
                    >
                      <Link to={`/product/${product.id}`} target="_blank" rel="noopener noreferrer">
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