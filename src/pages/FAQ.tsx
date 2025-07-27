import { useState } from "react";
import { ChevronDown, Package, Shield, Truck, Heart, HelpCircle, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (value: string) => {
    setOpenItems(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  const faqCategories = [
    {
      title: "Shipping & Delivery",
      icon: Truck,
      color: "text-blue-600",
      questions: [
        {
          id: "shipping-1",
          question: "What countries do you ship to?",
          answer: "We ship worldwide! We currently deliver to over 50 countries including USA, Canada, UK, Australia, UAE, and most European and Asian countries. If your country isn't listed at checkout, please contact us and we'll arrange special shipping."
        },
        {
          id: "shipping-2",
          question: "How long does shipping take?",
          answer: "Standard international shipping takes 7-14 business days depending on your location. We also offer express shipping (3-7 days) for urgent orders. Domestic shipping within India takes 3-5 business days."
        },
        {
          id: "shipping-3",
          question: "How do you ensure safe delivery of fragile items?",
          answer: "All our products are carefully packaged using protective materials like bubble wrap, foam, and sturdy boxes. Fragile items like pottery receive extra padding and 'Fragile' labels. We also provide shipping insurance for high-value items."
        },
        {
          id: "shipping-4",
          question: "Do you provide tracking information?",
          answer: "Yes! Once your order ships, you'll receive a tracking number via email. You can track your package in real-time through our website or the carrier's portal. We also send updates at key delivery milestones."
        }
      ]
    },
    {
      title: "Returns & Exchanges",
      icon: Package,
      color: "text-green-600",
      questions: [
        {
          id: "returns-1",
          question: "What is your return policy?",
          answer: "We offer a 30-day return policy for unused items in original condition with tags attached. Items must be returned in original packaging. Custom-made or personalized items cannot be returned unless damaged during shipping."
        },
        {
          id: "returns-2",
          question: "Who pays for return shipping?",
          answer: "If the item is damaged or not as described, we cover return shipping costs. For other returns (change of mind, wrong size, etc.), customers are responsible for return shipping fees. We recommend using trackable shipping methods."
        },
        {
          id: "returns-3",
          question: "How long do refunds take to process?",
          answer: "Refunds are processed within 5-7 business days after we receive the returned item. The time for the refund to appear in your account depends on your payment method - typically 3-10 business days for credit cards and 1-3 days for PayPal."
        },
        {
          id: "returns-4",
          question: "Can I exchange an item for a different size or color?",
          answer: "Yes! We're happy to exchange items for different sizes or colors (subject to availability). Simply contact us within 30 days of delivery to arrange an exchange. You'll only pay shipping costs if the exchange is due to personal preference."
        }
      ]
    },
    {
      title: "Product Authenticity",
      icon: Shield,
      color: "text-amber-600",
      questions: [
        {
          id: "authenticity-1",
          question: "How do you ensure product authenticity?",
          answer: "Every product comes with a Certificate of Authenticity. We work directly with verified artisan communities and conduct regular quality checks. Each item is photographed and documented throughout the creation process to ensure genuine handcrafted quality."
        },
        {
          id: "authenticity-2",
          question: "Are your products really handmade?",
          answer: "Absolutely! All our products are 100% handmade by skilled artisans using traditional techniques. We visit our artisan partners regularly and maintain detailed records of each craftsperson's work. Machine-made or mass-produced items are never sold as handcrafted."
        },
        {
          id: "authenticity-3",
          question: "Do you support fair trade practices?",
          answer: "Yes, fair trade is at the heart of our business. We ensure artisans receive fair wages (often 3-4 times local average), provide skill development programs, and maintain long-term partnerships. We're committed to ethical sourcing and sustainable practices."
        },
        {
          id: "authenticity-4",
          question: "Can I meet the artisan who made my product?",
          answer: "While direct meetings aren't always possible due to geographical distances, we provide detailed artisan profiles with many of our products. For special orders or workshop visits to India, we can arrange meetings with our artisan partners."
        }
      ]
    },
    {
      title: "Product Care",
      icon: Heart,
      color: "text-red-600",
      questions: [
        {
          id: "care-1",
          question: "How should I care for handloom textiles?",
          answer: "Hand wash in cold water with mild detergent, avoid bleach and fabric softeners. Air dry in shade to prevent color fading. For silk items, dry cleaning is recommended. Store in cool, dry places with cedar blocks to prevent insects."
        },
        {
          id: "care-2",
          question: "How do I maintain pottery and ceramic items?",
          answer: "Clean with soft cloth and mild soap, avoid abrasive cleaners. Most of our pottery is food-safe but check individual product descriptions. Avoid sudden temperature changes. For decorative pieces, dust regularly with a soft brush."
        },
        {
          id: "care-3",
          question: "What's the best way to care for wooden crafts?",
          answer: "Dust regularly with a soft cloth, avoid direct sunlight and moisture. Apply natural wood oil (like coconut or olive oil) occasionally to maintain luster. Keep away from heat sources and humid environments. Clean spills immediately."
        },
        {
          id: "care-4",
          question: "Do you provide care instructions with products?",
          answer: "Yes! Every product comes with detailed care instructions specific to the material and crafting technique used. We also have care guides on our website and are always available for specific care questions."
        }
      ]
    }
  ];

  const quickFacts = [
    { icon: Star, stat: "4.9/5", label: "Customer Rating" },
    { icon: Shield, stat: "100%", label: "Authentic Products" },
    { icon: Truck, stat: "50+", label: "Countries Served" },
    { icon: Heart, stat: "30 Days", label: "Return Policy" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-earth">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="font-sanskrit text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our products, shipping, returns, and more. 
            If you can't find what you're looking for, our support team is always here to help.
          </p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {quickFacts.map((fact, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-3">
                  <fact.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="font-sanskrit text-2xl font-bold text-foreground">{fact.stat}</div>
                <p className="text-sm text-muted-foreground">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                {/* Category Header */}
                <div className="flex items-center mb-8">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mr-4 ${category.color} bg-current/10`}>
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h2 className="font-sanskrit text-2xl font-bold text-foreground">
                    {category.title}
                  </h2>
                </div>

                {/* Questions */}
                <div className="space-y-4">
                  {category.questions.map((item) => (
                    <Card key={item.id} className="border-border/50 shadow-soft">
                      <Collapsible 
                        open={openItems.includes(item.id)} 
                        onOpenChange={() => toggleItem(item.id)}
                      >
                        <CollapsibleTrigger asChild>
                          <Button
                            variant="ghost"
                            className="w-full p-6 text-left justify-between hover:bg-muted/50 h-auto"
                          >
                            <span className="font-body font-medium text-foreground pr-4">
                              {item.question}
                            </span>
                            <ChevronDown 
                              className={`h-5 w-5 text-muted-foreground transition-transform duration-200 flex-shrink-0 ${
                                openItems.includes(item.id) ? 'rotate-180' : ''
                              }`} 
                            />
                          </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <CardContent className="pt-0 pb-6 px-6">
                            <p className="font-body text-muted-foreground leading-relaxed">
                              {item.answer}
                            </p>
                          </CardContent>
                        </CollapsibleContent>
                      </Collapsible>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support CTA */}
      <section className="py-16 bg-gradient-warm text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sanskrit text-3xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="font-body text-white/90 mb-8 max-w-2xl mx-auto">
            Our friendly support team is here to help! Get in touch with us and we'll 
            respond within 24 hours with personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
            >
              Contact Support
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Live Chat with Venmathi
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;