import { ArrowRight, Star, Users, Globe, Award, Play, Heart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-artisan.jpg";
import heroWorkshop from "@/assets/hero-artisans-workshop.jpg";
import productsShowcase from "@/assets/products-showcase.jpg";
import productsImage from "@/assets/products-collection.jpg";
import handloomImage from "@/assets/handloom-weaving.jpg";
import woodcraftImage from "@/assets/woodcraft.jpg";

const Home = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Artisan Partners" },
    { icon: Globe, value: "50+", label: "Countries Served" },
    { icon: Award, value: "15+", label: "Years of Heritage" },
    { icon: Star, value: "4.9", label: "Customer Rating" }
  ];

  const craftCategories = [
    {
      title: "Handloom Textiles",
      description: "Exquisite fabrics woven with traditional techniques",
      image: handloomImage
    },
    {
      title: "Pottery & Ceramics",
      description: "Beautiful terracotta and ceramic artworks",
      image: heroImage
    },
    {
      title: "Woodcraft",
      description: "Intricate carvings and decorative wooden items",
      image: woodcraftImage
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section - Simplified */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroWorkshop} 
            alt="Indian artisans at work in traditional workshop" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30"></div>
        </div>
        
        {/* Main Content */}
        <div className="relative z-10 w-full">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center">
              <div className="animate-fade-in-up space-y-6">
                {/* Badge */}
                <Badge className="bg-gradient-warm/20 text-white border-accent/50 px-4 py-2 text-sm backdrop-blur-sm">
                  <Award className="h-4 w-4 mr-2" />
                  Explore India's Handmade Heritage
                </Badge>
                
                {/* Main Heading */}
                <h1 className="font-sanskrit text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
                  From Artisan
                  <span className="block text-accent bg-gradient-to-r from-accent via-accent/90 to-mustard bg-clip-text text-transparent">
                    Hearts
                  </span>
                  <span className="block text-2xl sm:text-3xl lg:text-4xl text-white/90">
                    to Your Home
                  </span>
                </h1>
                
                {/* Description */}
                <p className="font-body text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                  Discover authentic Indian handicrafts made by master artisans with centuries-old traditions.
                </p>
                
                {/* CTA Button */}
                <div className="flex justify-center pt-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-warm hover:bg-gradient-heritage hover:shadow-warm transition-all duration-500 text-base px-8 py-4 rounded-xl group"
                    asChild
                  >
                    <Link to="/shop">
                      Explore Collection
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg mb-3">
                  <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="font-sanskrit text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</div>
                <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-sanskrit text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Discover Our Crafts
            </h2>
            <p className="font-body text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Each category represents centuries of tradition, passed down through generations 
              of skilled artisans who pour their heart into every creation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {craftCategories.map((category, index) => (
              <Card 
                key={index}
                className="group cursor-pointer hover:shadow-warm transition-all duration-300 animate-fade-in-up border-border/50"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-sanskrit text-xl font-semibold text-foreground mb-2">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {category.description}
                    </p>
                    <Button variant="ghost" size="sm" className="p-0 h-auto font-medium text-primary" asChild>
                      <Link to="/shop" target="_blank" rel="noopener noreferrer">
                        Explore More <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <img 
                src={productsImage} 
                alt="Collection of Indian handicrafts" 
                className="rounded-2xl shadow-soft w-full h-[400px] object-cover"
              />
            </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="font-sanskrit text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Preserving India's Rich Heritage
              </h2>
              <p className="font-body text-muted-foreground mb-6">
                Every product in our collection carries the soul of India. We work directly 
                with artisan communities across the country, ensuring fair wages and 
                preserving traditional techniques that have been perfected over millennia.
              </p>
              <p className="font-body text-muted-foreground mb-8">
                When you choose Indicraft, you're not just buying a product – you're 
                supporting families, preserving culture, and bringing authentic Indian 
                artistry into your home.
              </p>
              <Button asChild className="bg-gradient-heritage">
                <Link to="/about" target="_blank" rel="noopener noreferrer">
                  Learn Our Story
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonial Section */}
      <section className="py-20 bg-gradient-earth">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sanskrit text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Voices from Our Community
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover what our customers say about their journey with authentic Indian crafts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="relative overflow-hidden border-primary/20 shadow-soft hover:shadow-warm transition-all duration-300 animate-fade-in-up">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-6">
                  "The Kanchipuram saree I bought is absolutely stunning. The quality and craftsmanship 
                  are exceptional. It's clear that this was made with love and skill."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">SN</span>
                  </div>
                  <div className="ml-4">
                    <p className="font-sanskrit font-semibold text-foreground">Sarah Newman</p>
                    <p className="text-sm text-muted-foreground">London, UK</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-primary/20 shadow-soft hover:shadow-warm transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-6">
                  "Amazing pottery collection! The terracotta water pot not only looks beautiful 
                  but also keeps water naturally cool. Authentic craftsmanship at its finest."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-heritage rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">MJ</span>
                  </div>
                  <div className="ml-4">
                    <p className="font-sanskrit font-semibold text-foreground">Michael Johnson</p>
                    <p className="text-sm text-muted-foreground">California, USA</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-primary/20 shadow-soft hover:shadow-warm transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-6">
                  "The wooden toys for my children are not just beautiful but also safe and educational. 
                  You can feel the love and tradition in every piece."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">AK</span>
                  </div>
                  <div className="ml-4">
                    <p className="font-sanskrit font-semibold text-foreground">Aisha Kumar</p>
                    <p className="text-sm text-muted-foreground">Toronto, Canada</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-warm relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
          <div className="absolute top-32 right-20 w-16 h-16 border border-white rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-white rounded-full"></div>
          <div className="absolute bottom-32 right-1/3 w-8 h-8 border-2 border-white rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 mb-6">
              <Heart className="h-4 w-4 mr-2" />
              Start Your Heritage Journey
            </Badge>
            
            <h2 className="font-sanskrit text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Bring India Home?
            </h2>
            
            <p className="font-body text-white/90 text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
              Start your journey into the world of authentic Indian craftsmanship. 
              Each piece tells a story, carries a tradition, and brings beauty to your space.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 px-8 py-4 text-lg rounded-xl group shadow-xl"
                asChild
              >
                <Link to="/shop">
                  Browse Collection
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 px-8 py-4 text-lg rounded-xl group shadow-xl"
                asChild
              >
                <Link to="/contact">
                  <Heart className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Get in Touch
                </Link>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/70 text-sm">
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4" />
                <span>100% Authentic</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span>Worldwide Shipping</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-4 w-4" />
                <span>Supporting Artisans</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;