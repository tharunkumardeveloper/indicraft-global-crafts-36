import { TrendingUp, TrendingDown, DollarSign, Package, Users, ShoppingCart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const VendorAnalytics = () => {
  const analyticsData = {
    revenue: {
      current: 45678,
      previous: 38945,
      change: 17.3
    },
    orders: {
      current: 156,
      previous: 142,
      change: 9.9
    },
    customers: {
      current: 89,
      previous: 76,
      change: 17.1
    },
    products: {
      current: 12,
      previous: 10,
      change: 20.0
    }
  };

  const topProducts = [
    { name: "Traditional Terracotta Diyas Set", sales: 45, revenue: 20250 },
    { name: "Clay Water Pot - Large", sales: 28, revenue: 33600 },
    { name: "Traditional Oil Lamps", sales: 38, revenue: 11400 },
    { name: "Handcrafted Clay Bowls Set", sales: 22, revenue: 14300 },
    { name: "Decorative Terracotta Vase", sales: 18, revenue: 14400 }
  ];

  const monthlyData = [
    { month: "Jan", revenue: 12000, orders: 45 },
    { month: "Feb", revenue: 15000, orders: 52 },
    { month: "Mar", revenue: 18000, orders: 61 },
    { month: "Apr", revenue: 22000, orders: 68 },
    { month: "May", revenue: 25000, orders: 75 },
    { month: "Jun", revenue: 28000, orders: 82 }
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
      <div className="bg-gradient-heritage py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="font-sanskrit text-3xl font-bold text-white">
              Analytics & Insights
            </h1>
            <p className="text-white/90 mt-2">Track your business performance</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Revenue"
            value={analyticsData.revenue.current}
            change={analyticsData.revenue.change}
            icon={DollarSign}
            prefix="₹"
          />
          <StatCard
            title="Total Orders"
            value={analyticsData.orders.current}
            change={analyticsData.orders.change}
            icon={ShoppingCart}
          />
          <StatCard
            title="Customers"
            value={analyticsData.customers.current}
            change={analyticsData.customers.change}
            icon={Users}
          />
          <StatCard
            title="Products"
            value={analyticsData.products.current}
            change={analyticsData.products.change}
            icon={Package}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Monthly Performance */}
          <Card>
            <CardHeader>
              <CardTitle>Monthly Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monthlyData.map((data, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{data.month} 2024</p>
                      <p className="text-sm text-muted-foreground">{data.orders} orders</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">₹{data.revenue.toLocaleString()}</p>
                      <p className="text-sm text-muted-foreground">Revenue</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Products */}
          <Card>
            <CardHeader>
              <CardTitle>Top Selling Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium text-sm">{product.name}</p>
                      <p className="text-xs text-muted-foreground">{product.sales} units sold</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">₹{product.revenue.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">Revenue</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Customer Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Repeat Customers</span>
                  <span className="font-semibold">67%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Avg. Order Value</span>
                  <span className="font-semibold">₹1,245</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Customer Satisfaction</span>
                  <span className="font-semibold">4.8/5</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Inventory Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">In Stock</span>
                  <span className="font-semibold text-green-600">8 products</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Low Stock</span>
                  <span className="font-semibold text-yellow-600">3 products</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Out of Stock</span>
                  <span className="font-semibold text-red-600">1 product</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Performance Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Monthly Revenue Goal</span>
                    <span>78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Orders Target</span>
                    <span>92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Customer Growth</span>
                    <span>65%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VendorAnalytics;