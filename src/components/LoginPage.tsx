import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { User, Store, Shield, Sparkles, Heart, Star } from "lucide-react";
import indicraftLogo from "@/assets/indicraft-decorative-pot.png";

const LoginPage = () => {
  const { login, isLoading, isAuthenticated, user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (isAuthenticated && user) {
      const redirectMap = {
        customer: '/',
        vendor: '/vendor/dashboard',
        admin: '/admin/dashboard'
      };
      navigate(redirectMap[user.role], { replace: true });
    }
  }, [isAuthenticated, user, navigate]);

  const handleRoleLogin = async (role: 'customer' | 'vendor' | 'admin') => {
    const credentials = {
      customer: { email: 'customer@indicraft.com', redirect: '/' },
      vendor: { email: 'vendor@indicraft.com', redirect: '/vendor/dashboard' },
      admin: { email: 'admin@indicraft.com', redirect: '/admin/dashboard' }
    };

    const success = await login(credentials[role].email, 'password', role);
    
    if (success) {
      toast({
        title: "स्वागत है! Welcome!",
        description: `Logged in successfully as ${role}`,
      });
      // Use replace to prevent going back to login page
      navigate(credentials[role].redirect, { replace: true });
    } else {
      toast({
        title: "Login Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    }
  };

  const roleOptions = [
    {
      role: 'customer' as const,
      icon: User,
      title: "Customer",
      subtitle: "வாடிக்கையாளர்",
      description: "Discover authentic Indian handicrafts",
      longDescription: "Explore handcrafted treasures from skilled artisans across India",
      gradient: "from-blue-500 via-indigo-500 to-purple-600",
      bgGradient: "from-blue-50 to-indigo-50",
      shadowColor: "shadow-blue-500/20",
      emoji: "🛍️"
    },
    {
      role: 'vendor' as const,
      icon: Store,
      title: "Vendor",
      subtitle: "விற்பனையாளர்",
      description: "Showcase your traditional crafts",
      longDescription: "Share your artisan skills and connect with global customers",
      gradient: "from-green-500 via-emerald-500 to-teal-600",
      bgGradient: "from-green-50 to-emerald-50",
      shadowColor: "shadow-green-500/20",
      emoji: "🏪"
    },
    {
      role: 'admin' as const,
      icon: Shield,
      title: "Admin",
      subtitle: "நிர்வாகி",
      description: "Manage platform insights",
      longDescription: "Access analytics, buyer patterns, and global market data",
      gradient: "from-orange-500 via-red-500 to-pink-600",
      bgGradient: "from-orange-50 to-red-50",
      shadowColor: "shadow-orange-500/20",
      emoji: "⚡"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-red-50 via-yellow-50 to-pink-100">
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-red-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-20 animate-bounce"></div>
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-screen flex items-center justify-center p-4 overflow-hidden">
        <div className="w-full max-w-6xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="font-sanskrit text-4xl md:text-5xl font-bold animate-gradient mb-3">
              Indicraft
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-2 font-medium">
              இந்திய கைவினைப் பொக்கிஷம்
            </p>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Where tradition meets innovation • Connecting artisans with the world
            </p>
            
            {/* Decorative Elements */}
            <div className="flex justify-center items-center space-x-4 mt-4">
              <Star className="w-5 h-5 text-yellow-500 animate-pulse" />
              <Heart className="w-5 h-5 text-red-500 animate-pulse" />
              <Star className="w-5 h-5 text-yellow-500 animate-pulse" />
            </div>
          </div>

          {/* Role Selection Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {roleOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <div
                  key={option.role}
                  className={`group relative transform transition-all duration-500 hover:scale-105 card-hover animate-fade-in-up ${
                    index === 1 ? 'md:-translate-y-2' : ''
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Card */}
                  <div className={`relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-2xl ${option.shadowColor} border border-white/50 hover:shadow-3xl transition-all duration-300`}>
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${option.bgGradient} rounded-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10 text-center">
                      {/* Icon */}
                      <div className="mb-4">
                        <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${option.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-2xl mt-2">{option.emoji}</div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-800 mb-1">
                        {option.title}
                      </h3>
                      <p className="text-base text-gray-600 mb-3 font-sanskrit">
                        {option.subtitle}
                      </p>
                      
                      {/* Description */}
                      <p className="text-gray-700 mb-1 font-medium text-sm">
                        {option.description}
                      </p>
                      <p className="text-xs text-gray-600 mb-6">
                        {option.longDescription}
                      </p>
                      
                      {/* Button */}
                      <Button
                        onClick={() => handleRoleLogin(option.role)}
                        disabled={isLoading}
                        className={`w-full h-12 text-base font-semibold bg-gradient-to-r ${option.gradient} hover:shadow-lg transform transition-all duration-300 hover:scale-105 text-white border-0 rounded-xl`}
                      >
                        {isLoading ? (
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span>Entering...</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-2">
                            <span>Enter as {option.title}</span>
                            <Sparkles className="w-4 h-4" />
                          </div>
                        )}
                      </Button>
                    </div>
                    
                    {/* Decorative Corner */}
                    <div className="absolute top-3 right-3 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-gray-700 font-medium text-sm">
                Experience the magic of Indian craftsmanship
              </span>
              <Heart className="w-4 h-4 text-red-500" />
            </div>
            
            <p className="text-xs text-gray-600 mt-3 max-w-md mx-auto">
              This is a demo platform showcasing the rich heritage of Indian handicrafts. 
              Choose any role above to explore our features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;