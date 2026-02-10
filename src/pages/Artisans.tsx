import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, MapPin, Star, Filter, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { artisans } from "@/data/artisans";

const Artisans = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState("all");
  const [selectedCraft, setSelectedCraft] = useState("all");
  const [sortBy, setSortBy] = useState("name");

  // Get unique states and crafts for filters
  const states = [...new Set(artisans.map(artisan => artisan.state))].sort();
  const crafts = [...new Set(artisans.map(artisan => artisan.craft))].sort();

  // Filter and sort artisans
  const filteredArtisans = artisans
    .filter(artisan => {
      const matchesSearch = artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           artisan.craft.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           artisan.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesState = selectedState === "all" || artisan.state === selectedState;
      const matchesCraft = selectedCraft === "all" || artisan.craft === selectedCraft;
      return matchesSearch && matchesState && matchesCraft;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "experience":
          return b.experience - a.experience;
        case "products":
          return b.totalProducts - a.totalProducts;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-heritage">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-sanskrit text-4xl lg:text-5xl font-bold text-white mb-6">
            Meet Our Artisans
          </h1>
          <p className="font-body text-lg text-white/90 max-w-2xl mx-auto">
            Discover the talented craftspeople behind our beautiful handmade products. 
            Each artisan brings generations of skill and cultural heritage to their craft.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="bg-muted/30 rounded-lg p-6">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{artisans.length}</div>
              <div className="text-sm text-muted-foreground">Skilled Artisans</div>
            </div>
            <div className="bg-muted/30 rounded-lg p-6">
              <Award className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{states.length}</div>
              <div className="text-sm text-muted-foreground">States Represented</div>
            </div>
            <div className="bg-muted/30 rounded-lg p-6">
              <Star className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{crafts.length}</div>
              <div className="text-sm text-muted-foreground">Traditional Crafts</div>
            </div>
            <div className="bg-muted/30 rounded-lg p-6">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">
                {Math.round(artisans.reduce((sum, a) => sum + a.experience, 0) / artisans.length)}
              </div>
              <div className="text-sm text-muted-foreground">Avg. Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search artisans, crafts, or locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedState} onValueChange={setSelectedState}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Filter by State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All States</SelectItem>
                  {states.map(state => (
                    <SelectItem key={state} value={state}>{state}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedCraft} onValueChange={setSelectedCraft}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Filter by Craft" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Crafts</SelectItem>
                  {crafts.map(craft => (
                    <SelectItem key={craft} value={craft}>{craft}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name (A-Z)</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="experience">Most Experienced</SelectItem>
                <SelectItem value="products">Most Products</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Artisans Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="font-sanskrit text-2xl font-bold text-foreground mb-2">
              {filteredArtisans.length} Artisan{filteredArtisans.length !== 1 ? 's' : ''} Found
            </h2>
            <p className="text-muted-foreground">
              Discover the stories and crafts of our talented artisan community
            </p>
          </div>

          {filteredArtisans.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArtisans.map((artisan, index) => (
                <Card 
                  key={artisan.id}
                  className="group cursor-pointer hover:shadow-warm transition-all duration-300 animate-fade-in-up overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={artisan.avatar} 
                        alt={artisan.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-white/90 text-foreground">
                          <Star className="h-3 w-3 text-yellow-500 fill-current mr-1" />
                          {artisan.rating}
                        </Badge>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <h3 className="font-sanskrit text-xl font-bold text-white mb-1">
                          {artisan.name}
                        </h3>
                        <p className="text-white/90 text-sm">{artisan.craft}</p>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <MapPin className="h-4 w-4 mr-1" />
                        {artisan.location}, {artisan.state}
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {artisan.bio}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {artisan.specialties.slice(0, 2).map((specialty, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                        {artisan.specialties.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{artisan.specialties.length - 2} more
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <span>{artisan.experience} years exp.</span>
                        <span>{artisan.totalProducts} products</span>
                      </div>
                      
                      <Button 
                        className="w-full bg-gradient-heritage" 
                        asChild
                      >
                        <Link to={`/artisan/${artisan.id}`}>
                          View Profile
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-muted-foreground mb-4">
                <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg">No artisans found matching your criteria</p>
                <p className="text-sm">Try adjusting your search or filters</p>
              </div>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedState("all");
                  setSelectedCraft("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sanskrit text-3xl lg:text-4xl font-bold text-white mb-6">
            Support Our Artisan Community
          </h2>
          <p className="font-body text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Every purchase directly supports these talented craftspeople and helps preserve 
            traditional Indian art forms for future generations.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
            asChild
          >
            <Link to="/shop">
              Shop Artisan Products
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Artisans;