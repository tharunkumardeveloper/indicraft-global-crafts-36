import { TrendingUp, Globe, ShoppingBag, Users, DollarSign, Clock, Star, Award, Package, CreditCard } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const BuyerPatterns = () => {
    const regionalBuyers = [
        { region: "North America", buyers: 3250, growth: "+45%", topBuyer: "Priya Sharma", avgOrder: "$245", flag: "🇺🇸" },
        { region: "Europe", buyers: 2890, growth: "+38%", topBuyer: "Rajesh Kumar", avgOrder: "$198", flag: "🇪🇺" },
        { region: "Asia Pacific", buyers: 4120, growth: "+52%", topBuyer: "Ananya Patel", avgOrder: "$167", flag: "🇯🇵" },
        { region: "Middle East", buyers: 1560, growth: "+41%", topBuyer: "Vikram Singh", avgOrder: "$312", flag: "🇦🇪" },
        { region: "Australia", buyers: 980, growth: "+29%", topBuyer: "Meera Reddy", avgOrder: "$223", flag: "🇦🇺" },
        { region: "South America", buyers: 720, growth: "+35%", topBuyer: "Arjun Desai", avgOrder: "$189", flag: "🇧🇷" },
    ];

    const topBuyers = [
        { name: "Priya Sharma", country: "USA", orders: 127, spent: "$31,115", category: "Textiles", avatar: "PS" },
        { name: "Rajesh Kumar", country: "UK", orders: 98, spent: "$19,404", category: "Pottery", avatar: "RK" },
        { name: "Ananya Patel", country: "Singapore", orders: 156, spent: "$26,052", category: "Jewelry", avatar: "AP" },
        { name: "Vikram Singh", country: "UAE", orders: 89, spent: "$27,768", category: "Textiles", avatar: "VS" },
        { name: "Meera Reddy", country: "Australia", orders: 74, spent: "$16,502", category: "Home Decor", avatar: "MR" },
        { name: "Arjun Desai", country: "Brazil", orders: 63, spent: "$11,907", category: "Handicrafts", avatar: "AD" },
        { name: "Kavya Iyer", country: "Canada", orders: 91, spent: "$22,295", category: "Textiles", avatar: "KI" },
        { name: "Rohan Malhotra", country: "Germany", orders: 82, spent: "$16,236", category: "Jewelry", avatar: "RM" },
    ];

    const categoryTrends = [
        { category: "Handloom Textiles", percentage: 34, buyers: 4230, color: "bg-orange-500" },
        { category: "Jewelry & Accessories", percentage: 28, buyers: 3520, color: "bg-yellow-500" },
        { category: "Home Decor", percentage: 18, buyers: 2260, color: "bg-green-500" },
        { category: "Pottery & Ceramics", percentage: 12, buyers: 1510, color: "bg-blue-500" },
        { category: "Handicrafts", percentage: 8, buyers: 1005, color: "bg-purple-500" },
    ];

    const purchasePatterns = [
        { time: "Morning (6AM-12PM)", percentage: 18, icon: "🌅" },
        { time: "Afternoon (12PM-6PM)", percentage: 42, icon: "☀️" },
        { time: "Evening (6PM-10PM)", percentage: 31, icon: "🌆" },
        { time: "Night (10PM-6AM)", percentage: 9, icon: "🌙" },
    ];

    const demographics = [
        { ageGroup: "18-25", percentage: 15, buyers: 1890 },
        { ageGroup: "26-35", percentage: 38, buyers: 4788 },
        { ageGroup: "36-45", percentage: 28, buyers: 3528 },
        { ageGroup: "46-55", percentage: 14, buyers: 1764 },
        { ageGroup: "56+", percentage: 5, buyers: 630 },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 pt-20 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <TrendingUp className="w-10 h-10 text-orange-600" />
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Global Buyer Patterns</h1>
                    </div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Comprehensive insights into our worldwide customer base and their purchasing behaviors
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    <Card className="border-l-4 border-l-orange-500 shadow-lg hover:shadow-xl transition-shadow">
                        <CardContent className="pt-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 font-medium">Total Buyers</p>
                                    <p className="text-3xl font-bold text-gray-900 mt-1">12,520</p>
                                    <Badge className="mt-2 bg-green-100 text-green-700">+42% YoY</Badge>
                                </div>
                                <Users className="w-12 h-12 text-orange-500 opacity-80" />
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border-l-4 border-l-blue-500 shadow-lg hover:shadow-xl transition-shadow">
                        <CardContent className="pt-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 font-medium">Avg Order Value</p>
                                    <p className="text-3xl font-bold text-gray-900 mt-1">$218</p>
                                    <Badge className="mt-2 bg-green-100 text-green-700">+15% MoM</Badge>
                                </div>
                                <DollarSign className="w-12 h-12 text-blue-500 opacity-80" />
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border-l-4 border-l-green-500 shadow-lg hover:shadow-xl transition-shadow">
                        <CardContent className="pt-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 font-medium">Total Orders</p>
                                    <p className="text-3xl font-bold text-gray-900 mt-1">28,450</p>
                                    <Badge className="mt-2 bg-green-100 text-green-700">+38% YoY</Badge>
                                </div>
                                <Package className="w-12 h-12 text-green-500 opacity-80" />
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border-l-4 border-l-purple-500 shadow-lg hover:shadow-xl transition-shadow">
                        <CardContent className="pt-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 font-medium">Repeat Rate</p>
                                    <p className="text-3xl font-bold text-gray-900 mt-1">67%</p>
                                    <Badge className="mt-2 bg-green-100 text-green-700">+8% MoM</Badge>
                                </div>
                                <Award className="w-12 h-12 text-purple-500 opacity-80" />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Card className="mb-12 shadow-xl">
                    <CardHeader className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
                        <CardTitle className="flex items-center gap-2 text-2xl">
                            <Globe className="w-6 h-6" />
                            Regional Buyer Distribution
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {regionalBuyers.map((region, index) => (
                                <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:border-orange-400 transition-all hover:shadow-lg">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-4xl">{region.flag}</span>
                                        <Badge className="bg-green-500 text-white">{region.growth}</Badge>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{region.region}</h3>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-gray-600">Total Buyers:</span>
                                            <span className="font-bold text-gray-900">{region.buyers.toLocaleString()}</span>
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-gray-600">Top Buyer:</span>
                                            <span className="font-semibold text-orange-600">{region.topBuyer}</span>
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-gray-600">Avg Order:</span>
                                            <span className="font-bold text-green-600">{region.avgOrder}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card className="mb-12 shadow-xl">
                    <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                        <CardTitle className="flex items-center gap-2 text-2xl">
                            <Award className="w-6 h-6" />
                            Top Buyers Leaderboard
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {topBuyers.map((buyer, index) => (
                                <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-white to-gray-50 border border-gray-200 hover:border-blue-400 transition-all hover:shadow-md">
                                    <div className="flex-shrink-0">
                                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
                                            {buyer.avatar}
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h4 className="font-bold text-gray-900 truncate">{buyer.name}</h4>
                                            {index < 3 && <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />}
                                        </div>
                                        <p className="text-sm text-gray-600">{buyer.country} • {buyer.category}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-green-600">{buyer.spent}</p>
                                        <p className="text-xs text-gray-500">{buyer.orders} orders</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <Card className="shadow-xl">
                        <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white">
                            <CardTitle className="flex items-center gap-2 text-xl">
                                <ShoppingBag className="w-5 h-5" />
                                Category Preferences
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <div className="space-y-4">
                                {categoryTrends.map((cat, index) => (
                                    <div key={index}>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="font-semibold text-gray-900">{cat.category}</span>
                                            <span className="text-sm font-bold text-gray-700">{cat.percentage}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                            <div className={`${cat.color} h-full rounded-full transition-all duration-500 shadow-sm`} style={{ width: `${cat.percentage}%` }} />
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">{cat.buyers.toLocaleString()} buyers</p>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="shadow-xl">
                        <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                            <CardTitle className="flex items-center gap-2 text-xl">
                                <Clock className="w-5 h-5" />
                                Purchase Time Patterns
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <div className="space-y-6">
                                {purchasePatterns.map((pattern, index) => (
                                    <div key={index} className="relative">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <span className="text-2xl">{pattern.icon}</span>
                                                <span className="font-semibold text-gray-900">{pattern.time}</span>
                                            </div>
                                            <span className="text-lg font-bold text-purple-600">{pattern.percentage}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                                            <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full transition-all duration-500 shadow-sm" style={{ width: `${pattern.percentage}%` }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Card className="shadow-xl">
                    <CardHeader className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                        <CardTitle className="flex items-center gap-2 text-2xl">
                            <Users className="w-6 h-6" />
                            Age Demographics
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                            {demographics.map((demo, index) => (
                                <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 hover:border-orange-400 transition-all hover:shadow-lg">
                                    <div className="text-4xl font-bold text-orange-600 mb-2">{demo.percentage}%</div>
                                    <div className="text-lg font-semibold text-gray-900 mb-1">{demo.ageGroup}</div>
                                    <div className="text-sm text-gray-600">{demo.buyers.toLocaleString()} buyers</div>
                                    <div className="mt-3 w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                                        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 h-full rounded-full" style={{ width: `${demo.percentage}%` }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
                <Card className="mt-12 shadow-xl">
                    <CardHeader className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white">
                        <CardTitle className="flex items-center gap-2 text-2xl">
                            <CreditCard className="w-6 h-6" />
                            Preferred Payment Methods
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {[
                                { method: "Credit Card", percentage: 48, icon: "💳" },
                                { method: "PayPal", percentage: 28, icon: "🅿️" },
                                { method: "Bank Transfer", percentage: 16, icon: "🏦" },
                                { method: "Other", percentage: 8, icon: "💰" },
                            ].map((payment, index) => (
                                <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-lg">
                                    <div className="text-5xl mb-3">{payment.icon}</div>
                                    <div className="text-3xl font-bold text-blue-600 mb-2">{payment.percentage}%</div>
                                    <div className="text-sm font-semibold text-gray-900">{payment.method}</div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default BuyerPatterns;
