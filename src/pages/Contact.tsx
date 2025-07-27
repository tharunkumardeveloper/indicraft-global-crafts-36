import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Heritage Street", "New Delhi, India 110001"],
      note: "Open for artisan workshops by appointment"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 11 2345 6789"],
      note: "Monday to Saturday, 9 AM - 6 PM IST"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@indicraft.com", "support@indicraft.com"],
      note: "We respond within 24 hours"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      note: "Closed on Sundays & Indian holidays"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-earth">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-sanskrit text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our products, need help with an order, or want to learn more 
            about our artisans? We'd love to hear from you and help you discover the perfect 
            piece of Indian heritage for your home.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="text-center p-6 hover:shadow-warm transition-all duration-300 border-border/50"
              >
                <CardContent className="p-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-sanskrit text-lg font-semibold text-foreground mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1 mb-3">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="font-body text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <p className="font-body text-xs text-primary/70">
                    {info.note}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 border-primary/20 shadow-soft">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="font-sanskrit text-2xl font-bold text-foreground">
                  Send us a Message
                </CardTitle>
                <p className="font-body text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us how we can help you..."
                      rows={6}
                      className="w-full"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-warm hover:shadow-warm transition-all duration-300"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="space-y-8">
              <Card className="p-8 border-primary/20 shadow-soft">
                <CardContent className="p-0">
                  <h3 className="font-sanskrit text-xl font-semibold text-foreground mb-4">
                    Why Choose Indicraft?
                  </h3>
                  <ul className="space-y-3 font-body text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      100% authentic handcrafted products
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Direct partnership with artisan communities
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Worldwide shipping with careful packaging
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      30-day return policy for peace of mind
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Dedicated customer support team
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-8 border-primary/20 shadow-soft bg-muted">
                <CardContent className="p-0">
                  <h3 className="font-sanskrit text-xl font-semibold mb-4 text-foreground">
                    Visit Our Workshop
                  </h3>
                  <p className="font-body text-muted-foreground mb-4">
                    Experience the magic of Indian craftsmanship firsthand! Schedule a visit 
                    to our Chennai workshop where you can meet our artisans, see the creation 
                    process, and even try your hand at traditional crafts.
                  </p>
                  <Button 
                    className="bg-gradient-heritage text-white hover:shadow-warm"
                  >
                    Schedule a Visit
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;