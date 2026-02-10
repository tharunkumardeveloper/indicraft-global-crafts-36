import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import indicraftDecorativePot from "@/assets/indicraft-decorative-pot.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, logout, isAuthenticated } = useAuth();

  const getNavItems = () => {
    if (!isAuthenticated) {
      return [
        { name: "Home", path: "/" },
        { name: "Shop", path: "/shop" },
        { name: "Artisans", path: "/artisans" },
        { name: "Stores", path: "/stores" },
        { name: "Blog", path: "/blog" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "FAQ", path: "/faq" },
      ];
    }

    switch (user?.role) {
      case 'customer':
        return [
          { name: "Home", path: "/" },
          { name: "Shop", path: "/shop" },
          { name: "Artisans", path: "/artisans" },
          { name: "Stores", path: "/stores" },
          { name: "Blog", path: "/blog" },
          { name: "About", path: "/about" },
          { name: "Contact", path: "/contact" },
          { name: "FAQ", path: "/faq" },
        ];
      case 'vendor':
        return [
          { name: "Dashboard", path: "/vendor/dashboard" },
          { name: "Products", path: "/vendor/products" },
          { name: "Orders", path: "/vendor/orders" },
          { name: "Analytics", path: "/vendor/analytics" },
          { name: "Store Locator", path: "/vendor/centre-locator" },
          { name: "Profile", path: "/vendor/profile" },
        ];
      case 'admin':
        return [
          { name: "Dashboard", path: "/admin/dashboard" },
          { name: "Buyer Patterns", path: "/buyer-patterns" },
          { name: "Dataset", path: "/admin/dataset" },
          { name: "Users", path: "/admin/users" },
          { name: "Analytics", path: "/admin/analytics" },
        ];
      default:
        return [];
    }
  };

  const navItems = getNavItems();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 font-sanskrit font-bold text-xl text-foreground hover:text-primary transition-colors"
          >
            <img 
              src={indicraftDecorativePot} 
              alt="Indicraft Logo" 
              className="w-8 h-8 object-contain"
            />
            <span>Indicraft</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-body text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path) 
                    ? "text-primary border-b-2 border-primary" 
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* User Menu */}
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span className="text-sm font-medium">{user?.name}</span>
                </div>
                <Button variant="ghost" size="sm" onClick={logout}>
                  <LogOut className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <Button asChild>
                <Link to="/login">Login</Link>
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {isAuthenticated && (
              <Button variant="ghost" size="sm" onClick={logout}>
                <LogOut className="h-4 w-4" />
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 animate-fade-in-up border-t border-border/10 mt-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-base font-medium transition-colors hover:text-primary hover:bg-muted rounded-lg ${
                  isActive(item.path) 
                    ? "text-primary bg-muted" 
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {isAuthenticated && (
              <div className="px-4 py-3 border-t border-border/10 mt-4">
                <p className="text-sm text-muted-foreground mb-2">Signed in as</p>
                <p className="font-medium">{user?.name}</p>
                <p className="text-sm text-muted-foreground capitalize">{user?.role}</p>
              </div>
            )}
            
            {!isAuthenticated && (
              <div className="px-4 py-3 border-t border-border/10 mt-4">
                <Button asChild className="w-full">
                  <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;