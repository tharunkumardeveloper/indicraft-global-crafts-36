import { useState } from "react";
import { Search, Filter, Eye, Package, Truck, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const VendorOrders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const orders = [
    {
      id: "ORD-001",
      customerName: "Priya Sharma",
      customerEmail: "priya@example.com",
      products: [
        { name: "Traditional Terracotta Diyas Set", quantity: 2, price: 450 }
      ],
      total: 900,
      status: "pending",
      orderDate: "2024-01-20",
      shippingAddress: "123 MG Road, Bangalore, Karnataka 560001"
    },
    {
      id: "ORD-002",
      customerName: "Rajesh Kumar",
      customerEmail: "rajesh@example.com",
      products: [
        { name: "Clay Water Pot - Large", quantity: 1, price: 1200 },
        { name: "Traditional Oil Lamps", quantity: 3, price: 300 }
      ],
      total: 2100,
      status: "processing",
      orderDate: "2024-01-19",
      shippingAddress: "456 Park Street, Kolkata, West Bengal 700016"
    },
    {
      id: "ORD-003",
      customerName: "Anita Patel",
      customerEmail: "anita@example.com",
      products: [
        { name: "Decorative Terracotta Vase", quantity: 1, price: 800 }
      ],
      total: 800,
      status: "shipped",
      orderDate: "2024-01-18",
      shippingAddress: "789 FC Road, Pune, Maharashtra 411005"
    },
    {
      id: "ORD-004",
      customerName: "Vikram Singh",
      customerEmail: "vikram@example.com",
      products: [
        { name: "Handcrafted Clay Bowls Set", quantity: 2, price: 650 }
      ],
      total: 1300,
      status: "delivered",
      orderDate: "2024-01-15",
      shippingAddress: "321 Connaught Place, New Delhi 110001"
    },
    {
      id: "ORD-005",
      customerName: "Meera Reddy",
      customerEmail: "meera@example.com",
      products: [
        { name: "Traditional Oil Lamps", quantity: 5, price: 300 }
      ],
      total: 1500,
      status: "cancelled",
      orderDate: "2024-01-17",
      shippingAddress: "654 Banjara Hills, Hyderabad, Telangana 500034"
    }
  ];

  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { color: "bg-yellow-100 text-yellow-800", icon: Clock },
      processing: { color: "bg-blue-100 text-blue-800", icon: Package },
      shipped: { color: "bg-purple-100 text-purple-800", icon: Truck },
      delivered: { color: "bg-green-100 text-green-800", icon: CheckCircle },
      cancelled: { color: "bg-red-100 text-red-800", icon: null }
    };

    const config = statusConfig[status as keyof typeof statusConfig];
    const Icon = config?.icon;

    return (
      <Badge className={config?.color || "bg-gray-100 text-gray-800"}>
        {Icon && <Icon className="w-3 h-3 mr-1" />}
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  const getOrderStats = () => {
    return {
      total: orders.length,
      pending: orders.filter(o => o.status === 'pending').length,
      processing: orders.filter(o => o.status === 'processing').length,
      shipped: orders.filter(o => o.status === 'shipped').length,
      delivered: orders.filter(o => o.status === 'delivered').length
    };
  };

  const stats = getOrderStats();

  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-heritage py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="font-sanskrit text-3xl font-bold text-white">
              Order Management
            </h1>
            <p className="text-white/90 mt-2">Track and manage your customer orders</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold">{stats.total}</div>
              <p className="text-sm text-muted-foreground">Total Orders</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-yellow-600">{stats.pending}</div>
              <p className="text-sm text-muted-foreground">Pending</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{stats.processing}</div>
              <p className="text-sm text-muted-foreground">Processing</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">{stats.shipped}</div>
              <p className="text-sm text-muted-foreground">Shipped</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{stats.delivered}</div>
              <p className="text-sm text-muted-foreground">Delivered</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Search & Filter Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search by order ID or customer name..."
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
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="processing">Processing</SelectItem>
                  <SelectItem value="shipped">Shipped</SelectItem>
                  <SelectItem value="delivered">Delivered</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Orders List */}
        <div className="space-y-4">
          {filteredOrders.map((order) => (
            <Card key={order.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-3">
                      <h3 className="text-lg font-semibold">{order.id}</h3>
                      {getStatusBadge(order.status)}
                      <span className="text-sm text-muted-foreground">
                        {new Date(order.orderDate).toLocaleDateString()}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Customer</p>
                        <p className="font-medium">{order.customerName}</p>
                        <p className="text-muted-foreground">{order.customerEmail}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Shipping Address</p>
                        <p className="font-medium">{order.shippingAddress}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <p className="text-muted-foreground text-sm mb-2">Products</p>
                      <div className="space-y-1">
                        {order.products.map((product, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span>{product.name} × {product.quantity}</span>
                            <span>₹{(product.price * product.quantity).toLocaleString()}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:text-right lg:ml-8">
                    <div className="mb-4">
                      <p className="text-muted-foreground text-sm">Total Amount</p>
                      <p className="text-2xl font-bold text-primary">₹{order.total.toLocaleString()}</p>
                    </div>
                    
                    <div className="flex lg:flex-col space-x-2 lg:space-x-0 lg:space-y-2">
                      <Button variant="outline" size="sm" className="flex-1 lg:flex-none">
                        <Eye className="w-4 h-4 mr-1" />
                        View Details
                      </Button>
                      {order.status === 'pending' && (
                        <Button size="sm" className="flex-1 lg:flex-none">
                          <Package className="w-4 h-4 mr-1" />
                          Process Order
                        </Button>
                      )}
                      {order.status === 'processing' && (
                        <Button size="sm" className="flex-1 lg:flex-none">
                          <Truck className="w-4 h-4 mr-1" />
                          Mark as Shipped
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredOrders.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Package className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No orders found</h3>
              <p className="text-muted-foreground">
                {searchTerm || statusFilter !== "all" 
                  ? "Try adjusting your search or filters" 
                  : "You don't have any orders yet"}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default VendorOrders;