import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import ChatInterface from "./chat/ChatInterface";
import { useIsMobile } from "@/hooks/use-mobile";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen-mobile flex flex-col">
      <Navigation />
      <main className="flex-1 touch-manipulation">
        {children}
      </main>
      <Footer />
      <ChatInterface />
    </div>
  );
};

export default Layout;