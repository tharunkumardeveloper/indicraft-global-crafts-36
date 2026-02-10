import { useState } from "react";
import { Search, Filter, Eye, Edit, Trash2, UserPlus, Users, Store, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";

const AdminUsers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const users = [
    {
      id: 1,
      name: "Priya Sharma",
      email: "priya@example.com",
      role: "customer",
      status: "active",
      joinDate: "2024-01-15",
      lastLogin: "2024-01-20",
      orders: 12,
      totalSpent: 15600
    },
    {
      id: 2,
      name: "Ravi Kumar",
      email: "ravi@pottery.com",
      role: "vendor",
      status: "active",
      joinDate: "2023-11-20",
      lastLogin: "2024-01-19",
      products: 12,
      totalSales: 45600
    },
    {
      id: 3,
      name: "Anita Patel",
      email: "anita@example.com",
      role: "customer",
      status: "active",
      joinDate: "2024-01-10",
      lastLogin: "2024-01-18",
      orders: 8,
      totalSpent: 9800
    },
    {
      id: 4,
      name: "Meera Textiles",
      email: "meera@textiles.com",
      role: "vendor",
      status: "pending",
      joinDate: "2024-01-18",
      lastLogin: "2024-01-18",
      products: 0,
      totalSales: 0
    },
    {
      id: 5,
      name: "Rajesh Singh",
      email: "rajesh@example.com",
      role: "customer",
      status: "suspended",
      joinDate: "2023-12-05",
      lastLogin: "2024-01-10",
      orders: 3,
      totalSpent: 2400
    },
    {
      id: 6,
      name: "Admin User",
      email: "admin@indicraft.com",
      role: "admin",
      status: "active",
      joinDate: "2023-01-01",
      lastLogin: "2024-01-20",
      permissions: "full"
    }
  ];

  const filteredUsers = users.filter(user => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === "all" || user.role === roleFilter;
    const matchesStatus = statusFilter === "all" || user.status === statusFilter;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const getRoleBadge = (role: string) => {
    const roleConfig = {
      customer: { color: "bg-blue-100 text-blue-800", icon: Users },
      vendor: { color: "bg-green-100 text-green-800", icon: Store },
      admin: { color: "bg-red-100 text-red-800", icon: Shield }
    };

    const config = roleConfig[role as keyof typeof roleConfig];
    const Icon = config?.icon;

    return (
      <Badge className={config?.color || "bg-gray-100 text-gray-800"}>
        {Icon && <Icon className="w-3 h-3 mr-1" />}
        {role.charAt(0).toUpperCase() + role.slice(1)}
      </Badge>
    );
  };

  const getStatusBadge = (status: string) => {
    const statusColors = {
      active: "bg-green-100 text-green-800",
      pending: "bg-yellow-100 text-yellow-800",
      suspended: "bg-red-100 text-red-800",
      inactive: "bg-gray-100 text-gray-800"
    };

    return (
      <Badge className={statusColors[status as keyof typeof statusColors] || "bg-gray-100 text-gray-800"}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  const getUserStats = () => {
    return {
      total: users.length,
      customers: users.filter(u => u.role === 'customer').length,
      vendors: users.filter(u => u.role === 'vendor').length,
      admins: users.filter(u => u.role === 'admin').length,
      active: users.filter(u => u.status === 'active').length,
      pending: users.filter(u => u.status === 'pending').length
    };
  };

  const stats = getUserStats();

  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-sanskrit text-3xl font-bold text-white">
                User Management
              </h1>
              <p className="text-white/90 mt-2">Manage customers, vendors, and administrators</p>
            </div>
            <Button className="bg-white text-slate-900 hover:bg-white/90">
              <UserPlus className="w-4 h-4 mr-2" />
              Add User
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold">{stats.total}</div>
              <p className="text-sm text-muted-foreground">Total Users</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{stats.customers}</div>
              <p className="text-sm text-muted-foreground">Customers</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{stats.vendors}</div>
              <p className="text-sm text-muted-foreground">Vendors</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-red-600">{stats.admins}</div>
              <p className="text-sm text-muted-foreground">Admins</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{stats.active}</div>
              <p className="text-sm text-muted-foreground">Active</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-yellow-600">{stats.pending}</div>
              <p className="text-sm text-muted-foreground">Pending</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Search & Filter Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search by name or email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={roleFilter} onValueChange={setRoleFilter}>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Filter by role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Roles</SelectItem>
                  <SelectItem value="customer">Customer</SelectItem>
                  <SelectItem value="vendor">Vendor</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="suspended">Suspended</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Users Table */}
        <Card>
          <CardHeader>
            <CardTitle>Users ({filteredUsers.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredUsers.map((user) => (
                <div key={user.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-semibold">{user.name}</h3>
                          <p className="text-sm text-muted-foreground">{user.email}</p>
                        </div>
                        {getRoleBadge(user.role)}
                        {getStatusBadge(user.status)}
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mt-3">
                        <div>
                          <p className="text-muted-foreground">Joined</p>
                          <p className="font-medium">{new Date(user.joinDate).toLocaleDateString()}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Last Login</p>
                          <p className="font-medium">{new Date(user.lastLogin).toLocaleDateString()}</p>
                        </div>
                        {user.role === 'customer' && (
                          <>
                            <div>
                              <p className="text-muted-foreground">Orders</p>
                              <p className="font-medium">{user.orders}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Total Spent</p>
                              <p className="font-medium">₹{user.totalSpent?.toLocaleString()}</p>
                            </div>
                          </>
                        )}
                        {user.role === 'vendor' && (
                          <>
                            <div>
                              <p className="text-muted-foreground">Products</p>
                              <p className="font-medium">{user.products}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Total Sales</p>
                              <p className="font-medium">₹{user.totalSales?.toLocaleString()}</p>
                            </div>
                          </>
                        )}
                        {user.role === 'admin' && (
                          <div>
                            <p className="text-muted-foreground">Permissions</p>
                            <p className="font-medium capitalize">{user.permissions}</p>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4 mr-1" />
                        Edit
                      </Button>
                      {user.role !== 'admin' && (
                        <Button variant="outline" size="sm">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {filteredUsers.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Users className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No users found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filters
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AdminUsers;