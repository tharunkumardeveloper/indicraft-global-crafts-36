import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, ExternalLink, ShoppingBag, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  suggestions?: string[];
  productRecommendations?: ProductRecommendation[];
  pageRedirect?: {
    url: string;
    label: string;
  };
}

interface ProductRecommendation {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
}

interface SimpleChatInterfaceProps {
  isOpen: boolean;
  onClose: () => void;
}

const SimpleChatInterface = ({ isOpen, onClose }: SimpleChatInterfaceProps) => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Namaste! I'm Venmathi, your Indicraft assistant. I can help you discover authentic Indian handicrafts, learn about our artisans, and find the perfect products for your needs. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Sample product data for recommendations
  const sampleProducts: ProductRecommendation[] = [
    { id: 1, name: "Kanchipuram Silk Saree", price: "₹6,800", category: "Handwoven Sarees", image: "/src/assets/handloom-weaving.jpg" },
    { id: 4, name: "Terracotta Diyas Set", price: "₹450", category: "Terracotta Items", image: "/src/assets/hero-artisan.jpg" },
    { id: 7, name: "Wooden Toys Set", price: "₹950", category: "Wooden Toys", image: "/src/assets/woodcraft.jpg" },
    { id: 10, name: "Brass Pooja Thali", price: "₹2,200", category: "Brass Items", image: "/src/assets/products-collection.jpg" }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const processUserIntent = (userText: string) => {
    const text = userText.toLowerCase();
    
    // Only show products when explicitly asked to "show", "recommend", or "suggest"
    const isProductRequest = text.includes('show') || text.includes('recommend') || text.includes('suggest') || text.includes('find');
    
    // Product category intents - only when explicitly requested
    if (isProductRequest && (text.includes('saree') || text.includes('silk') || text.includes('handloom'))) {
      return { category: 'sarees', products: sampleProducts.filter(p => p.category.includes('Sarees')) };
    }
    if (isProductRequest && (text.includes('pottery') || text.includes('terracotta') || text.includes('clay') || text.includes('diya'))) {
      return { category: 'pottery', products: sampleProducts.filter(p => p.category.includes('Terracotta')) };
    }
    if (isProductRequest && (text.includes('wooden') || text.includes('toy') || text.includes('wood'))) {
      return { category: 'wooden', products: sampleProducts.filter(p => p.category.includes('Wooden')) };
    }
    if (isProductRequest && (text.includes('brass') || text.includes('pooja') || text.includes('thali'))) {
      return { category: 'brass', products: sampleProducts.filter(p => p.category.includes('Brass')) };
    }
    
    // Navigation intents - only when explicitly asked to go somewhere
    const isNavigationRequest = text.includes('go to') || text.includes('take me to') || text.includes('open') || text.includes('visit');
    
    if (isNavigationRequest && (text.includes('cart') || text.includes('my order') || text.includes('checkout'))) {
      return { redirect: '/cart', label: 'View Cart' };
    }
    if (isNavigationRequest && (text.includes('about') || text.includes('company') || text.includes('indicraft'))) {
      return { redirect: '/about', label: 'About Indicraft' };
    }
    if (isNavigationRequest && (text.includes('contact') || text.includes('support'))) {
      return { redirect: '/contact', label: 'Contact Us' };
    }
    if (isNavigationRequest && (text.includes('artisan') || text.includes('story') || text.includes('maker'))) {
      return { redirect: '/artisan-stories', label: 'Artisan Stories' };
    }
    
    return null;
  };

  const sendMessage = async (messageText?: string) => {
    const textToSend = messageText || inputValue.trim();
    if (!textToSend) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: textToSend,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Process user intent
    const intent = processUserIntent(textToSend);

    try {
      const systemPrompt = `You are Venmathi, a helpful assistant for Indicraft, an Indian handicrafts marketplace. You help customers discover authentic handcrafted products made by skilled artisans.

GUIDELINES:
- Provide helpful responses that are informative but concise
- Be professional, warm, and culturally aware
- Only show product recommendations when specifically asked to show/recommend products
- Only provide navigation when asked to go somewhere
- Keep responses focused and relevant to the user's question
- Mention artisan names when discussing specific products

AVAILABLE PRODUCTS:
- Handwoven Sarees (₹2,400-₹6,800) - Kanchipuram, Banarasi, Cotton by Meera Devi
- Terracotta Items (₹450-₹1,200) - Diyas, pots, vases by Ravi Kumar
- Wooden Toys (₹600-₹1,800) - Channapatna toys, puzzles by Lakshmi Bai
- Brass Puja Items (₹750-₹2,200) - Thalis, diyas by Arjun Sharma
- Block-printed Scarves (₹900-₹1,650) - Silk, cotton, Kalamkari
- Handmade Journals (₹450-₹1,200) - Eco-friendly paper, leather bound
- Jute Bags (₹350-₹650) - Embroidered, shopping, lunch bags
- Clay Kitchenware (₹600-₹2,400) - Cooking pots, bottles, dinner sets`;

      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [
            {
              role: "system",
              content: systemPrompt
            },
            ...messages.slice(-3).map(msg => ({
              role: msg.sender === 'user' ? 'user' : 'assistant',
              content: msg.text
            })),
            {
              role: "user",
              content: textToSend
            }
          ],
          max_tokens: 250,
          temperature: 0.7
        })
      });

      const data = await response.json();
      const botResponse = data.choices?.[0]?.message?.content || "I'm sorry, I couldn't process that. Please try again.";

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
        productRecommendations: intent?.products,
        pageRedirect: intent?.redirect ? { url: intent.redirect, label: intent.label || 'View Page' } : undefined
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm having trouble connecting right now. Please try again in a moment.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    sendMessage(suggestion);
  };

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
    onClose();
  };

  const handlePageRedirect = (url: string) => {
    navigate(url);
    onClose();
  };

  const MessageBubble = ({ message }: { message: Message }) => (
    <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-[85%] ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
        {message.sender === 'bot' && (
          <div className="flex items-center mb-1">
            <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-2">
              <Bot className="w-3 h-3 text-white" />
            </div>
            <span className="text-xs text-muted-foreground font-medium">Venmathi</span>
          </div>
        )}
        
        <div
          className={`rounded-2xl px-4 py-3 ${
            message.sender === 'user'
              ? 'bg-primary text-primary-foreground ml-4'
              : 'bg-muted text-foreground'
          }`}
        >
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
        </div>

        {/* Product Recommendations */}
        {message.productRecommendations && message.productRecommendations.length > 0 && (
          <div className="mt-3 space-y-2">
            <p className="text-xs text-muted-foreground font-medium">Recommended for you:</p>
            <div className="grid grid-cols-1 gap-2">
              {message.productRecommendations.map((product) => (
                <Card 
                  key={product.id} 
                  className="cursor-pointer hover:shadow-md transition-shadow border border-border/50"
                  onClick={() => handleProductClick(product.id)}
                >
                  <CardContent className="p-3">
                    <div className="flex items-center space-x-3">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium truncate">{product.name}</h4>
                        <p className="text-xs text-muted-foreground">{product.category}</p>
                        <p className="text-sm font-semibold text-primary">{product.price}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Page Redirect Button */}
        {message.pageRedirect && (
          <div className="mt-3">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => handlePageRedirect(message.pageRedirect!.url)}
              className="text-xs"
            >
              <ExternalLink className="w-3 h-3 mr-1" />
              {message.pageRedirect.label}
            </Button>
          </div>
        )}

        {/* Suggestions */}
        {message.suggestions && message.suggestions.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1">
            {message.suggestions.map((suggestion, index) => (
              <Button
                key={index}
                variant="secondary"
                size="sm"
                onClick={() => handleSuggestionClick(suggestion)}
                className="text-xs h-7 px-2"
              >
                {suggestion}
              </Button>
            ))}
          </div>
        )}

        {message.sender === 'bot' && (
          <p className="text-xs text-muted-foreground mt-2">
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        )}
      </div>
    </div>
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none">
      {/* Mobile: Full screen overlay */}
      <div className="md:hidden fixed inset-0 bg-background">
        <Card className="h-full rounded-none border-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b bg-gradient-to-r from-orange-50 to-red-50">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-sm">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Venmathi</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="text-xs text-muted-foreground">Indicraft Assistant • Online</p>
                </div>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose} className="hover:bg-white/50">
              <X className="w-4 h-4" />
            </Button>
          </CardHeader>
          
          <CardContent className="flex flex-col h-[calc(100%-85px)] p-0">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-1">
                {messages.map((message) => (
                  <MessageBubble key={message.id} message={message} />
                ))}
                {isTyping && (
                  <div className="flex justify-start mb-4">
                    <div className="flex items-center mb-1">
                      <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-2">
                        <Bot className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-xs text-muted-foreground font-medium">Venmathi is typing...</span>
                    </div>
                    <div className="bg-muted rounded-2xl px-4 py-3 ml-8">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:0.1s]"></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:0.2s]"></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>
            
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  disabled={isTyping}
                  className="flex-1"
                />
                <Button onClick={() => sendMessage()} disabled={isTyping || !inputValue.trim()}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Desktop: Bottom-right chat window */}
      <div className="hidden md:block fixed bottom-20 right-4 w-96 h-[500px]">
        <Card className="h-full shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 border-b bg-gradient-to-r from-orange-50 to-red-50">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-sm">
                <Bot className="w-3.5 h-3.5 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">Venmathi</h3>
                <div className="flex items-center space-x-1">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <p className="text-xs text-muted-foreground">Assistant</p>
                </div>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose} className="hover:bg-white/50">
              <X className="w-3 h-3" />
            </Button>
          </CardHeader>
          
          <CardContent className="flex flex-col h-[calc(100%-65px)] p-0">
            <ScrollArea className="flex-1 p-3">
              <div className="space-y-1">
                {messages.map((message) => (
                  <MessageBubble key={message.id} message={message} />
                ))}
                {isTyping && (
                  <div className="flex justify-start mb-3">
                    <div>
                      <div className="flex items-center mb-1">
                        <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-2">
                          <Bot className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-xs text-muted-foreground font-medium">Venmathi is typing...</span>
                      </div>
                      <div className="bg-muted rounded-2xl px-4 py-3 ml-8">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:0.1s]"></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:0.2s]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>
            
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  disabled={isTyping}
                  className="flex-1 text-sm h-10"
                />
                <Button onClick={() => sendMessage()} disabled={isTyping || !inputValue.trim()}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SimpleChatInterface;