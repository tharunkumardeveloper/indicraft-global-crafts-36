import { Plus, MessageSquare, X, Trash2, MoreVertical, Sparkles, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { formatDistance } from "date-fns";
import { useState } from "react";

interface ChatSession {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: Date;
}

interface ChatSidebarProps {
  sessions: ChatSession[];
  currentSession: string | null;
  onSessionSelect: (sessionId: string) => void;
  onNewChat: () => void;
  onDeleteSession: (sessionId: string) => void;
  onClose: () => void;
  onShowIntro: () => void;
}

export const ChatSidebar = ({ 
  sessions, 
  currentSession, 
  onSessionSelect, 
  onNewChat,
  onDeleteSession,
  onClose,
  onShowIntro 
}: ChatSidebarProps) => {
  const [deleteSessionId, setDeleteSessionId] = useState<string | null>(null);
  const handleDeleteClick = (sessionId: string) => {
    setDeleteSessionId(sessionId);
  };

  const confirmDelete = () => {
    if (deleteSessionId) {
      onDeleteSession(deleteSessionId);
      setDeleteSessionId(null);
    }
  };

  return (
    <div className="w-64 sm:w-80 border-r border-border bg-card/30 backdrop-blur-sm flex flex-col">
      {/* Header */}
      <div className="p-3 sm:p-4 border-b border-border">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <button 
            onClick={onShowIntro}
            className="font-medium text-sm sm:text-base text-foreground flex items-center hover:text-primary transition-colors duration-200 cursor-pointer"
          >
            <MessageSquare className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-muted-foreground" />
            Chats
          </button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="hover:bg-accent transition-all duration-200 p-1.5 sm:p-2"
          >
            <X className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </div>
        <div className="space-y-2">
          <Button 
            onClick={onNewChat}
            className="w-full justify-start bg-primary hover:bg-primary/90 text-primary-foreground border-none transition-all duration-200 text-sm sm:text-base"
            variant="outline"
            size="sm"
          >
            <Plus className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
            New Chat
          </Button>
        </div>
      </div>

      {/* Chat Sessions */}
      <ScrollArea className="flex-1">
        <div className="p-2 space-y-2">
          {sessions.map((session, index) => (
            <div
              key={session.id}
              className="group relative animate-fade-in transition-all duration-200"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <Button
                variant="ghost"
                className={`w-full justify-start h-auto p-2 sm:p-3 text-left relative overflow-hidden transition-all duration-200 ${
                  currentSession === session.id 
                    ? "bg-accent text-accent-foreground" 
                    : "hover:bg-accent/50"
                }`}
                onClick={() => onSessionSelect(session.id)}
              >
                <div className="flex items-start space-x-2 w-full">
                  <MessageSquare className={`h-3 w-3 sm:h-4 sm:w-4 mt-0.5 flex-shrink-0 ${
                    currentSession === session.id ? "text-foreground" : "text-muted-foreground"
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-medium truncate">
                      {session.title || "New Chat"}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {session.lastMessage}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {formatDistance(session.timestamp, new Date(), { addSuffix: true })}
                    </p>
                  </div>
                </div>
              </Button>

              {/* Delete Dropdown */}
              <div className="absolute top-1 right-1 sm:top-2 sm:right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-5 w-5 sm:h-6 sm:w-6 p-0 hover:bg-destructive/10 hover:text-destructive"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <MoreVertical className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="animate-scale-in">
                    <DropdownMenuItem 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteClick(session.id);
                      }}
                      className="text-destructive hover:text-destructive hover:bg-destructive/10 transition-colors duration-200"
                    >
                      <Trash2 className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                      Delete Chat
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
          
          {sessions.length === 0 && (
            <div className="text-center py-6 sm:py-8 text-muted-foreground">
              <MessageSquare className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 sm:mb-3 opacity-50" />
              <p className="text-xs sm:text-sm">No conversations yet</p>
              <p className="text-xs">Start a new chat to begin!</p>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deleteSessionId} onOpenChange={() => setDeleteSessionId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <span>Delete Chat</span>
            </AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this chat? This action cannot be undone and all messages in this conversation will be permanently lost.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setDeleteSessionId(null)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              className="bg-destructive hover:bg-destructive/90 text-destructive-foreground"
            >
              Delete Chat
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};