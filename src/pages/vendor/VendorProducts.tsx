import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Search, Filter, Eye, Edit, Trash2, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const VendorProducts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const products = [
    {
      id: 1,
      name: "Traditional Terracotta Diyas Set",
      category: "Terracotta Items",
      price: 450,
      stock: 25,
      status: "active",
      orders: 18,
      image: "/product/traditional terracotta diyas set.webp",
      dateAdded: "2024-01-15"
    },
    {
      id: 2,
      name: "Clay Water Pot - Large",
      category: "Terracotta Items", 
      price: 1200,
      stock: 12,
      status: "active",
      orders: 8,
      image: "/product/terracotta water pot.webp",
      dateAdded: "2024-01-10"
    },
    {
      id: 3,
      name: "Decorative Terracotta Vase",
      category: "Terracotta Items",
      price: 800,
      stock: 0,
      status: "out_of_stock",
      orders: 15,
      image: "/product/decorative terracotta vase.jpg",
      dateAdded: "2024-01-05"
    },
    {
      id: 4,
      name: "Handcrafted Clay Bowls Set",
      category: "Clay Kitchenware",
      price: 650,
      stock: 8,
      status: "low_stock",
      orders: 12,
      image: "/product/clay cooking pot set.webp",
      dateAdded: "2023-12-28"
    },
    {
      id: 5,
      name: "Traditional Oil Lamps",
      category: "Terracotta Items",
      price: 300,
      stock: 35,
      status: "active",
      orders: 25,
      image: "/product/brass diya with stand.webp",
      dateAdded: "2023-12-20"
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || product.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case 'out_of_stock':
        return <Badge variant="destructive">Out of Stock</Badge>;
      case 'low_stock':
        return <Badge className="bg-yellow-100 text-yellow-800">Low Stock</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-heritage py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-sanskrit text-3xl font-bold text-white">
                My Products
              </h1>
              <p className="text-white/90 mt-2">Manage your product catalog</p>
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
        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Search & Filter</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="out_of_stock">Out of Stock</SelectItem>
                  <SelectItem value="low_stock">Low Stock</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2">
                  {getStatusBadge(product.status)}
                </div>
              </div>
              
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg line-clamp-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.category}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">
                      ₹{product.price.toLocaleString()}
                    </span>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Stock</p>
                      <p className="font-semibold">{product.stock}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{product.orders} orders</span>
                    <span>Added {new Date(product.dateAdded).toLocaleDateString()}</span>
                  </div>
                  
                  <div className="flex space-x-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Package className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No products found</h3>
              <p className="text-muted-foreground mb-4">
                {searchTerm || statusFilter !== "all" 
                  ? "Try adjusting your search or filters" 
                  : "Start by adding your first product"}
              </p>
              <Button asChild>
                <Link to="/vendor/products/new">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Product
                </Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default VendorProducts;