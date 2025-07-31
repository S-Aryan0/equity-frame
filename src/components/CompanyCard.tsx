import { Link } from "react-router-dom";
import { TrendingUp, TrendingDown } from "lucide-react";
import { StockData } from "@/data/stockData";
import { Card, CardContent } from "@/components/ui/card";

interface CompanyCardProps {
  stock: StockData;
  showFullDetails?: boolean;
}

const CompanyCard = ({ stock, showFullDetails = false }: CompanyCardProps) => {
  const priceChange = Math.random() > 0.5 ? 1 : -1; // Random for demo
  const changePercent = (Math.random() * 5).toFixed(2);

  return (
    <Card className="hover:shadow-md transition-shadow border-card-border">
      <CardContent className="p-6">
        <Link to={`/company/${stock.id}`} className="block">
          <div className="space-y-3">
            {/* Header */}
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg text-foreground hover:text-primary transition-colors">
                  {stock.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {stock.ticker} • {stock.industry}
                </p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-foreground">
                  ₹{stock.currentPrice.toLocaleString("en-IN")}
                </p>
                <div className={`flex items-center text-sm ${
                  priceChange > 0 ? "text-positive" : "text-negative"
                }`}>
                  {priceChange > 0 ? (
                    <TrendingUp className="w-3 h-3 mr-1" />
                  ) : (
                    <TrendingDown className="w-3 h-3 mr-1" />
                  )}
                  {priceChange > 0 ? "+" : ""}{changePercent}%
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-muted-foreground">Market Cap</p>
                <p className="text-sm font-medium text-foreground">{stock.marketCap}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">P/E Ratio</p>
                <p className="text-sm font-medium text-foreground">{stock.pe}</p>
              </div>
              {showFullDetails && (
                <>
                  <div>
                    <p className="text-xs text-muted-foreground">ROE</p>
                    <p className="text-sm font-medium text-foreground">{stock.roe}%</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">ROCE</p>
                    <p className="text-sm font-medium text-foreground">{stock.roce}%</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
};

export default CompanyCard;