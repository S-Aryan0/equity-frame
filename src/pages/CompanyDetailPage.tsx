import { useParams, Link } from "react-router-dom";
import { ArrowLeft, TrendingUp, TrendingDown, ExternalLink, Download } from "lucide-react";
import { getStockById } from "@/data/stockData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MetricCard from "@/components/ui/metric-card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar
} from "recharts";

const CompanyDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const stock = id ? getStockById(id) : null;

  if (!stock) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Company Not Found</h1>
          <p className="text-muted-foreground mb-6">The requested company could not be found.</p>
          <Link to="/">
            <Button>Return to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const priceChange = Math.random() > 0.5 ? 1 : -1; // Random for demo
  const changePercent = (Math.random() * 5).toFixed(2);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <Link to="/search">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Search
              </Button>
            </Link>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Download Report
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <h1 className="text-4xl font-bold text-foreground mb-2">{stock.name}</h1>
                <div className="flex items-center space-x-4 text-muted-foreground">
                  <span className="text-lg font-medium">{stock.ticker}</span>
                  <span>•</span>
                  <span>{stock.industry}</span>
                  <span>•</span>
                  <span>NSE</span>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div>
                  <p className="text-3xl font-bold text-foreground">
                    ₹{stock.currentPrice.toLocaleString("en-IN")}
                  </p>
                  <div className={`flex items-center text-sm ${
                    priceChange > 0 ? "text-positive" : "text-negative"
                  }`}>
                    {priceChange > 0 ? (
                      <TrendingUp className="w-4 h-4 mr-1" />
                    ) : (
                      <TrendingDown className="w-4 h-4 mr-1" />
                    )}
                    {priceChange > 0 ? "+" : ""}{changePercent}% today
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <Card className="border-card-border">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <Button className="w-full" size="lg">
                      Add to Watchlist
                    </Button>
                    <Button variant="outline" className="w-full" size="lg">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View on NSE
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          <MetricCard 
            label="Market Cap" 
            value={stock.marketCap} 
          />
          <MetricCard 
            label="P/E Ratio" 
            value={stock.pe} 
          />
          <MetricCard 
            label="Book Value" 
            value={stock.bookValue}
            suffix="₹"
          />
          <MetricCard 
            label="ROE" 
            value={stock.roe}
            suffix="%"
            changeType="positive"
          />
          <MetricCard 
            label="ROCE" 
            value={stock.roce}
            suffix="%"
            changeType="positive"
          />
          <MetricCard 
            label="Dividend Yield" 
            value={stock.dividendYield}
            suffix="%"
          />
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="financials">Financials</TabsTrigger>
            <TabsTrigger value="ratios">Ratios</TabsTrigger>
            <TabsTrigger value="charts">Charts</TabsTrigger>
            <TabsTrigger value="news">News</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Financial Highlights */}
              <Card className="border-card-border">
                <CardHeader>
                  <CardTitle>Financial Highlights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <MetricCard 
                      label="Revenue" 
                      value={stock.revenue} 
                      change={stock.financialHighlights.revenueGrowth}
                      changeType="positive"
                    />
                    <MetricCard 
                      label="Profit" 
                      value={stock.profit} 
                      change={stock.profitGrowth}
                      changeType="positive"
                    />
                    <MetricCard 
                      label="Profit Margin" 
                      value={stock.financialHighlights.profitMargin}
                      suffix="%"
                    />
                    <MetricCard 
                      label="Working Capital" 
                      value={stock.financialHighlights.workingCapital} 
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Company Info */}
              <Card className="border-card-border">
                <CardHeader>
                  <CardTitle>Company Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Industry</h4>
                    <p className="text-muted-foreground">{stock.industry}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Recent Announcements</h4>
                    <ul className="space-y-2">
                      {stock.recentAnnouncements.map((announcement, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {announcement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="financials" className="space-y-6">
            <Card className="border-card-border">
              <CardHeader>
                <CardTitle>Financial Statement Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-2 font-medium text-muted-foreground">Particulars</th>
                        {stock.yearlyData.map((year) => (
                          <th key={year.year} className="text-right py-3 px-2 font-medium text-muted-foreground">
                            {year.year}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="py-3 px-2 font-medium text-foreground">Revenue (₹ Cr)</td>
                        {stock.yearlyData.map((year) => (
                          <td key={year.year} className="text-right py-3 px-2 text-foreground">
                            {year.revenue.toLocaleString("en-IN")}
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 px-2 font-medium text-foreground">Profit (₹ Cr)</td>
                        {stock.yearlyData.map((year) => (
                          <td key={year.year} className="text-right py-3 px-2 text-foreground">
                            {year.profit.toLocaleString("en-IN")}
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 px-2 font-medium text-foreground">ROCE (%)</td>
                        {stock.yearlyData.map((year) => (
                          <td key={year.year} className="text-right py-3 px-2 text-foreground">
                            {year.roce}%
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="py-3 px-2 font-medium text-foreground">ROE (%)</td>
                        {stock.yearlyData.map((year) => (
                          <td key={year.year} className="text-right py-3 px-2 text-foreground">
                            {year.roe}%
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ratios" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Profitability Ratios */}
              <Card className="border-card-border">
                <CardHeader>
                  <CardTitle className="text-lg">Profitability Ratios</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <MetricCard label="ROE" value={stock.roe} suffix="%" />
                  <MetricCard label="ROCE" value={stock.roce} suffix="%" />
                  <MetricCard label="Profit Margin" value={stock.financialHighlights.profitMargin} suffix="%" />
                  <MetricCard label="ROA" value={stock.financialHighlights.returnOnAssets} suffix="%" />
                </CardContent>
              </Card>

              {/* Valuation Ratios */}
              <Card className="border-card-border">
                <CardHeader>
                  <CardTitle className="text-lg">Valuation Ratios</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <MetricCard label="P/E Ratio" value={stock.pe} />
                  <MetricCard label="P/B Ratio" value={stock.priceToBook} />
                  <MetricCard label="PEG Ratio" value={stock.pegRatio} />
                  <MetricCard label="EPS" value={stock.eps} suffix="₹" />
                </CardContent>
              </Card>

              {/* Efficiency Ratios */}
              <Card className="border-card-border">
                <CardHeader>
                  <CardTitle className="text-lg">Efficiency Ratios</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <MetricCard label="Debt to Equity" value={stock.debtToEquity} />
                  <MetricCard label="Current Ratio" value={stock.currentRatio} />
                  <MetricCard label="Sales Growth" value={stock.salesGrowth} suffix="%" />
                  <MetricCard label="Profit Growth" value={stock.profitGrowth} suffix="%" />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="charts" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Revenue Chart */}
              <Card className="border-card-border">
                <CardHeader>
                  <CardTitle>Revenue Trend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={stock.yearlyData}>
                        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                        <XAxis dataKey="year" className="text-muted-foreground" />
                        <YAxis className="text-muted-foreground" />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'hsl(var(--card))', 
                            border: '1px solid hsl(var(--border))',
                            borderRadius: '6px'
                          }} 
                        />
                        <Line 
                          type="monotone" 
                          dataKey="revenue" 
                          stroke="hsl(var(--chart-1))" 
                          strokeWidth={3}
                          dot={{ fill: 'hsl(var(--chart-1))', strokeWidth: 2, r: 4 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Profit Chart */}
              <Card className="border-card-border">
                <CardHeader>
                  <CardTitle>Profit Trend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={stock.yearlyData}>
                        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                        <XAxis dataKey="year" className="text-muted-foreground" />
                        <YAxis className="text-muted-foreground" />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'hsl(var(--card))', 
                            border: '1px solid hsl(var(--border))',
                            borderRadius: '6px'
                          }} 
                        />
                        <Bar 
                          dataKey="profit" 
                          fill="hsl(var(--chart-2))" 
                          radius={[4, 4, 0, 0]}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* ROE & ROCE Chart */}
              <Card className="border-card-border lg:col-span-2">
                <CardHeader>
                  <CardTitle>Return Ratios Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={stock.yearlyData}>
                        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                        <XAxis dataKey="year" className="text-muted-foreground" />
                        <YAxis className="text-muted-foreground" />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'hsl(var(--card))', 
                            border: '1px solid hsl(var(--border))',
                            borderRadius: '6px'
                          }} 
                        />
                        <Line 
                          type="monotone" 
                          dataKey="roe" 
                          stroke="hsl(var(--chart-2))" 
                          strokeWidth={3}
                          name="ROE"
                          dot={{ fill: 'hsl(var(--chart-2))', strokeWidth: 2, r: 4 }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="roce" 
                          stroke="hsl(var(--chart-3))" 
                          strokeWidth={3}
                          name="ROCE"
                          dot={{ fill: 'hsl(var(--chart-3))', strokeWidth: 2, r: 4 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="news" className="space-y-6">
            <Card className="border-card-border">
              <CardHeader>
                <CardTitle>Recent Announcements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {stock.recentAnnouncements.map((announcement, index) => (
                    <div key={index} className="border-b border-border last:border-0 pb-4 last:pb-0">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <div className="flex-1">
                          <p className="text-foreground">{announcement}</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            {new Date().toLocaleDateString("en-IN")}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CompanyDetailPage;