import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-artisan.jpg";
import handloomImage from "@/assets/handloom-weaving.jpg";
import woodcraftImage from "@/assets/woodcraft.jpg";
import productsImage from "@/assets/products-collection.jpg";

const Blog = () => {
  const featuredPost = {
    title: "The Art of Kanchipuram Silk: A 400-Year Legacy",
    excerpt: "Discover the intricate process behind India's most prized silk sarees, from the silkworms of Karnataka to the master weavers of Tamil Nadu.",
    image: handloomImage,
    author: "Priya Raman",
    date: "January 15, 2025",
    readTime: "8 min read",
    category: "Heritage Crafts"
  };

  const blogPosts = [
    {
      title: "5 Ways to Care for Your Handloom Textiles",
      excerpt: "Expert tips to preserve the beauty and longevity of your precious handwoven fabrics.",
      image: handloomImage,
      author: "Meera Devi",
      date: "January 12, 2025",
      readTime: "5 min read",
      category: "Care Guide"
    },
    {
      title: "The Story Behind Tanjore Paintings",
      excerpt: "Explore the rich history and intricate techniques of these golden masterpieces from Tamil Nadu.",
      image: productsImage,
      author: "Rajesh Kumar",
      date: "January 10, 2025",
      readTime: "6 min read",
      category: "Art History"
    },
    {
      title: "From Clay to Art: The Potter's Journey",
      excerpt: "Follow the transformation of humble clay into beautiful pottery through the skilled hands of our artisans.",
      image: heroImage,
      author: "Lakshmi Bai",
      date: "January 8, 2025",
      readTime: "7 min read",
      category: "Artisan Stories"
    },
    {
      title: "Sustainable Crafts: Eco-Friendly Indian Art",
      excerpt: "How traditional Indian crafts are naturally sustainable and environmentally conscious.",
      image: woodcraftImage,
      author: "Dr. Ananya Sharma",
      date: "January 5, 2025",
      readTime: "4 min read",
      category: "Sustainability"
    },
    {
      title: "The Revival of Temple Jewelry",
      excerpt: "Modern interpretations of ancient temple jewelry designs are gaining popularity worldwide.",
      image: productsImage,
      author: "Kavitha Reddy",
      date: "January 3, 2025",
      readTime: "6 min read",
      category: "Jewelry"
    },
    {
      title: "Woodcarving Techniques of South India",
      excerpt: "A deep dive into the traditional woodcarving methods that create stunning decorative pieces.",
      image: woodcraftImage,
      author: "Suresh Chandra",
      date: "December 30, 2024",
      readTime: "9 min read",
      category: "Craftsmanship"
    }
  ];

  const categories = [
    "Heritage Crafts", "Care Guide", "Art History", "Artisan Stories", 
    "Sustainability", "Jewelry", "Craftsmanship"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-sanskrit text-4xl lg:text-5xl font-bold text-white mb-6">
            Stories from the Heart of India
          </h1>
          <p className="font-body text-lg text-white/90 max-w-2xl mx-auto">
            Dive deep into the world of Indian handicrafts through stories, insights, 
            and traditions shared by our artisans and heritage experts.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-sanskrit text-3xl font-bold text-foreground mb-4">
              Featured Story
            </h2>
          </div>
          
          <Card className="overflow-hidden border-primary/20 shadow-warm max-w-4xl mx-auto">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-accent text-white">
                    Featured
                  </Badge>
                </div>
                
                <div className="p-8 flex flex-col justify-center">
                  <Badge variant="secondary" className="w-fit mb-4">
                    {featuredPost.category}
                  </Badge>
                  
                  <h3 className="font-sanskrit text-2xl font-bold text-foreground mb-4">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-6 space-x-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <Button className="w-fit bg-gradient-heritage">
                    Read Full Story
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="font-sanskrit text-xl font-semibold text-foreground mb-4">
              Browse by Category
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <Badge 
                  key={index}
                  variant="outline" 
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sanskrit text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Latest Stories
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest insights from the world of Indian handicrafts, 
              artisan interviews, and cultural heritage preservation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={index}
                className="group cursor-pointer hover:shadow-warm transition-all duration-300 animate-fade-in-up border-border/50 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-3">
                      {post.category}
                    </Badge>
                    
                    <h3 className="font-sanskrit text-lg font-semibold text-foreground mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center text-xs text-muted-foreground mb-4 space-x-3">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-primary font-medium">
                        {post.readTime}
                      </span>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="p-0 h-auto font-medium text-primary group-hover:text-primary"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-earth">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sanskrit text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Stay Connected
          </h2>
          <p className="font-body text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest stories, artisan spotlights, 
            and exclusive insights into Indian handicrafts.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-warm hover:shadow-warm"
          >
            Subscribe to Newsletter
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Blog;