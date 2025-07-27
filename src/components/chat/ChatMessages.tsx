import { useRef, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sparkles, Heart } from "lucide-react";
import venmathiAvatar from "@/assets/venmathi-chat-avatar.png";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  hasImage?: boolean;
  imageUrl?: string;
}

interface ChatMessagesProps {
  messages: Message[];
  isTyping: boolean;
}

export const ChatMessages = ({ messages, isTyping }: ChatMessagesProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (messages.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-background via-muted/10 to-background">
        <div className="text-center max-w-md mx-auto px-4 animate-fade-in">
          <div className="relative mb-6">
            <img 
              src={venmathiAvatar} 
              alt="Venmathi" 
              className="w-20 h-20 mx-auto rounded-full shadow-lg border-4 border-primary/20"
            />
            <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-yellow-400 animate-ping" />
            <Heart className="absolute -bottom-1 -left-1 h-4 w-4 text-red-400 animate-bounce" />
          </div>
          <h3 className="text-xl font-sanskrit font-semibold text-foreground mb-3 bg-gradient-warm bg-clip-text text-transparent">
            Vanakkam! 🙏 Welcome to Venmathi
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Your personal guide to the beautiful world of Indian handicrafts. 
            Start a conversation to explore our authentic collection crafted by master artisans! ✨
          </p>
          <div className="mt-6 flex justify-center space-x-2">
            <div className="px-3 py-1 bg-primary/10 rounded-full text-xs text-primary">Ask about pottery</div>
            <div className="px-3 py-1 bg-accent/10 rounded-full text-xs text-accent">Explore textiles</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <ScrollArea className="flex-1 bg-gradient-to-b from-background via-muted/5 to-background">
      <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {messages.map((message, index) => (
          <div
            key={message.id}
            className={`flex animate-fade-in hover-scale ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={`flex space-x-3 max-w-[85%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
              {/* Avatar */}
              <div className="flex-shrink-0">
                {message.sender === 'bot' ? (
                  <div className="relative">
                    <img 
                      src={venmathiAvatar} 
                      alt="Venmathi" 
                      className="w-9 h-9 rounded-full shadow-md border-2 border-primary/20"
                    />
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-background"></div>
                  </div>
                ) : (
                  <div className="w-9 h-9 bg-gradient-warm rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white text-xs font-medium">You</span>
                  </div>
                )}
              </div>

              {/* Message Content */}
              <div className={`space-y-2 ${message.sender === 'user' ? 'text-right' : ''}`}>
                <div
                  className={`p-4 rounded-2xl shadow-sm border transition-all duration-300 hover:shadow-md ${
                    message.sender === 'user'
                      ? 'bg-gradient-warm text-white rounded-tr-sm border-primary/20'
                      : 'bg-background border-border rounded-tl-sm hover:bg-muted/50'
                  }`}
                >
                  {message.hasImage && message.imageUrl && (
                    <div className="mb-3 animate-fade-in">
                      <img 
                        src={message.imageUrl} 
                        alt="Uploaded image" 
                        className="max-w-xs rounded-xl shadow-md border border-border/50"
                      />
                    </div>
                  )}
                  <p className={`text-sm leading-relaxed whitespace-pre-wrap ${
                    message.sender === 'user' ? 'text-white' : 'text-foreground'
                  }`}>
                    {message.text}
                  </p>
                </div>
                <div className={`flex items-center space-x-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <p className="text-xs text-muted-foreground">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                  {message.sender === 'bot' && (
                    <Heart className="h-3 w-3 text-red-400 opacity-60" />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start animate-fade-in">
            <div className="flex space-x-3 max-w-[85%]">
              <div className="relative">
                <img 
                  src={venmathiAvatar} 
                  alt="Venmathi" 
                  className="w-9 h-9 rounded-full shadow-md border-2 border-primary/20 animate-pulse"
                />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full border-2 border-background animate-ping"></div>
              </div>
              <div className="bg-gradient-to-r from-muted to-muted/70 border border-border p-4 rounded-2xl rounded-tl-sm shadow-sm">
                <div className="flex space-x-1 items-center">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                  <span className="text-xs text-muted-foreground ml-2">Venmathi is typing...</span>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
    </ScrollArea>
  );
};