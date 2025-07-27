import { MapPin, Star, ExternalLink, MessageCircle, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import meeraDevi from "@/assets/artisan-meera-devi.jpg";
import raviKumar from "@/assets/artisan-ravi-kumar.jpg";
import lakshmiBai from "@/assets/artisan-lakshmi-bai.jpg";
import arjunSharma from "@/assets/artisan-arjun-sharma.jpg";
import priyaPatel from "@/assets/artisan-priya-patel.jpg";
import sureshDas from "@/assets/artisan-suresh-das.jpg";
import handloomImage from "@/assets/handloom-weaving.jpg";
import heroArtisan from "@/assets/hero-artisan.jpg";
import woodcraftImage from "@/assets/woodcraft.jpg";
import productsImage from "@/assets/products-collection.jpg";

const Stores = () => {
  const artisans = [
    {
      id: "meera-devi",
      name: "Meera Devi",
      location: "Kanchipuram, Tamil Nadu",
      image: meeraDevi,
      craft: "Handloom Weaving",
      experience: "25+ years",
      rating: 4.9,
      reviews: 156,
      specialties: ["Kanchipuram Silk Sarees", "Cotton Handlooms", "Traditional Weaving"],
      bio: "Master weaver specializing in traditional Kanchipuram silk sarees with intricate gold zari work.",
      featured: true,
      empowermentStory: "From a small village weaver to supplying premium sarees to luxury boutiques worldwide, Meera's journey represents the transformation of traditional crafts through digital platforms.",
      achievements: ["UNESCO Heritage Craft Award", "National Handloom Excellence Award"],
      monthlyIncome: "₹45,000 - ₹75,000",
      productsAvailable: 28
    },
    {
      id: "ravi-kumar",
      name: "Ravi Kumar",
      location: "Madurai, Tamil Nadu", 
      image: raviKumar,
      craft: "Pottery & Ceramics",
      experience: "20+ years",
      rating: 4.8,
      reviews: 134,
      specialties: ["Terracotta Pottery", "Clay Kitchenware", "Decorative Ceramics"],
      bio: "Traditional potter creating beautiful terracotta and ceramic pieces using eco-friendly techniques.",
      empowermentStory: "Ravi transformed his small pottery workshop into a sustainable business, now employing 8 local artisans and exporting to 12 countries.",
      achievements: ["Eco-Craft Innovation Award", "Tamil Nadu Artisan Excellence"],
      monthlyIncome: "₹38,000 - ₹55,000",
      productsAvailable: 42
    },
    {
      id: "lakshmi-bai",
      name: "Lakshmi Bai",
      location: "Thanjavur, Tamil Nadu",
      image: lakshmiBai,
      craft: "Woodcraft & Carvings",
      experience: "18+ years", 
      rating: 4.9,
      reviews: 89,
      specialties: ["Wooden Toys", "Temple Carvings", "Decorative Items"],
      bio: "Expert wood carver known for intricate traditional designs and eco-friendly wooden toys.",
      empowermentStory: "Breaking gender barriers in wood carving, Lakshmi now leads a cooperative of 15 women artisans, creating sustainable livelihoods.",
      achievements: ["Women Empowerment in Crafts Award", "Traditional Toy Innovation Prize"],
      monthlyIncome: "₹42,000 - ₹68,000",
      productsAvailable: 35
    },
    {
      id: "kamala-devi",
      name: "Kamala Devi",
      location: "Pudukkottai, Tamil Nadu",
      image: handloomImage,
      craft: "Textile Arts",
      experience: "22+ years",
      rating: 4.7,
      reviews: 112,
      specialties: ["Hand Embroidery", "Cushion Covers", "Traditional Textiles"],
      bio: "Skilled textile artisan specializing in hand embroidered home décor and traditional fabrics.",
      empowermentStory: "Kamala's embroidery collective now supports 25 women from rural areas, providing them with steady income and skill development.",
      achievements: ["Rural Women Empowerment Award", "Textile Heritage Preservation"],
      monthlyIncome: "₹35,000 - ₹50,000",
      productsAvailable: 31
    },
    {
      id: "suresh-chandra",
      name: "Suresh Chandra", 
      location: "Chettinad, Tamil Nadu",
      image: heroArtisan,
      craft: "Palm Leaf Crafts",
      experience: "15+ years",
      rating: 4.6,
      reviews: 78,
      specialties: ["Palm Leaf Baskets", "Traditional Crafts", "Eco-friendly Products"],
      bio: "Eco-conscious artisan creating beautiful palm leaf products and promoting sustainable living.",
      empowermentStory: "Suresh's innovation in palm leaf products has created a new market segment, generating income for 40+ families in his region.",
      achievements: ["Sustainable Craft Innovation Award", "Environmental Impact Recognition"],
      monthlyIncome: "₹32,000 - ₹48,000",
      productsAvailable: 24
    },
    {
      id: "priya-sharma",
      name: "Priya Sharma",
      location: "Coimbatore, Tamil Nadu",
      image: priyaPatel,
      craft: "Block Printing",
      experience: "12+ years",
      rating: 4.8,
      reviews: 95,
      specialties: ["Block Printed Scarves", "Kalamkari Art", "Traditional Prints"],
      bio: "Young artisan reviving traditional block printing techniques with contemporary designs.",
      empowermentStory: "At 28, Priya has revolutionized block printing by combining traditional techniques with modern designs, inspiring a new generation of artisans.",
      achievements: ["Young Innovator in Crafts", "Traditional Arts Revival Award"],
      monthlyIncome: "₹40,000 - ₹62,000",
      productsAvailable: 38
    },
    {
      id: "arjun-sharma",
      name: "Arjun Sharma",
      location: "Jaipur, Rajasthan",
      image: arjunSharma,
      craft: "Brass Metalwork",
      experience: "30+ years",
      rating: 4.9,
      reviews: 203,
      specialties: ["Brass Puja Items", "Metal Decoratives", "Traditional Utensils"],
      bio: "Master craftsman creating exquisite brass and metal artifacts using ancestral techniques.",
      empowermentStory: "Arjun's family workshop has grown into a center of excellence, training 50+ young artisans in traditional metalwork while embracing modern marketing.",
      achievements: ["Master Craftsman Award", "Heritage Preservation Excellence"],
      monthlyIncome: "₹55,000 - ₹85,000",
      productsAvailable: 47
    },
    {
      id: "priya-patel",
      name: "Priya Patel",
      location: "Ahmedabad, Gujarat", 
      image: priyaPatel,
      craft: "Khadi & Textiles",
      experience: "16+ years",
      rating: 4.7,
      reviews: 87,
      specialties: ["Khadi Products", "Handspun Textiles", "Natural Fabrics"],
      bio: "Dedicated to preserving Khadi tradition and promoting natural textile arts.",
      empowermentStory: "Priya's Khadi collective has transformed rural Gujarat communities, providing sustainable livelihoods to 100+ women while promoting eco-friendly textiles.",
      achievements: ["Khadi Innovation Award", "Community Development Recognition"],
      monthlyIncome: "₹43,000 - ₹65,000",
      productsAvailable: 29
    },
    {
      id: "suresh-das",
      name: "Suresh Das",
      location: "Bhubaneswar, Odisha",
      image: sureshDas,
      craft: "Traditional Crafts",
      experience: "19+ years", 
      rating: 4.8,
      reviews: 124,
      specialties: ["Handmade Journals", "Traditional Paper", "Cultural Artifacts"],
      bio: "Preserving ancient Odishan craft traditions through handmade products and cultural artifacts.",
      empowermentStory: "Suresh has created a cultural craft hub, preserving Odishan traditions while providing modern market access to 35+ traditional artisans.",
      achievements: ["Cultural Heritage Preservation Award", "Traditional Craft Innovation"],
      monthlyIncome: "₹38,000 - ₹58,000",
      productsAvailable: 33
    },
    {
      id: "anita-devi",
      name: "Anita Devi",
      location: "Guwahati, Assam",
      image: woodcraftImage,
      craft: "Bamboo Crafts",
      experience: "14+ years",
      rating: 4.6,
      reviews: 56,
      specialties: ["Bamboo Lamps", "Eco Products", "Traditional Crafts"],
      bio: "Innovative bamboo craft artisan promoting sustainable living through beautiful eco-friendly products.",
      empowermentStory: "Anita's bamboo craft initiative has transformed rural Assam's economy, creating eco-friendly jobs for 60+ families while promoting sustainable practices.",
      achievements: ["Eco-Innovation Award", "Sustainable Development Recognition"],
      monthlyIncome: "₹34,000 - ₹52,000",
      productsAvailable: 26
    }
  ];

  const featuredArtisan = artisans.find(artisan => artisan.featured);
  const regularArtisans = artisans.filter(artisan => !artisan.featured);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-heritage">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-sanskrit text-4xl lg:text-5xl font-bold text-white mb-6">
            Artisan Marketplace
          </h1>
          <p className="font-body text-lg text-white/90 max-w-2xl mx-auto">
            Discover authentic handcrafted products directly from skilled artisans across India. 
            Each purchase supports traditional crafts and empowers local communities.
          </p>
        </div>
      </section>

      {/* Featured Artisan Store */}
      {featuredArtisan && (
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="font-sanskrit text-3xl font-bold text-foreground mb-2">
                Featured Artisan Store
              </h2>
              <p className="text-muted-foreground">This month's highlighted craftsperson</p>
            </div>
            
            <Card className="max-w-6xl mx-auto overflow-hidden border-accent shadow-warm">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative">
                    <img 
                      src={featuredArtisan.image} 
                      alt={featuredArtisan.name}
                      className="w-full h-80 lg:h-full object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-accent text-white text-lg px-3 py-1">
                      Featured Store
                    </Badge>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{featuredArtisan.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="font-sanskrit text-2xl font-bold text-foreground">
                        {featuredArtisan.name}
                      </h3>
                      <Badge variant="secondary" className="text-xs">
                        {featuredArtisan.productsAvailable} Products
                      </Badge>
                    </div>
                    
                    <div className="flex items-center mb-3">
                      <MapPin className="h-4 w-4 text-primary mr-2" />
                      <span className="text-muted-foreground">{featuredArtisan.location}</span>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <div className="flex items-center space-x-1 mr-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                        ))}
                        <span className="ml-2 text-sm text-muted-foreground">
                          ({featuredArtisan.reviews} reviews)
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      {featuredArtisan.bio}
                    </p>

                    <div className="mb-4">
                      <p className="text-sm font-medium text-foreground mb-2">Empowerment Impact:</p>
                      <p className="text-sm text-muted-foreground italic">
                        "{featuredArtisan.empowermentStory}"
                      </p>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm font-medium text-foreground mb-2">Monthly Income Range:</p>
                      <Badge variant="outline" className="text-primary border-primary">
                        {featuredArtisan.monthlyIncome}
                      </Badge>
                    </div>
                    
                    <div className="mb-6">
                      <p className="text-sm font-medium text-foreground mb-2">Specialties:</p>
                      <div className="flex flex-wrap gap-2">
                        {featuredArtisan.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button 
                        className="flex-1 bg-gradient-warm hover:shadow-lg transition-all"
                        asChild
                      >
                        <Link to={`/artisan/${featuredArtisan.id}`}>
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Visit Store
                        </Link>
                      </Button>
                      <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Contact
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* All Artisan Stores */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-sanskrit text-3xl font-bold text-foreground mb-4">
              Artisan Stores Directory
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore authentic handcrafted products from talented artisans across India. Each store represents years of expertise and cultural heritage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArtisans.map((artisan, index) => (
              <Card 
                key={artisan.id}
                className="group cursor-pointer hover:shadow-warm transition-all duration-300 animate-fade-in-up border-border/50 overflow-hidden hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={artisan.image} 
                      alt={artisan.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-primary text-white">
                        {artisan.experience}
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 text-yellow-500 fill-current" />
                        <span className="text-xs font-medium">{artisan.rating}</span>
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3">
                      <Badge variant="secondary" className="bg-white/90 text-foreground">
                        {artisan.productsAvailable} Products
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-sanskrit text-lg font-semibold text-foreground">
                          {artisan.name}
                        </h3>
                        <p className="text-sm text-accent font-medium">
                          {artisan.craft}
                        </p>
                      </div>
                      <Clock className="h-4 w-4 text-muted-foreground" />
                    </div>
                    
                    <div className="flex items-center mb-3">
                      <MapPin className="h-3 w-3 text-primary mr-1" />
                      <span className="text-xs text-muted-foreground">{artisan.location}</span>
                    </div>
                    
                    <div className="flex items-center mb-3">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 text-yellow-500 fill-current" />
                        ))}
                      </div>
                      <span className="ml-2 text-xs text-muted-foreground">
                        ({artisan.reviews})
                      </span>
                    </div>
                    
                    <p className="text-xs text-muted-foreground mb-4 line-clamp-2">
                      {artisan.bio}
                    </p>

                    <div className="mb-4">
                      <p className="text-xs font-medium text-foreground mb-1">Income Impact:</p>
                      <Badge variant="outline" className="text-xs">
                        {artisan.monthlyIncome}
                      </Badge>
                    </div>

                    {artisan.achievements && (
                      <div className="mb-4">
                        <div className="flex items-center gap-1 mb-1">
                          <Award className="h-3 w-3 text-accent" />
                          <p className="text-xs font-medium text-foreground">Recognition:</p>
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-1">
                          {artisan.achievements[0]}
                        </p>
                      </div>
                    )}
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      asChild
                    >
                      <Link to={`/artisan/${artisan.id}`}>
                        Visit Store
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-sanskrit text-3xl font-bold text-foreground mb-4">
              Empowerment Impact
            </h2>
            <p className="text-muted-foreground">
              How our platform transforms lives and preserves heritage
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-warm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">350+</span>
              </div>
              <h3 className="font-sanskrit font-semibold text-foreground mb-2">Families Empowered</h3>
              <p className="text-sm text-muted-foreground">Direct support to artisan families</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-heritage rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">₹2.5L</span>
              </div>
              <h3 className="font-sanskrit font-semibold text-foreground mb-2">Avg. Annual Income</h3>
              <p className="text-sm text-muted-foreground">Income increase through our platform</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-earth rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">15</span>
              </div>
              <h3 className="font-sanskrit font-semibold text-foreground mb-2">Traditional Crafts</h3>
              <p className="text-sm text-muted-foreground">Heritage crafts being preserved</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-warm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">95%</span>
              </div>
              <h3 className="font-sanskrit font-semibold text-foreground mb-2">Customer Satisfaction</h3>
              <p className="text-sm text-muted-foreground">Happy customers worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sanskrit text-3xl lg:text-4xl font-bold text-white mb-6">
            Support Artisan Livelihoods
          </h2>
          <p className="font-body text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Every purchase directly impacts an artisan's life. Join our mission to preserve traditional crafts while empowering skilled craftspeople across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
              asChild
            >
              <Link to="/shop">
                <ExternalLink className="mr-2 h-5 w-5" />
                Explore Products
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat with Venmathi
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stores;