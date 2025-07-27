import { MapPin, Star, ExternalLink, MessageCircle } from "lucide-react";
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
import potteryImage from "@/assets/hero-artisan.jpg";

const Store = () => {
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
      bio: "Master weaver specializing in traditional Kanchipuram silk sarees",
      featured: true
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
      bio: "Traditional potter creating beautiful terracotta and ceramic pieces"
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
      bio: "Expert wood carver known for intricate traditional designs"
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
      bio: "Skilled textile artisan specializing in hand embroidered home décor"
    },
    {
      id: "suresh-chandra",
      name: "Suresh Chandra", 
      location: "Chettinad, Tamil Nadu",
      image: potteryImage,
      craft: "Palm Leaf Crafts",
      experience: "15+ years",
      rating: 4.6,
      reviews: 78,
      specialties: ["Palm Leaf Baskets", "Traditional Crafts", "Eco-friendly Products"],
      bio: "Eco-conscious artisan creating beautiful palm leaf products"
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
      bio: "Young artisan reviving traditional block printing techniques"
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
      bio: "Master craftsman creating exquisite brass and metal artifacts"
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
      bio: "Dedicated to preserving Khadi tradition and natural textile arts"
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
      bio: "Preserving ancient Odishan craft traditions through handmade products"
    },
    {
      id: "anita-devi",
      name: "Anita Devi",
      location: "Guwahati, Assam",
      image: handloomImage,
      craft: "Bamboo Crafts",
      experience: "14+ years",
      rating: 4.6,
      reviews: 56,
      specialties: ["Bamboo Lamps", "Eco Products", "Traditional Crafts"],
      bio: "Innovative bamboo craft artisan promoting sustainable living"
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
            Meet Our Artisan Partners
          </h1>
          <p className="font-body text-lg text-white/90 max-w-2xl mx-auto">
            Discover the talented craftspeople behind every handmade masterpiece. 
            Each artisan brings generations of skill, passion, and cultural heritage to their craft.
          </p>
        </div>
      </section>

      {/* Featured Artisan */}
      {featuredArtisan && (
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="font-sanskrit text-3xl font-bold text-foreground mb-2">
                Featured Artisan
              </h2>
              <p className="text-muted-foreground">Master craftsperson of the month</p>
            </div>
            
            <Card className="max-w-5xl mx-auto overflow-hidden border-accent shadow-warm">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative">
                    <img 
                      src={featuredArtisan.image} 
                      alt={featuredArtisan.name}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-accent text-white text-lg px-3 py-1">
                      Featured
                    </Badge>
                  </div>
                  
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="font-sanskrit text-2xl font-bold text-foreground mb-2">
                      {featuredArtisan.name}
                    </h3>
                    
                    <div className="flex items-center mb-3">
                      <MapPin className="h-4 w-4 text-primary mr-2" />
                      <span className="text-muted-foreground">{featuredArtisan.location}</span>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-muted-foreground">
                        {featuredArtisan.rating} ({featuredArtisan.reviews} reviews)
                      </span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      {featuredArtisan.bio}
                    </p>
                    
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
                        className="flex-1 bg-gradient-warm"
                        asChild
                      >
                        <Link to={`/artisan/${featuredArtisan.id}`} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Profile
                        </Link>
                      </Button>
                      <Button variant="outline">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Chat with Venmathi
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* All Artisans */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-sanskrit text-3xl font-bold text-foreground mb-4">
              Our Artisan Community
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the talented craftspeople preserving India's rich heritage through their exceptional skills
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArtisans.map((artisan, index) => (
              <Card 
                key={artisan.id}
                className="group cursor-pointer hover:shadow-warm transition-all duration-300 animate-fade-in-up border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={artisan.image} 
                      alt={artisan.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-primary text-white">
                        {artisan.experience}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-sanskrit text-lg font-semibold text-foreground mb-2">
                      {artisan.name}
                    </h3>
                    
                    <div className="flex items-center mb-2">
                      <MapPin className="h-3 w-3 text-primary mr-1" />
                      <span className="text-xs text-muted-foreground">{artisan.location}</span>
                    </div>
                    
                    <p className="text-sm text-accent font-medium mb-3">
                      {artisan.craft}
                    </p>
                    
                    <div className="flex items-center mb-4">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 text-yellow-500 fill-current" />
                        ))}
                      </div>
                      <span className="ml-2 text-xs text-muted-foreground">
                        {artisan.rating} ({artisan.reviews})
                      </span>
                    </div>
                    
                    <p className="text-xs text-muted-foreground mb-4 line-clamp-2">
                      {artisan.bio}
                    </p>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      asChild
                    >
                      <Link to={`/artisan/${artisan.id}`} target="_blank" rel="noopener noreferrer">
                        View Profile
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sanskrit text-3xl lg:text-4xl font-bold text-white mb-6">
            Want to Connect with Our Artisans?
          </h2>
          <p className="font-body text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Have questions about their craft, want custom pieces, or interested in their story? 
            Our AI assistant Venmathi can help you connect and learn more.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Chat with Venmathi
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Store;