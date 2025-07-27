import { useState, useRef } from "react";
import { Send, Plus, Paperclip, Image, Smile, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ChatInputProps {
  onSendMessage: (text: string, imageFile?: File) => void;
  inputValue?: string;
  onInputChange?: (value: string) => void;
}

export const ChatInput = ({ onSendMessage, inputValue: controlledInputValue, onInputChange }: ChatInputProps) => {
  const [localInputValue, setLocalInputValue] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Use controlled value if provided, otherwise use local state
  const inputValue = controlledInputValue !== undefined ? controlledInputValue : localInputValue;
  const setInputValue = onInputChange || setLocalInputValue;

  const handleSend = () => {
    if (!inputValue.trim() && !selectedImage) return;
    
    onSendMessage(inputValue, selectedImage || undefined);
    setInputValue("");
    setSelectedImage(null);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="border-t border-border bg-gradient-to-r from-background via-muted/10 to-background backdrop-blur-sm">
      <div className="max-w-4xl mx-auto p-4">
        {/* Image Preview */}
        {selectedImage && (
          <div className="mb-4 p-4 bg-gradient-to-r from-muted/50 to-muted/30 rounded-xl border border-border/50 animate-fade-in">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Image className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <span className="text-sm font-medium text-foreground">{selectedImage.name}</span>
                  <p className="text-xs text-muted-foreground">Ready to send</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={removeImage}
                className="text-muted-foreground hover:text-red-600 hover:bg-red-50 transition-all duration-300 group"
              >
                <span className="text-lg group-hover:rotate-90 transition-transform duration-300">×</span>
              </Button>
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="flex items-end space-x-3">
          {/* Attachment Buttons */}
          <div className="flex space-x-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => fileInputRef.current?.click()}
              className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 group"
              title="Attach image"
            >
              <Plus className="h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageSelect}
              className="hidden"
            />
          </div>

          {/* Text Input */}
          <div className="flex-1 relative">
            <Textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about our beautiful Indian handicrafts..."
              className="min-h-[52px] max-h-32 resize-none border-border bg-background/80 backdrop-blur-sm pr-14 text-sm text-white placeholder:text-muted-foreground/70 focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all duration-300"
              rows={1}
            />
            
            {/* Send Button */}
            <Button
              onClick={handleSend}
              size="sm"
              className={`absolute right-2 bottom-2 h-8 w-8 p-0 transition-all duration-300 ${
                inputValue.trim() || selectedImage 
                  ? "bg-gradient-warm hover:bg-gradient-heritage shadow-md hover:shadow-lg scale-100" 
                  : "bg-muted text-muted-foreground scale-90 cursor-not-allowed"
              }`}
              disabled={!inputValue.trim() && !selectedImage}
            >
              <Send className={`h-4 w-4 transition-transform duration-300 ${
                inputValue.trim() || selectedImage ? "group-hover:translate-x-0.5" : ""
              }`} />
            </Button>

            {/* Floating Action Buttons */}
            <div className="absolute right-12 bottom-2 flex space-x-1 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0 text-muted-foreground hover:text-primary"
                title="Add emoji"
              >
                <Smile className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-3 flex items-center justify-between">
          <p className="text-xs text-muted-foreground animate-fade-in">
            Ask me anything about Indian handicrafts, shipping, or our artisan stories
          </p>
          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
            <kbd className="px-2 py-1 bg-muted rounded text-xs">Enter</kbd>
            <span>to send</span>
          </div>
        </div>
      </div>
    </div>
  );
};