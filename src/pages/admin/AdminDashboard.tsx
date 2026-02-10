import { Link } from "react-router-dom";
import { BarChart3, Users, Package, TrendingUp, Globe, Database, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";

const AdminDashboard = () => {
  const { user } = useAuth();

  const stats = [
    {
      title: "Total Users",
      value: "2,847",
      change: "+12%",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Active Vendors",
      value: "156",
      change: "+8%", 
      icon: Package,
      color: "text-green-600"
    },
    {
      title: "Total Products",
      value: "1,234",
      change: "+15%",
      icon: Package,
      color: "text-purple-600"
    },
    {
      title: "Monthly Revenue",
      value: "₹4,56,789",
      change: "+23%",
      icon: TrendingUp,
      color: "text-orange-600"
    }
  ];

  const quickActions = [
    {
      title: "Buyer Patterns",
      description: "Analyze customer behavior and purchasing patterns",
      icon: BarChart3,
      link: "/buyer-patterns",
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "ONDC Dataset",
      description: "View Indian diaspora and market data",
      icon: Database,
      link: "/admin/dataset",
      color: "bg-green-50 text-green-600"
    },
    {
      title: "Global Analytics",
      description: "International market insights and trends",
      icon: Globe,
      link: "/admin/analytics",
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "User Management",
      description: "Manage customers, vendors, and permissions",
      icon: Users,
      link: "/admin/users",
      color: "bg-orange-50 text-orange-600"
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-sanskrit text-3xl font-bold text-white">
                Admin Dashboard
              </h1>
              <p className="text-white/90 mt-2">Welcome back, {user?.name}</p>
            </div>
            <div className="flex space-x-4">
              <Button variant="secondary" asChild>
                <Link to="/admin/reports">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Generate Report
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-green-600 font-medium">
                    {stat.change} from last month
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Actions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <Link key={index} to={action.link}>
                    <div className="p-4 rounded-lg border hover:shadow-md transition-shadow cursor-pointer">
                      <div className={`w-12 h-12 rounded-lg ${action.color} flex items-center justify-center mb-3`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2">{action.title}</h3>
                      <p className="text-sm text-muted-foreground">{action.description}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Recent Vendor Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Artisan Crafts Co.", status: "pending", date: "2 hours ago" },
                  { name: "Heritage Textiles", status: "approved", date: "1 day ago" },
                  { name: "Clay Works Studio", status: "pending", date: "2 days ago" },
                  { name: "Wooden Wonders", status: "approved", date: "3 days ago" }
                ].map((application, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{application.name}</p>
                      <p className="text-sm text-muted-foreground">{application.date}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        application.status === 'approved' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {application.status}
                      </span>
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>System Health</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { metric: "Server Uptime", value: "99.9%", status: "good" },
                  { metric: "Database Performance", value: "Optimal", status: "good" },
                  { metric: "API Response Time", value: "145ms", status: "good" },
                  { metric: "Storage Usage", value: "67%", status: "warning" }
                ].map((metric, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <span className="font-medium">{metric.metric}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">{metric.value}</span>
                      <div className={`w-3 h-3 rounded-full ${
                        metric.status === 'good' ? 'bg-green-500' : 'bg-yellow-500'
                      }`} />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;