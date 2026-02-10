import { createContext, useContext, useState, ReactNode, useEffect } from "react";

export type UserRole = 'customer' | 'vendor' | 'admin';

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: UserRole) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Mock users for demo
  const mockUsers = {
    customer: {
      id: '1',
      name: 'Priya Sharma',
      email: 'customer@indicraft.com',
      role: 'customer' as UserRole,
      avatar: '/product/kanchipuram silk saree.webp'
    },
    vendor: {
      id: '2',
      name: 'Ravi Kumar',
      email: 'vendor@indicraft.com',
      role: 'vendor' as UserRole,
      avatar: '/product/terracotta water pot.webp'
    },
    admin: {
      id: '3',
      name: 'Admin User',
      email: 'admin@indicraft.com',
      role: 'admin' as UserRole,
      avatar: '/product/brass pooja thali set.webp'
    }
  };

  useEffect(() => {
    // Check for stored auth data
    const storedUser = localStorage.getItem('indicraft_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string, role: UserRole): Promise<boolean> => {
    setIsLoading(true);
    
    // Mock authentication - in real app, this would be an API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockUser = mockUsers[role];
    if (email === mockUser.email && password === 'password') {
      setUser(mockUser);
      localStorage.setItem('indicraft_user', JSON.stringify(mockUser));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('indicraft_user');
  };

  const value: AuthContextType = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};