import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Search, Filter, SortAsc } from "lucide-react";
import { searchStocks, stocksData } from "@/data/stockData";
import CompanyCard from "@/components/CompanyCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [sortBy, setSortBy] = useState("marketCap");
  const [filterBy, setFilterBy] = useState("all");
  const [results, setResults] = useState(stocksData);

  const industries = [...new Set(stocksData.map(stock => stock.industry))];

  useEffect(() => {
    const query = searchParams.get("q") || "";
    setSearchQuery(query);
    performSearch(query, sortBy, filterBy);
  }, [searchParams, sortBy, filterBy]);

  const performSearch = (query: string, sort: string, filter: string) => {
    let filtered = searchStocks(query);
    
    // Apply industry filter
    if (filter !== "all") {
      filtered = filtered.filter(stock => stock.industry === filter);
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sort) {
        case "marketCap":
          return parseFloat(b.marketCap.replace(/[₹,\s]/g, "")) - parseFloat(a.marketCap.replace(/[₹,\s]/g, ""));
        case "price":
          return b.currentPrice - a.currentPrice;
        case "pe":
          return a.pe - b.pe;
        case "roe":
          return b.roe - a.roe;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    setResults(filtered);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (searchQuery.trim()) {
      params.set("q", searchQuery.trim());
    } else {
      params.delete("q");
    }
    setSearchParams(params);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
  };

  const handleFilterChange = (value: string) => {
    setFilterBy(value);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Stock Search</h1>
              <p className="text-muted-foreground mt-1">
                {searchQuery ? `Results for "${searchQuery}"` : "Browse all companies"}
              </p>
            </div>
            <Link to="/">
              <Button variant="outline">Back to Home</Button>
            </Link>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="mb-6">
            <div className="relative max-w-2xl">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search companies, tickers, or industries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 h-12"
              />
              <Button 
                type="submit" 
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8"
              >
                Search
              </Button>
            </div>
          </form>

          {/* Filters and Sorting */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex gap-4 items-center">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <Select value={filterBy} onValueChange={handleFilterChange}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Industries</SelectItem>
                    {industries.map(industry => (
                      <SelectItem key={industry} value={industry}>
                        {industry}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <SortAsc className="w-4 h-4 text-muted-foreground" />
                <Select value={sortBy} onValueChange={handleSortChange}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="marketCap">Market Cap</SelectItem>
                    <SelectItem value="price">Price</SelectItem>
                    <SelectItem value="pe">P/E Ratio</SelectItem>
                    <SelectItem value="roe">ROE</SelectItem>
                    <SelectItem value="name">Company Name</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              {results.length} {results.length === 1 ? "company" : "companies"} found
            </div>
          </div>
        </div>

        {/* Results */}
        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((stock) => (
              <CompanyCard key={stock.id} stock={stock} showFullDetails={true} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No Results Found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <Button onClick={() => {
              setSearchQuery("");
              setFilterBy("all");
              const params = new URLSearchParams();
              setSearchParams(params);
            }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;