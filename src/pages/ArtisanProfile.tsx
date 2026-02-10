import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, MapPin, Calendar, Award, Users, ShoppingBag, Instagram, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getArtisanById } from "@/data/artisans";
import { products } from "@/data/products";

const ArtisanProfile = () => {
  const { id } = useParams();
  const artisan = getArtisanById(parseInt(id || "1"));

  if (!artisan) {
    return (
      <div className="pt-16 min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Artisan Not Found</h1>
          <Button asChild>
            <Link to="/artisan-stories">Back to Artisan Stories</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Get products by this artisan
  const artisanProducts = products.filter(product => product.artisan === artisan.name);

  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link to="/artisan-stories" className="hover:text-primary">Artisan Stories</Link>
            <span>/</span>
            <span className="text-foreground">{artisan.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button variant="ghost" className="mb-6" asChild>
          <Link to="/artisan-stories">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Artisan Stories
          </Link>
        </Button>

        {/* Hero Section */}
        <div className="relative rounded-lg overflow-hidden mb-8">
          <div className="h-64 bg-gradient-heritage"></div>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="flex items-end space-x-6">
              <img
                src={artisan.avatar}
                alt={artisan.name}
                className="w-24 h-24 rounded-full border-4 border-white object-cover"
              />
              <div className="flex-1">
                <h1 className="font-sanskrit text-3xl font-bold mb-2">{artisan.name}</h1>
                <p className="text-lg opacity-90">{artisan.craft} • {artisan.location}, {artisan.state}</p>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span>{artisan.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{artisan.experience} years experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <Card>
              <CardHeader>
                <CardTitle className="font-sanskrit">About {artisan.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{artisan.bio}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {artisan.specialties.map((specialty, index) => (
                        <Badge key={index} variant="secondary">{specialty}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Techniques</h4>
                    <div className="flex flex-wrap gap-2">
                      {artisan.techniques.map((technique, index) => (
                        <Badge key={index} variant="outline">{technique}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Materials Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {artisan.materials.map((material, index) => (
                        <Badge key={index} variant="outline">{material}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Story */}
            <Card>
              <CardHeader>
                <CardTitle className="font-sanskrit">Artisan Story</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{artisan.story}</p>
              </CardContent>
            </Card>

            {/* Awards */}
            {artisan.awards.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="font-sanskrit flex items-center">
                    <Award className="mr-2 h-5 w-5" />
                    Awards & Recognition
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {artisan.awards.map((award, index) => (
                      <li key={index} className="flex items-center">
                        <Award className="h-4 w-4 text-primary mr-2" />
                        <span>{award}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Products */}
            <Card>
              <CardHeader>
                <CardTitle className="font-sanskrit">Products by {artisan.name}</CardTitle>
              </CardHeader>
              <CardContent>
                {artisanProducts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {artisanProducts.slice(0, 4).map((product) => (
                      <Link
                        key={product.id}
                        to={`/product/${product.id}`}
                        className="group block"
                      >
                        <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                          />
                          <div className="p-3">
                            <h4 className="font-semibold text-sm mb-1 line-clamp-2">{product.name}</h4>
                            <p className="text-primary font-bold">{product.price}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">No products available at the moment.</p>
                )}
                {artisanProducts.length > 4 && (
                  <div className="mt-4">
                    <Button variant="outline" asChild>
                      <Link to={`/shop?artisan=${encodeURIComponent(artisan.name)}`}>
                        View All Products
                      </Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="font-sanskrit">Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <ShoppingBag className="h-4 w-4 text-muted-foreground mr-2" />
                    <span className="text-sm">Products</span>
                  </div>
                  <span className="font-semibold">{artisan.totalProducts}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-muted-foreground mr-2" />
                    <span className="text-sm">Sales</span>
                  </div>
                  <span className="font-semibold">{artisan.totalSales.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-muted-foreground mr-2" />
                    <span className="text-sm">Rating</span>
                  </div>
                  <span className="font-semibold">{artisan.rating}/5</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 text-muted-foreground mr-2" />
                    <span className="text-sm">Joined</span>
                  </div>
                  <span className="font-semibold">
                    {new Date(artisan.joinedDate).getFullYear()}
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card>
              <CardHeader>
                <CardTitle className="font-sanskrit">Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-primary mr-2" />
                  <div>
                    <p className="font-semibold">{artisan.location}</p>
                    <p className="text-sm text-muted-foreground">{artisan.state}, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            {artisan.socialMedia && (
              <Card>
                <CardHeader>
                  <CardTitle className="font-sanskrit">Connect</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {artisan.socialMedia.instagram && (
                      <a
                        href={`https://instagram.com/${artisan.socialMedia.instagram.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm hover:text-primary transition-colors"
                      >
                        <Instagram className="h-4 w-4 mr-2" />
                        {artisan.socialMedia.instagram}
                      </a>
                    )}
                    {artisan.socialMedia.facebook && (
                      <a
                        href={`https://facebook.com/${artisan.socialMedia.facebook}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm hover:text-primary transition-colors"
                      >
                        <Facebook className="h-4 w-4 mr-2" />
                        {artisan.socialMedia.facebook}
                      </a>
                    )}
                    {artisan.socialMedia.youtube && (
                      <a
                        href={`https://youtube.com/c/${artisan.socialMedia.youtube}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm hover:text-primary transition-colors"
                      >
                        <Youtube className="h-4 w-4 mr-2" />
                        {artisan.socialMedia.youtube}
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="font-sanskrit">Support This Artisan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Support {artisan.name} by purchasing their handcrafted products and sharing their story.
                </p>
                <Button className="w-full bg-gradient-heritage" asChild>
                  <Link to={`/shop?artisan=${encodeURIComponent(artisan.name)}`}>
                    View Products
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisanProfile;