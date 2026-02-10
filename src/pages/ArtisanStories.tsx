import { MapPin, Clock, Star, Heart, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-artisan.jpg";
import handloomImage from "@/assets/handloom-weaving.jpg";
import woodcraftImage from "@/assets/woodcraft.jpg";
import productsImage from "@/assets/products-collection.jpg";
import meeraDevi from "@/assets/artisan-meera-devi.jpg";
import raviKumar from "@/assets/artisan-ravi-kumar.jpg";
import lakshmiBai from "@/assets/artisan-lakshmi-bai.jpg";
import arjunSharma from "@/assets/artisan-arjun-sharma.jpg";
import priyaPatel from "@/assets/artisan-priya-patel.jpg";

const ArtisanStories = () => {
  const artisanStories = [
    {
      name: "Meera Devi",
      craft: "Handloom Weaving",
      region: "Kancheepuram, Tamil Nadu",
      experience: "25 years",
      image: meeraDevi,
      story: "Born into a family of weavers, Meera learned the ancient art of silk weaving from her grandmother when she was just 12 years old. Her journey from a small village weaver to a globally recognized artisan began when she started experimenting with contemporary designs while preserving traditional techniques.",
      empowermentJourney: "Through digital platforms, Meera transformed her small home workshop into a thriving business. She now employs 12 women from her village, providing them with steady income and preserving the dying art of hand weaving. Her story represents the power of combining tradition with technology.",
      currentImpact: "Monthly income increased from ₹8,000 to ₹65,000. She has trained 25+ women in traditional weaving techniques.",
      specialty: "Kanchipuram Silk Sarees with Gold Zari",
      rating: 4.9,
      featured: true,
      beforeIncome: "₹8,000/month",
      afterIncome: "₹65,000/month",
      familiesImpacted: 12
    },
    {
      name: "Ravi Kumar",
      craft: "Wood Carving",
      region: "Thanjavur, Tamil Nadu",
      experience: "30 years",
      image: raviKumar,
      story: "Ravi inherited his wood carving skills from five generations of artisans. Initially struggling to find buyers for his traditional sculptures, he was on the verge of abandoning his craft to become a daily wage laborer.",
      empowermentJourney: "A local NGO helped him connect with online marketplaces. His intricate temple carvings and modern decorative pieces gained international recognition. Today, he runs a workshop that blends traditional techniques with contemporary designs.",
      currentImpact: "Transformed from struggling artisan to successful entrepreneur. His workshop now employs 8 local craftsmen.",
      specialty: "Temple Art & Contemporary Wooden Sculptures",
      rating: 4.8,
      beforeIncome: "₹6,000/month",
      afterIncome: "₹55,000/month",
      familiesImpacted: 8
    },
    {
      name: "Lakshmi Bai",
      craft: "Pottery",
      region: "Pondicherry, Tamil Nadu",
      experience: "18 years",
      image: lakshmiBai,
      story: "Lakshmi broke gender barriers in a male-dominated pottery industry. Starting with basic clay pots for local use, she faced ridicule from her community for choosing an 'unconventional' profession for women.",
      empowermentJourney: "Her determination paid off when eco-conscious consumers discovered her sustainable terracotta products. She now leads a women's pottery collective and her products are exported to 8 countries.",
      currentImpact: "Pioneer in sustainable pottery. Her collective supports 15 women artisans and promotes eco-friendly practices.",
      specialty: "Eco-friendly Terracotta & Garden Décor",
      rating: 4.9,
      beforeIncome: "₹5,000/month",
      afterIncome: "₹48,000/month",
      familiesImpacted: 15
    },
    {
      name: "Suresh Chandra",
      craft: "Metal Work",
      region: "Chennai, Tamil Nadu",
      experience: "22 years",
      image: heroImage,
      story: "Suresh learned metallurgy from his father but struggled as modern manufacturing replaced traditional metal work. The family workshop was on the brink of closure when he was forced to work in a factory.",
      empowermentJourney: "A chance encounter with heritage enthusiasts changed his life. They helped him showcase his work online, focusing on authentic traditional pieces. His brass temple lamps and bronze artifacts now have a waiting list of customers.",
      currentImpact: "Revived traditional metallurgy in his community. Established a training center for young artisans interested in metal crafts.",
      specialty: "Authentic Brass Lamps & Bronze Artifacts",
      rating: 4.7,
      beforeIncome: "₹12,000/month",
      afterIncome: "₹52,000/month",
      familiesImpacted: 6
    },
    {
      name: "Kamala Devi",
      craft: "Hand Embroidery",
      region: "Madurai, Tamil Nadu",
      experience: "28 years",
      image: handloomImage,
      story: "Kamala started embroidery as a hobby while managing household responsibilities. After her husband's death, she needed to support her two children and elderly parents with her embroidery skills.",
      empowermentJourney: "Local women's self-help groups helped her commercialize her talent. Her intricate Tamil motif embroidery caught the attention of fashion designers. She now runs embroidery workshops for rural women.",
      currentImpact: "Created employment for 25 women. Her embroidery designs are featured in high-end boutiques across India.",
      specialty: "Traditional Tamil Motif Embroidery",
      rating: 4.9,
      beforeIncome: "₹3,000/month",
      afterIncome: "₹42,000/month",
      familiesImpacted: 25
    },
    {
      name: "Arjun Pillai",
      craft: "Stone Carving",
      region: "Mahabalipuram, Tamil Nadu",
      experience: "35 years",
      image: arjunSharma,
      story: "Following the ancient tradition of Mahabalipuram sculptors, Arjun faced the challenge of diminishing demand for stone carvings in modern construction. Many of his contemporaries had already changed professions.",
      empowermentJourney: "Tourism revival and appreciation for heritage art brought new opportunities. He started creating smaller decorative pieces alongside traditional temple sculptures, making his art accessible to modern homes.",
      currentImpact: "Preserved ancient stone carving techniques. Mentors 10 young sculptors in traditional and contemporary stone art.",
      specialty: "Temple Sculptures & Contemporary Stone Art",
      rating: 4.8,
      beforeIncome: "₹10,000/month",
      afterIncome: "₹58,000/month",
      familiesImpacted: 10
    },
    {
      name: "Priya Sharma",
      craft: "Traditional Jewelry",
      region: "Jaipur, Rajasthan",
      experience: "15 years",
      image: priyaPatel,
      story: "As a young woman in traditional Rajasthani society, Priya faced resistance when she wanted to learn jewelry making. The craft was considered too complex for women, but her passion drove her to secretly learn from her uncle.",
      empowermentJourney: "She revolutionized traditional jewelry by creating contemporary pieces that appeal to modern women while preserving ancient techniques. Her designs blend royal Rajasthani heritage with contemporary fashion.",
      currentImpact: "Inspired a new generation of women jewelers. Her workshop trains young women in traditional jewelry making techniques.",
      specialty: "Contemporary Rajasthani Jewelry",
      rating: 4.6,
      beforeIncome: "₹7,000/month",
      afterIncome: "₹45,000/month",
      familiesImpacted: 8
    },
    {
      name: "Mohan Lal",
      craft: "Carpet Weaving",
      region: "Kashmir, J&K",
      experience: "40 years",
      image: handloomImage,
      story: "Mohan represents the finest tradition of Kashmiri carpet weaving. During the region's difficult times, he struggled to maintain his workshop and preserve the centuries-old techniques that his family had perfected.",
      empowermentJourney: "Despite challenges, he never gave up on his craft. International recognition of Kashmiri carpets opened new markets. He now exports to luxury hotels and homes worldwide, carrying forward Kashmir's rich textile legacy.",
      currentImpact: "Preserved Kashmiri carpet weaving tradition. His workshop supports 20 families and trains artisans in authentic techniques.",
      specialty: "Hand-knotted Kashmiri Carpets",
      rating: 4.9,
      beforeIncome: "₹15,000/month",
      afterIncome: "₹85,000/month",
      familiesImpacted: 20
    },
    {
      name: "Anita Sharma",
      craft: "Block Printing",
      region: "Sanganer, Rajasthan",
      experience: "12 years",
      image: productsImage,
      story: "Anita, a computer science graduate, chose to learn traditional block printing from her grandmother instead of pursuing a corporate career. Her decision was initially met with family disappointment.",
      empowermentJourney: "She combined her technical knowledge with traditional printing techniques, creating an online platform for authentic block-printed textiles. Her innovation bridges the gap between heritage crafts and modern consumers.",
      currentImpact: "Modernized block printing marketing. Her platform connects 50+ traditional printers with global customers.",
      specialty: "Authentic Rajasthani Block Prints",
      rating: 4.7,
      beforeIncome: "₹8,000/month",
      afterIncome: "₹38,000/month",
      familiesImpacted: 50
    },
    {
      name: "Deepak Kumar",
      craft: "Bamboo Crafts",
      region: "Tripura, Northeast India",
      experience: "16 years",
      image: woodcraftImage,
      story: "Deepak belongs to a tribal community where bamboo crafting is a traditional livelihood. However, cheap plastic alternatives and lack of market access threatened their sustainable way of life.",
      empowermentJourney: "Environmental awareness movements created demand for eco-friendly products. Deepak's bamboo lamps, furniture, and decorative items gained popularity among environmentally conscious consumers, reviving his community's traditional craft.",
      currentImpact: "Leading the eco-friendly craft movement. His cooperative supports 35 tribal families in sustainable bamboo crafting.",
      specialty: "Sustainable Bamboo Products",
      rating: 4.5,
      beforeIncome: "₹4,000/month",
      afterIncome: "₹32,000/month",
      familiesImpacted: 35
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-earth">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-sanskrit text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Stories of Empowerment
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover inspiring journeys of artisans who transformed their lives through craft, 
            determination, and community support. These are stories of resilience, tradition, and empowerment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-gradient-heritage">
              <Link to="/artisans">
                Meet Our Artisans
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/shop">
                Shop Their Products
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Story */}
      {artisanStories.find(story => story.featured) && (
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {(() => {
              const featuredStory = artisanStories.find(story => story.featured);
              return (
                <Card className="max-w-5xl mx-auto overflow-hidden border-accent shadow-warm">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <div className="relative">
                        <img 
                          src={featuredStory.image} 
                          alt={featuredStory.name}
                          className="w-full h-80 lg:h-full object-cover"
                        />
                        <Badge className="absolute top-4 left-4 bg-accent text-white text-lg px-3 py-1">
                          Featured Story
                        </Badge>
                      </div>
                      
                      <div className="p-8 flex flex-col justify-center">
                        <h3 className="font-sanskrit text-2xl font-bold text-foreground mb-2">
                          {featuredStory.name}
                        </h3>
                        
                        <div className="flex items-center mb-3">
                          <MapPin className="h-4 w-4 text-primary mr-2" />
                          <span className="text-muted-foreground">{featuredStory.region}</span>
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-4">
                          {featuredStory.story}
                        </p>
                        
                        <div className="bg-gradient-warm/10 rounded-lg p-4 mb-4">
                          <h4 className="font-medium text-foreground mb-2 flex items-center">
                            <Heart className="h-4 w-4 text-accent mr-2" />
                            Empowerment Journey
                          </h4>
                          <p className="text-sm text-muted-foreground italic">
                            "{featuredStory.empowermentJourney}"
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="text-center">
                            <div className="text-lg font-bold text-foreground">{featuredStory.beforeIncome}</div>
                            <div className="text-xs text-muted-foreground">Before</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-primary">{featuredStory.afterIncome}</div>
                            <div className="text-xs text-muted-foreground">After</div>
                          </div>
                        </div>

                        <Button 
                          className="bg-gradient-warm hover:shadow-lg transition-all"
                          asChild
                        >
                          <Link to="/stores">
                            Visit Artisan Stores
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })()}
          </div>
        </section>
      )}

      {/* All Stories */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sanskrit text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Journeys of Transformation
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Each story represents a life changed, a tradition preserved, and a community empowered. 
              These artisans prove that with determination and support, anything is possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {artisanStories.filter(story => !story.featured).map((story, index) => (
              <Card 
                key={index}
                className="group hover:shadow-warm transition-all duration-300 animate-fade-in-up border-border/50 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                      <div className="relative">
                        <img 
                          src={story.image} 
                          alt={`${story.name} - ${story.craft}`}
                          className="w-full h-48 sm:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                          <Star className="h-3 w-3 text-yellow-500 fill-current" />
                          <span className="text-xs font-medium">{story.rating}</span>
                        </div>
                      </div>
                      
                      <div className="p-4 sm:p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-sanskrit text-lg font-semibold text-foreground">
                            {story.name}
                          </h3>
                          <p className="text-primary font-medium text-sm">
                            {story.craft}
                          </p>
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          {story.experience}
                        </div>
                      </div>
                      
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <MapPin className="h-4 w-4 mr-1 text-primary" />
                        {story.region}
                      </div>
                      
                      <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                        {story.story}
                      </p>

                      <div className="bg-gradient-heritage/10 rounded-lg p-3 mb-3">
                        <p className="text-xs font-medium text-foreground mb-1 flex items-center">
                          <TrendingUp className="h-3 w-3 text-accent mr-1" />
                          Impact
                        </p>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {story.currentImpact}
                        </p>
                      </div>

                      <div className="flex justify-between items-center mb-3">
                        <div className="text-center">
                          <div className="text-sm font-bold text-muted-foreground">{story.beforeIncome}</div>
                          <div className="text-xs text-muted-foreground">Before</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-bold text-primary">{story.afterIncome}</div>
                          <div className="text-xs text-muted-foreground">After</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Users className="h-3 w-3 mr-1 text-accent" />
                          {story.familiesImpacted} families supported
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Empowerment Impact */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-sanskrit text-3xl font-bold text-foreground mb-4">
              Collective Impact
            </h2>
            <p className="text-muted-foreground">
              Together, these stories represent a movement of empowerment and preservation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-warm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">250+</span>
              </div>
              <h3 className="font-sanskrit font-semibold text-foreground mb-2">Families Supported</h3>
              <p className="text-sm text-muted-foreground">Direct employment and training provided</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-heritage rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">800%</span>
              </div>
              <h3 className="font-sanskrit font-semibold text-foreground mb-2">Average Income Growth</h3>
              <p className="text-sm text-muted-foreground">Life-changing financial transformation</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-earth rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">10</span>
              </div>
              <h3 className="font-sanskrit font-semibold text-foreground mb-2">Craft Traditions</h3>
              <p className="text-sm text-muted-foreground">Heritage skills preserved and revived</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-heritage">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sanskrit text-3xl lg:text-4xl font-bold text-white mb-6">
            Be Part of Their Journey
          </h2>
          <p className="font-body text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Every story of empowerment starts with support. Visit our artisan stores and become part 
            of their continuing journey of success and cultural preservation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
              asChild
            >
              <Link to="/stores">
                Visit Artisan Stores
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
              asChild
            >
              <Link to="/shop">
                Shop Products
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArtisanStories;