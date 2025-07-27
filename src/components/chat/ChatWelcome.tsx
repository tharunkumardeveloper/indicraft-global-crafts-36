import { Sparkles, MessageSquare, Palette, Search, ShoppingBag } from "lucide-react";

interface ChatWelcomeProps {
  onSuggestionClick: (message: string) => void;
}

const ChatWelcome = ({ onSuggestionClick }: ChatWelcomeProps) => {
  const suggestions = [
    {
      icon: Palette,
      title: "Tell me about authentic Indian handicrafts",
      description: "Learn about traditional pottery, textiles, and art"
    },
    {
      icon: ShoppingBag,
      title: "Show me handloom textile collections",
      description: "Explore sarees, scarves, and fabrics"
    },
    {
      icon: Search,
      title: "How do I know products are authentic?",
      description: "Understand our certification process"
    },
    {
      icon: MessageSquare,
      title: "What shipping options are available?",
      description: "Get details on delivery and packaging"
    }
  ];

  const handleSuggestionClick = (suggestionTitle: string) => {
    onSuggestionClick(suggestionTitle);
  };

  return (
    <div className="flex-1 flex flex-col p-4 sm:p-6 max-w-4xl mx-auto">
      {/* Welcome Header */}
      <div className="text-center mb-6 sm:mb-8 animate-fade-in flex-1 flex flex-col justify-center">
        <h1 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
          Welcome to Venmathi
        </h1>
        
        <p className="text-base sm:text-lg text-white/80 mb-4 sm:mb-6 leading-relaxed max-w-2xl mx-auto">
          Your personal guide to authentic Indian handicrafts. I can help you discover beautiful 
          handcrafted products, learn about traditional artisan techniques, and find the perfect 
          pieces for your collection.
        </p>
        
        <div className="bg-card/30 border border-border rounded-lg p-3 sm:p-4 text-sm text-white/70 max-w-lg mx-auto mb-6">
          <p className="mb-2">
            <strong className="text-white">I can assist you with:</strong>
          </p>
          <ul className="text-left space-y-1">
            <li>• Product information and authenticity verification</li>
            <li>• Artisan stories and traditional techniques</li>
            <li>• Shipping, delivery, and care instructions</li>
            <li>• Recommendations based on your preferences</li>
          </ul>
        </div>

        {/* Quick Start Suggestions */}
        <div className="w-full max-w-2xl mx-auto">
          <h2 className="text-base sm:text-lg font-medium text-white mb-3 sm:mb-4">
            Try asking me about...
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion.title)}
                className="group bg-card/20 hover:bg-card/40 border border-border/50 hover:border-primary/30 rounded-lg p-3 sm:p-4 text-left transition-all duration-200 hover:shadow-md animate-fade-in touch-manipulation"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <div className="bg-primary/20 p-1.5 sm:p-2 rounded-md group-hover:bg-primary/30 transition-colors duration-200">
                    <suggestion.icon className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-xs sm:text-sm text-white mb-0.5 group-hover:text-primary transition-colors duration-200">
                      {suggestion.title}
                    </h3>
                    <p className="text-xs text-white/60">
                      {suggestion.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWelcome;