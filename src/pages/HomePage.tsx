import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, TrendingUp, Star, BarChart3 } from "lucide-react";
import { stocksData } from "@/data/stockData";
import CompanyCard from "@/components/CompanyCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  
  const featuredStocks = stocksData.slice(0, 6);
  const topPerformers = stocksData.slice(0, 3);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-light to-background py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Professional Stock Analysis
            <span className="block text-primary">Made Simple</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Comprehensive financial analysis and research tools for Indian equity markets. 
            Make informed investment decisions with detailed company insights.
          </p>

          {/* Hero Search */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search for companies, tickers (e.g., RELIANCE, TCS, HDFC)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg h-14 w-full bg-background/80 backdrop-blur-sm"
              />
              <Button 
                type="submit" 
                size="lg"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-10"
              >
                Search
              </Button>
            </div>
          </form>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{stocksData.length}+</div>
              <div className="text-sm text-muted-foreground">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Sectors</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Financial Ratios</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">5Y</div>
              <div className="text-sm text-muted-foreground">Historical Data</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Performers */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Top Performers</h2>
              <p className="text-muted-foreground">Leading companies in the Indian market</p>
            </div>
            <Link to="/search">
              <Button variant="outline" className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4" />
                <span>View All</span>
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topPerformers.map((stock) => (
              <Card key={stock.id} className="border-card-border hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Star className="w-5 h-5 text-warning" />
                    <span className="text-xs text-positive font-medium">TOP PERFORMER</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CompanyCard stock={stock} showFullDetails={true} />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Companies */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Featured Companies</h2>
              <p className="text-muted-foreground">Explore detailed analysis of major Indian corporations</p>
            </div>
            <Link to="/search">
              <Button variant="outline" className="flex items-center space-x-2">
                <BarChart3 className="w-4 h-4" />
                <span>Browse All</span>
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredStocks.map((stock) => (
              <CompanyCard key={stock.id} stock={stock} />
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Comprehensive Financial Analysis
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-card-border">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Financial Ratios</h3>
                <p className="text-muted-foreground">
                  Detailed analysis of profitability, liquidity, and efficiency ratios 
                  to evaluate company performance.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-card-border">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-success-light rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-success" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Growth Trends</h3>
                <p className="text-muted-foreground">
                  Track revenue, profit, and key metric trends over multiple years 
                  with interactive charts.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-card-border">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-warning-light rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Search className="w-6 h-6 text-warning" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Company Research</h3>
                <p className="text-muted-foreground">
                  In-depth company profiles with peer comparison and 
                  shareholding pattern analysis.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;