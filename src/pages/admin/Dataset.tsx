import { useState } from "react";
import { ArrowLeft, Download, Filter, Search, Globe, Users, TrendingUp, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";

const Dataset = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Mock ONDC dataset for Indian diaspora
  const diasporaData = [
    {
      id: 1,
      country: "United States",
      region: "North America",
      population: "4.2M",
      purchasingPower: "High",
      topCategories: ["Textiles", "Jewelry", "Spices"],
      avgOrderValue: "$125",
      growthRate: "+15%",
      marketPenetration: "23%"
    },
    {
      id: 2,
      country: "United Kingdom",
      region: "Europe",
      population: "1.8M",
      purchasingPower: "High",
      topCategories: ["Handicrafts", "Textiles", "Tea"],
      avgOrderValue: "$98",
      growthRate: "+12%",
      marketPenetration: "31%"
    },
    {
      id: 3,
      country: "Canada",
      region: "North America",
      population: "1.6M",
      purchasingPower: "High",
      topCategories: ["Textiles", "Spices", "Jewelry"],
      avgOrderValue: "$110",
      growthRate: "+18%",
      marketPenetration: "28%"
    },
    {
      id: 4,
      country: "Australia",
      region: "Oceania",
      population: "720K",
      purchasingPower: "High",
      topCategories: ["Handicrafts", "Spices", "Textiles"],
      avgOrderValue: "$135",
      growthRate: "+22%",
      marketPenetration: "35%"
    },
    {
      id: 5,
      country: "UAE",
      region: "Middle East",
      population: "3.5M",
      purchasingPower: "Very High",
      topCategories: ["Jewelry", "Textiles", "Handicrafts"],
      avgOrderValue: "$180",
      growthRate: "+25%",
      marketPenetration: "42%"
    },
    {
      id: 6,
      country: "Singapore",
      region: "Asia",
      population: "650K",
      purchasingPower: "Very High",
      topCategories: ["Spices", "Textiles", "Tea"],
      avgOrderValue: "$145",
      growthRate: "+20%",
      marketPenetration: "38%"
    },
    {
      id: 7,
      country: "Germany",
      region: "Europe",
      population: "150K",
      purchasingPower: "High",
      topCategories: ["Handicrafts", "Textiles", "Spices"],
      avgOrderValue: "$85",
      growthRate: "+8%",
      marketPenetration: "18%"
    },
    {
      id: 8,
      country: "South Africa",
      region: "Africa",
      population: "1.3M",
      purchasingPower: "Medium",
      topCategories: ["Spices", "Textiles", "Tea"],
      avgOrderValue: "$45",
      growthRate: "+10%",
      marketPenetration: "15%"
    }
  ];

  const summaryStats = {
    totalCountries: diasporaData.length,
    totalPopulation: "13.8M",
    avgGrowthRate: "+16%",
    topMarket: "UAE"
  };

  const filteredData = diasporaData.filter(item => {
    const matchesSearch = item.country.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === "all" || item.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  const regions = [...new Set(diasporaData.map(item => item.region))];

  return (
    <div className="pt-16 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/admin/dashboard">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Link>
            </Button>
            <div>
              <h1 className="font-sanskrit text-3xl font-bold">ONDC Dataset</h1>
              <p className="text-muted-foreground">Indian Diaspora Market Analysis</p>
            </div>
          </div>
          <Button className="bg-gradient-heritage">
            <Download className="w-4 h-4 mr-2" />
            Export Data
          </Button>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Markets</CardTitle>
              <Globe className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{summaryStats.totalCountries}</div>
              <p className="text-xs text-muted-foreground">Countries tracked</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Diaspora Population</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{summaryStats.totalPopulation}</div>
              <p className="text-xs text-muted-foreground">Total population</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Growth Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{summaryStats.avgGrowthRate}</div>
              <p className="text-xs text-muted-foreground">Year over year</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Top Market</CardTitle>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{summaryStats.topMarket}</div>
              <p className="text-xs text-muted-foreground">Highest penetration</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Filters & Search</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search countries..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Select region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Regions</SelectItem>
                  {regions.map((region) => (
                    <SelectItem key={region} value={region}>
                      {region}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Data Table */}
        <Card>
          <CardHeader>
            <CardTitle>Market Data ({filteredData.length} markets)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredData.map((market) => (
                <div key={market.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold">{market.country}</h3>
                        <Badge variant="outline">{market.region}</Badge>
                        <Badge variant={market.purchasingPower === 'Very High' ? 'default' : 'secondary'}>
                          {market.purchasingPower} Power
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Population</p>
                          <p className="font-semibold">{market.population}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Avg Order Value</p>
                          <p className="font-semibold">{market.avgOrderValue}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Growth Rate</p>
                          <p className="font-semibold text-green-600">{market.growthRate}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Market Penetration</p>
                          <p className="font-semibold">{market.marketPenetration}</p>
                        </div>
                      </div>
                    </div>
                    <div className="lg:text-right">
                      <p className="text-sm text-muted-foreground mb-2">Top Categories</p>
                      <div className="flex flex-wrap lg:justify-end gap-1">
                        {market.topCategories.map((category, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {category}
                          </Badge>
                        ))}
                      </div>
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

export default Dataset;