import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Package, TrendingUp, Users, Eye, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";

const VendorDashboard = () => {
  const { user } = useAuth();
  
  // Mock data for vendor products
  const [products] = useState([
    {
      id: 1,
      name: "Traditional Terracotta Diyas Set",
      category: "Terracotta Items",
      price: 450,
      stock: 25,
      status: "active",
      orders: 18,
      image: "/src/assets/hero-artisan.jpg"
    },
    {
      id: 2,
      name: "Clay Water Pot - Large",
      category: "Terracotta Items", 
      price: 1200,
      stock: 12,
      status: "active",
      orders: 8,
      image: "/src/assets/hero-artisan.jpg"
    },
    {
      id: 3,
      name: "Decorative Terracotta Vase",
      category: "Terracotta Items",
      price: 800,
      stock: 0,
      status: "out_of_stock",
      orders: 15,
      image: "/src/assets/products-collection.jpg"
    }
  ]);

  const stats = {
    totalProducts: products.length,
    activeProducts: products.filter(p => p.status === 'active').length,
    totalOrders: products.reduce((sum, p) => sum + p.orders, 0),
    totalRevenue: products.reduce((sum, p) => sum + (p.price * p.orders), 0)
  };

  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-heritage py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-sanskrit text-3xl font-bold text-white">
                Welcome back, {user?.name}!
              </h1>
              <p className="text-white/90 mt-2">Manage your products and track your sales</p>
            </div>
            <Button asChild className="bg-white text-primary hover:bg-white/90">
              <Link to="/vendor/products/new">
                <Plus className="w-4 h-4 mr-2" />
                Add Product
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Products</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalProducts}</div>
              <p className="text-xs text-muted-foreground">
                {stats.activeProducts} active
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalOrders}</div>
              <p className="text-xs text-muted-foreground">
                Across all products
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹{stats.totalRevenue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                Total earnings
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Products</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeProducts}</div>
              <p className="text-xs text-muted-foreground">
                Currently selling
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Products Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Your Products</CardTitle>
              <Button asChild variant="outline">
                <Link to="/vendor/products">View All</Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {products.map((product) => (
                <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="font-semibold">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">{product.category}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-lg font-bold">₹{product.price.toLocaleString()}</span>
                        <Badge variant={product.status === 'active' ? 'default' : 'destructive'}>
                          {product.status === 'active' ? 'Active' : 'Out of Stock'}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Stock</p>
                      <p className="font-semibold">{product.stock}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Orders</p>
                      <p className="font-semibold">{product.orders}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VendorDashboard;