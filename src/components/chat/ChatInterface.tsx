import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Plus, Paperclip, Image, Sparkles, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ChatSidebar } from "./ChatSidebar";
import { ChatMessages } from "./ChatMessages";
import { ChatInput } from "./ChatInput";
import ChatWelcome from "./ChatWelcome";
import { ttsManager } from "@/utils/tts";

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
  const [isTTSEnabled, setIsTTSEnabled] = useState(true);

  const getCurrentMessages = (): Message[] => {
    if (!currentSession) return [];
    const session = sessions.find(s => s.id === currentSession);
    return session?.messages || [];
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
    setShowWelcome(false);
    setHasVisitedBefore(true);
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
  
    setShowWelcome(false);
    setHasVisitedBefore(true);
    setInputValue("");
  
    let sessionId = currentSession;
    if (!sessionId) {
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
  
    try {
      // 🔹 Get last 3 USER messages only for context
      const session = sessions.find(s => s.id === sessionId);
      const lastMessages = session?.messages
        .filter(m => m.sender === 'user')
        .slice(-3) || [];
  
      const historyContext = lastMessages
        .map(msg => `User: ${msg.text}`)
        .join("\n");
  
      // 🔹 Detect intent & build a guided prompt
      function buildPrompt(userMessage: string, history: string): string {
        const lower = userMessage.toLowerCase();
        let intent: string;
  
        if (lower.includes("password") || lower.includes("login") || lower.includes("account")) {
          intent = "account_help";
        } else if (
          lower.includes("saree") || lower.includes("dress") || 
          lower.includes("kurta") || lower.includes("buy") || lower.includes("order")
        ) {
          intent = "product_help";
        } else if (
          lower.includes("hi") || lower.includes("hello") || 
          lower.includes("good morning") || lower.includes("good evening") || 
          lower.includes("how are you")
        ) {
          intent = "small_talk";
        } else {
          intent = "general";
        }
  
        if (intent === "account_help") {
          return `${history}\nThe user has an **ACCOUNT ISSUE**. Reply only with account-related help.\nUser: ${userMessage}\nBot:`;
        } else if (intent === "product_help") {
          return `${history}\nThe user is asking about **PRODUCTS**. Reply only with helpful product-related guidance.\nUser: ${userMessage}\nBot:`;
        } else if (intent === "small_talk") {
          return `${history}\nThe user is making small talk — greet them warmly but stay in character.\nUser: ${userMessage}\nBot:`;
        } else {
          return `${history}\nRespond politely and helpfully.\nUser: ${userMessage}\nBot:`;
        }
      }
  
      const fullPrompt = buildPrompt(text, historyContext);
  
      const res = await fetch("/ollama/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "venmathi",
          prompt: fullPrompt,
          stream: true
        })
      });
  
      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      let fullText = "";
  
      const botMessageId = (Date.now() + 1).toString();
      setSessions(prev => prev.map(session => {
        if (session.id === sessionId) {
          return {
            ...session,
            messages: [
              ...session.messages,
              {
                id: botMessageId,
                text: "",
                sender: 'bot',
                timestamp: new Date()
              }
            ]
          };
        }
        return session;
      }));
  
      let isFirstChunk = true;
  
      while (reader) {
        const { done, value } = await reader.read();
        if (done) break;
  
        const chunk = decoder.decode(value, { stream: true });
  
        try {
          const json = JSON.parse(chunk);
          if (json.response) {
            fullText += json.response;
  
            if (isFirstChunk) {
              setIsTyping(false);
              isFirstChunk = false;
            }
  
            setSessions(prev => prev.map(session => {
              if (session.id === sessionId) {
                return {
                  ...session,
                  messages: session.messages.map(msg =>
                    msg.id === botMessageId ? { ...msg, text: fullText } : msg
                  )
                };
              }
              return session;
            }));

            // Speak the text as it streams (sentence by sentence)
            if (isTTSEnabled && json.response) {
              ttsManager.speakStreaming(json.response, 1.3);
            }
          }
        } catch {
          // Ignore partial JSON errors
        }
      }
  
      if (isFirstChunk) {
        setIsTyping(false);
      }
  
    } catch (err) {
      console.error("Error calling Ollama:", err);
      setIsTyping(false);
    }
  };
  

  const openChat = () => {
    setIsOpen(true);
    if (!hasVisitedBefore && sessions.length === 0) {
      setShowWelcome(true);
    } else {
      setShowWelcome(false);
      if (!currentSession && sessions.length > 0) {
        setCurrentSession(sessions[0].id);
      }
    }
  };

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
                <div 
                  className="absolute inset-0 -z-10" 
                  onClick={() => setIsMobileSidebarOpen(false)}
                />
              </div>
            )}

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col min-w-0 w-full">
              {/* Header */}
              {!shouldShowWelcome && (
                <div className="border-b border-border p-3 sm:p-4 flex items-center justify-between bg-card/50 backdrop-blur-sm">
                  <div className="flex items-center space-x-3">
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
                      <h1 className="font-semibold text-base sm:text-lg text-foreground">Venmathi</h1>
                      <p className="text-xs sm:text-sm text-muted-foreground flex items-center">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                        Online
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setIsTTSEnabled(!isTTSEnabled);
                        if (isTTSEnabled) {
                          ttsManager.stop();
                        }
                      }}
                      className="hover:bg-accent text-white hover:text-white transition-all duration-200"
                      title={isTTSEnabled ? "Disable voice" : "Enable voice"}
                    >
                      {isTTSEnabled ? (
                        <Volume2 className="h-4 w-4 sm:h-5 sm:w-5" />
                      ) : (
                        <VolumeX className="h-4 w-4 sm:h-5 sm:w-5" />
                      )}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setIsOpen(false);
                        ttsManager.stop();
                      }}
                      className="hover:bg-accent text-white hover:text-white transition-all duration-200"
                    >
                      <X className="h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Welcome Screen or Messages */}
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
