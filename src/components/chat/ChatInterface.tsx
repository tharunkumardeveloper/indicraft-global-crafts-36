import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Plus, Paperclip, Image, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ChatSidebar } from "./ChatSidebar";
import { ChatMessages } from "./ChatMessages";
import { ChatInput } from "./ChatInput";
import ChatWelcome from "./ChatWelcome";


interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  hasImage?: boolean;
  imageUrl?: string;
}

interface ChatSession {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: Date;
  messages: Message[];
}

const ChatInterface = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSession, setCurrentSession] = useState<string | null>(null);
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [hasVisitedBefore, setHasVisitedBefore] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const getCurrentMessages = (): Message[] => {
    if (!currentSession) return [];
    const session = sessions.find(s => s.id === currentSession);
    return session?.messages || [];
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("vanakkam")) {
      return "Vanakkam! Welcome to Indicraft. I'm Venmathi, here to help you discover authentic Indian handicrafts. What would you like to know about our beautiful products?";
    }
    
    if (lowerMessage.includes("shipping") || lowerMessage.includes("delivery")) {
      return "We offer worldwide shipping! Delivery typically takes 7-14 business days depending on your location. All items are carefully packaged to ensure they reach you safely. 📦";
    }
    
    if (lowerMessage.includes("authentic") || lowerMessage.includes("genuine")) {
      return "Every product at Indicraft is 100% authentic, handcrafted by skilled Indian artisans. We work directly with artisan communities to ensure traditional techniques are preserved. Each piece comes with a certificate of authenticity. ✨";
    }
    
    if (lowerMessage.includes("pottery") || lowerMessage.includes("ceramic")) {
      return "Our pottery collection features beautiful terracotta pieces, decorative bowls, and traditional Indian ceramics. Each piece is hand-thrown and painted by master potters using techniques passed down for generations. 🏺";
    }
    
    if (lowerMessage.includes("textile") || lowerMessage.includes("fabric") || lowerMessage.includes("handloom")) {
      return "Our handloom textiles include stunning sarees, scarves, and home decor items woven on traditional looms. Each piece showcases intricate patterns and vibrant colors using natural dyes. 🧶";
    }
    
    return "That's a wonderful question! I'd be happy to connect you with our artisan specialists who can provide detailed information. You can also browse our FAQ section or contact us directly for personalized assistance. Is there anything specific about our Indian handicrafts you'd like to explore? 🎨";
  };

  const createNewChat = () => {
    const newSessionId = Date.now().toString();
    const newSession: ChatSession = {
      id: newSessionId,
      title: "New Chat",
      lastMessage: "",
      timestamp: new Date(),
      messages: []
    };
    
    setSessions(prev => [newSession, ...prev]);
    setCurrentSession(newSessionId);
    setShowWelcome(false); // Don't show welcome for new chat
    setHasVisitedBefore(true); // Mark as visited
  };

  const handleSuggestionClick = (suggestionText: string) => {
    setInputValue(suggestionText);
  };

  const handleShowIntro = () => {
    setShowWelcome(true);
    setCurrentSession(null);
  };

  const deleteSession = (sessionId: string) => {
    setSessions(prev => prev.filter(s => s.id !== sessionId));
    if (currentSession === sessionId) {
      const remainingSessions = sessions.filter(s => s.id !== sessionId);
      if (remainingSessions.length > 0) {
        setCurrentSession(remainingSessions[0].id);
      } else {
        setCurrentSession(null);
        createNewChat();
      }
    }
  };

  const handleSendMessage = async (text: string, imageFile?: File) => {
    if (!text.trim() && !imageFile) return;

    setShowWelcome(false); // Hide welcome when sending message
    setHasVisitedBefore(true); // Mark as visited
    setInputValue(""); // Clear input after sending

    let sessionId = currentSession;
    if (!sessionId) {
      // Create a new chat session with initial bot message
      const newSessionId = Date.now().toString();
      const newSession: ChatSession = {
        id: newSessionId,
        title: "New Chat",
        lastMessage: "",
        timestamp: new Date(),
        messages: [{
          id: '1',
          text: "Vanakkam! I'm Venmathi, your personal guide to the beautiful world of Indian handicrafts. How may I assist you today? 🙏",
          sender: 'bot',
          timestamp: new Date()
        }]
      };
      
      setSessions(prev => [newSession, ...prev]);
      setCurrentSession(newSessionId);
      sessionId = newSessionId;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date(),
      hasImage: !!imageFile,
      imageUrl: imageFile ? URL.createObjectURL(imageFile) : undefined
    };

    setSessions(prev => prev.map(session => {
      if (session.id === sessionId) {
        const updatedMessages = [...session.messages, userMessage];
        return {
          ...session,
          messages: updatedMessages,
          lastMessage: text.trim() || "Image",
          title: session.title === "New Chat" ? text.trim().slice(0, 30) + "..." : session.title
        };
      }
      return session;
    }));

    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(text),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setSessions(prev => prev.map(session => {
        if (session.id === sessionId) {
          return {
            ...session,
            messages: [...session.messages, botResponse]
          };
        }
        return session;
      }));
      setIsTyping(false);
    }, 1500);
  };

  const openChat = () => {
    setIsOpen(true);
    // Show welcome screen only if user hasn't visited before and no sessions exist
    if (!hasVisitedBefore && sessions.length === 0) {
      setShowWelcome(true);
    } else {
      setShowWelcome(false);
      if (!currentSession && sessions.length > 0) {
        setCurrentSession(sessions[0].id);
      }
    }
  };

  // Show welcome screen based on showWelcome state
  const shouldShowWelcome = showWelcome;

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={openChat}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 h-12 w-12 sm:h-14 sm:w-14 rounded-full shadow-lg z-50 bg-primary hover:bg-primary/90 hover:shadow-xl transition-all duration-300 group ${
          isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100 hover:scale-105'
        }`}
        size="sm"
      >
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground group-hover:scale-110 transition-transform duration-200" />
      </Button>

      {/* Full Screen Chat Interface */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background dark animate-fade-in chat-container">
          <div className="flex h-full w-full animate-scale-in">
            {/* Sidebar - Hidden on mobile, visible on desktop */}
            <div className="hidden md:block">
              <ChatSidebar
                sessions={sessions}
                currentSession={currentSession}
                onSessionSelect={setCurrentSession}
                onNewChat={createNewChat}
                onDeleteSession={deleteSession}
                onClose={() => setIsOpen(false)}
                onShowIntro={handleShowIntro}
              />
            </div>

            {/* Mobile Sidebar Overlay */}
            {isMobileSidebarOpen && (
              <div className="md:hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm">
                <div className="w-80 h-full bg-[hsl(212_100%_2%)] border-r border-[hsl(217_15%_12%)] animate-slide-in-left">
                  <ChatSidebar
                    sessions={sessions}
                    currentSession={currentSession}
                    onSessionSelect={(sessionId) => {
                      setCurrentSession(sessionId);
                      setIsMobileSidebarOpen(false);
                    }}
                    onNewChat={() => {
                      createNewChat();
                      setIsMobileSidebarOpen(false);
                    }}
                    onDeleteSession={deleteSession}
                    onClose={() => {
                      setIsOpen(false);
                      setIsMobileSidebarOpen(false);
                    }}
                    onShowIntro={() => {
                      handleShowIntro();
                      setIsMobileSidebarOpen(false);
                    }}
                  />
                </div>
                {/* Overlay to close sidebar */}
                <div 
                  className="absolute inset-0 -z-10" 
                  onClick={() => setIsMobileSidebarOpen(false)}
                />
              </div>
            )}

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col min-w-0 w-full">
              {/* Header - Only show when there are active conversations */}
              {!shouldShowWelcome && (
                <div className="border-b border-border p-3 sm:p-4 flex items-center justify-between bg-card/50 backdrop-blur-sm">
                  <div className="flex items-center space-x-3">
                    {/* Mobile hamburger menu */}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="md:hidden text-white hover:bg-accent hover:text-white transition-all duration-200"
                      onClick={() => setIsMobileSidebarOpen(true)}
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </Button>
                    <div>
                      <h1 className="font-semibold text-base sm:text-lg text-foreground">
                        Venmathi
                      </h1>
                      <p className="text-xs sm:text-sm text-muted-foreground flex items-center">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                        Online
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="hover:bg-accent text-white hover:text-white transition-all duration-200"
                  >
                    <X className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </div>
              )}

              {/* Show Welcome Screen or Messages */}
              {shouldShowWelcome ? (
                <div className="flex flex-col h-full w-full overflow-hidden">
                  <div className="flex-1 overflow-y-auto">
                    <ChatWelcome onSuggestionClick={handleSuggestionClick} />
                  </div>
                  <div className="flex-shrink-0">
                    <ChatInput 
                      onSendMessage={handleSendMessage} 
                      inputValue={inputValue}
                      onInputChange={setInputValue}
                    />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col h-full w-full overflow-hidden">
                  <div className="flex-1 overflow-y-auto">
                    <ChatMessages 
                      messages={getCurrentMessages()} 
                      isTyping={isTyping}
                    />
                  </div>
                  <div className="flex-shrink-0">
                    <ChatInput onSendMessage={handleSendMessage} />
                  </div>
                </div>
              )}

              {/* Welcome screen controls */}
              {shouldShowWelcome && (
                <>
                  {/* Mobile hamburger menu for welcome screen - Left side */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="md:hidden absolute top-3 left-3 sm:top-4 sm:left-4 text-white hover:bg-accent hover:text-white transition-all duration-200 z-10"
                    onClick={() => setIsMobileSidebarOpen(true)}
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </Button>
                  
                  {/* Close button - Right side */}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white hover:bg-accent hover:text-white transition-all duration-200 z-10"
                  >
                    <X className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatInterface;