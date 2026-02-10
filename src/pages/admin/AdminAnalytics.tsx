import { TrendingUp, TrendingDown, Users, Package, DollarSign, Globe, ShoppingCart, Store } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const AdminAnalytics = () => {
  const globalStats = {
    totalRevenue: { current: 2847650, previous: 2456780, change: 15.9 },
    totalUsers: { current: 2847, previous: 2456, change: 15.9 },
    totalOrders: { current: 1234, previous: 1089, change: 13.3 },
    activeVendors: { current: 156, previous: 142, change: 9.9 }
  };

  const regionData = [
    { region: "North America", users: "1.2M", revenue: "₹45.6L", growth: "+18%" },
    { region: "Europe", users: "890K", revenue: "₹32.4L", growth: "+15%" },
    { region: "Middle East", users: "650K", revenue: "₹28.9L", growth: "+22%" },
    { region: "Asia Pacific", users: "420K", revenue: "₹18.7L", growth: "+12%" },
    { region: "Others", users: "180K", revenue: "₹8.2L", growth: "+8%" }
  ];

  const topCategories = [
    { category: "Handwoven Sarees", sales: 456, revenue: 2845600, growth: "+25%" },
    { category: "Terracotta Items", sales: 342, revenue: 1567800, growth: "+18%" },
    { category: "Brass Puja Items", sales: 289, revenue: 1234500, growth: "+22%" },
    { category: "Wooden Toys", sales: 234, revenue: 987600, growth: "+15%" },
    { category: "Block-printed Scarves", sales: 198, revenue: 765400, growth: "+12%" }
  ];

  const vendorPerformance = [
    { name: "Ravi's Traditional Pottery", revenue: 156780, orders: 89, rating: 4.9 },
    { name: "Meera's Handloom", revenue: 234560, orders: 124, rating: 4.8 },
    { name: "Artisan Crafts Co.", revenue: 189450, orders: 98, rating: 4.7 },
    { name: "Heritage Textiles", revenue: 167890, orders: 87, rating: 4.8 },
    { name: "Traditional Brass Works", revenue: 145670, orders: 76, rating: 4.6 }
  ];

  const StatCard = ({ title, value, change, icon: Icon, prefix = "" }: any) => (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{prefix}{value.toLocaleString()}</div>
        <div className="flex items-center text-xs">
          {change > 0 ? (
            <TrendingUp className="h-3 w-3 text-green-600 mr-1" />
          ) : (
            <TrendingDown className="h-3 w-3 text-red-600 mr-1" />
          )}
          <span className={change > 0 ? "text-green-600" : "text-red-600"}>
            {Math.abs(change)}% from last month
          </span>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-sanskrit text-3xl font-bold text-white">
                Global Analytics
              </h1>
              <p className="text-white/90 mt-2">Comprehensive platform insights and trends</p>
            </div>
            <div className="flex space-x-4">
              <Link to="/admin/dataset">
                <button className="bg-white text-slate-900 hover:bg-white/90 px-4 py-2 rounded-md font-medium">
                  View Dataset
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Global Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Revenue"
            value={globalStats.totalRevenue.current}
            change={globalStats.totalRevenue.change}
            icon={DollarSign}
            prefix="₹"
          />
          <StatCard
            title="Total Users"
            value={globalStats.totalUsers.current}
            change={globalStats.totalUsers.change}
            icon={Users}
          />
          <StatCard
            title="Total Orders"
            value={globalStats.totalOrders.current}
            change={globalStats.totalOrders.change}
            icon={ShoppingCart}
          />
          <StatCard
            title="Active Vendors"
            value={globalStats.activeVendors.current}
            change={globalStats.activeVendors.change}
            icon={Store}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Regional Performance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                Regional Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {regionData.map((region, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{region.region}</p>
                      <p className="text-sm text-muted-foreground">{region.users} users</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{region.revenue}</p>
                      <p className="text-sm text-green-600">{region.growth}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Categories */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Package className="w-5 h-5 mr-2" />
                Top Categories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topCategories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{category.category}</p>
                      <p className="text-sm text-muted-foreground">{category.sales} sales</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">₹{(category.revenue / 100000).toFixed(1)}L</p>
                      <p className="text-sm text-green-600">{category.growth}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Vendor Performance */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Top Performing Vendors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {vendorPerformance.map((vendor, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {vendor.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium">{vendor.name}</p>
                      <p className="text-sm text-muted-foreground">{vendor.orders} orders</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">₹{vendor.revenue.toLocaleString()}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span className="text-yellow-500">★</span>
                      <span className="ml-1">{vendor.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Additional Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Customer Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Avg. Order Value</span>
                  <span className="font-semibold">₹2,345</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Customer Retention</span>
                  <span className="font-semibold">78%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Repeat Purchase Rate</span>
                  <span className="font-semibold">65%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Customer Satisfaction</span>
                  <span className="font-semibold">4.7/5</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Platform Health</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">System Uptime</span>
                  <span className="font-semibold text-green-600">99.9%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">API Response Time</span>
                  <span className="font-semibold">145ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Error Rate</span>
                  <span className="font-semibold text-green-600">0.02%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Active Sessions</span>
                  <span className="font-semibold">1,234</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Growth Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Monthly Growth</span>
                  <span className="font-semibold text-green-600">+15.9%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">New Vendors</span>
                  <span className="font-semibold">+12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">New Customers</span>
                  <span className="font-semibold">+456</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Market Expansion</span>
                  <span className="font-semibold">+3 regions</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;