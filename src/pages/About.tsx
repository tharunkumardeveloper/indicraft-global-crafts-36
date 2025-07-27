import { Heart, Users, Globe2, Award, Target, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import handloomImage from "@/assets/handloom-weaving.jpg";
import woodcraftImage from "@/assets/woodcraft.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Authentic Heritage",
      description: "Every piece carries the authentic spirit of Indian craftsmanship, preserving traditional techniques passed down through generations."
    },
    {
      icon: Users,
      title: "Artisan Empowerment",
      description: "We work directly with artisan communities, ensuring fair wages and sustainable livelihoods for skilled craftspeople."
    },
    {
      icon: Globe2,
      title: "Global Reach",
      description: "Bringing the beauty of Indian culture to homes worldwide, creating connections across continents through art."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Each product meets our highest standards of quality, durability, and artistic excellence."
    }
  ];

  const timeline = [
    {
      year: "2010",
      title: "The Beginning",
      description: "Founded with a mission to preserve Indian handicrafts and support rural artisans."
    },
    {
      year: "2015",
      title: "Global Expansion",
      description: "Started shipping worldwide, bringing Indian heritage to international markets."
    },
    {
      year: "2020",
      title: "Digital Innovation",
      description: "Launched our digital platform to connect artisans directly with global customers."
    },
    {
      year: "2024",
      title: "Community Impact",
      description: "Now supporting over 500 artisan families across 15 Indian states."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-earth">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-sanskrit text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Story
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Indicraft was born from a deep love for Indian heritage and a commitment to preserving 
            the incredible artistry of our craftspeople. We bridge the gap between traditional 
            craftsmanship and modern homes, ensuring that these beautiful art forms continue to thrive.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8 border-primary/20 shadow-soft">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-primary mr-3" />
                  <h2 className="font-sanskrit text-2xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="font-body text-muted-foreground leading-relaxed">
                  To preserve and promote India's rich handicraft heritage by creating sustainable 
                  livelihoods for artisans while bringing authentic, beautiful handcrafted products 
                  to homes around the world. We believe every piece tells a story of culture, 
                  tradition, and human creativity.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-primary/20 shadow-soft">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Eye className="h-8 w-8 text-primary mr-3" />
                  <h2 className="font-sanskrit text-2xl font-bold text-foreground">Our Vision</h2>
                </div>
                <p className="font-body text-muted-foreground leading-relaxed">
                  To be the world's most trusted platform for authentic Indian handicrafts, 
                  creating a global community that appreciates and values traditional artistry. 
                  We envision a future where every artisan has a sustainable livelihood and 
                  every home can embrace the beauty of Indian craftsmanship.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sanskrit text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do, from selecting artisans to 
              delivering products to your doorstep.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="text-center p-6 hover:shadow-warm transition-all duration-300 border-border/50"
              >
                <CardContent className="p-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-sanskrit text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sanskrit text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              From a small initiative to a global platform, our journey reflects our 
              commitment to preserving Indian heritage and empowering artisans.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line - Hidden on mobile for better readability */}
            <div className="hidden sm:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary/20"></div>

            <div className="space-y-8 sm:space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-end' : 'justify-start'
                  } sm:justify-${index % 2 === 0 ? 'end' : 'start'} justify-center`}
                >
                  <div className={`w-full sm:w-5/12 ${index % 2 === 0 ? 'sm:text-right sm:pr-8' : 'sm:text-left sm:pl-8'} text-center sm:text-${index % 2 === 0 ? 'right' : 'left'}`}>
                    <Card className="p-6 border-primary/20 shadow-soft">
                      <CardContent className="p-0">
                        <div className="font-sanskrit text-xl font-bold text-primary mb-2">
                          {item.year}
                        </div>
                        <h3 className="font-sanskrit text-lg font-semibold text-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="font-body text-muted-foreground text-sm">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Dot - Hidden on mobile */}
                  <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Artisan Stories */}
      <section className="py-20 bg-gradient-heritage text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-sanskrit text-3xl lg:text-4xl font-bold mb-6">
                Supporting Artisan Communities
              </h2>
              <p className="font-body text-white/90 mb-6 leading-relaxed">
                Our artisans are not just suppliers; they are our partners in preserving India's 
                cultural heritage. We work closely with craftspeople from rural areas, providing 
                them with fair wages, skill development opportunities, and a global platform 
                to showcase their incredible talents.
              </p>
              <p className="font-body text-white/90 mb-8 leading-relaxed">
                From the pottery workshops of Rajasthan to the handloom centers of Kerala, 
                each artisan brings their unique story and generations of knowledge to create 
                pieces that are truly one-of-a-kind.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="font-sanskrit text-2xl font-bold">500+</div>
                  <p className="text-sm text-white/80">Artisan Families</p>
                </div>
                <div className="text-center">
                  <div className="font-sanskrit text-2xl font-bold">15</div>
                  <p className="text-sm text-white/80">Indian States</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={handloomImage} 
                alt="Handloom weaving artisan" 
                className="rounded-lg w-full h-48 object-cover"
              />
              <img 
                src={woodcraftImage} 
                alt="Woodcraft artisan" 
                className="rounded-lg w-full h-48 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;