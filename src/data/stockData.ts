export interface StockData {
  id: string;
  name: string;
  ticker: string;
  industry: string;
  marketCap: string;
  currentPrice: number;
  pe: number;
  bookValue: number;
  roe: number;
  eps: number;
  dividendYield: number;
  revenue: string;
  profit: string;
  roce: number;
  debtToEquity: number;
  currentRatio: number;
  priceToBook: number;
  pegRatio: number;
  salesGrowth: number;
  profitGrowth: number;
  recentAnnouncements: string[];
  financialHighlights: {
    revenueGrowth: number;
    profitMargin: number;
    returnOnAssets: number;
    workingCapital: string;
  };
  yearlyData: {
    year: string;
    revenue: number;
    profit: number;
    roce: number;
    roe: number;
  }[];
}

export const stocksData: StockData[] = [
  {
    id: "reliance",
    name: "Reliance Industries",
    ticker: "RELIANCE",
    industry: "Oil & Gas",
    marketCap: "₹18,00,000 Cr",
    currentPrice: 2800,
    pe: 24.5,
    bookValue: 1150,
    roe: 12.3,
    eps: 138.5,
    dividendYield: 0.8,
    revenue: "₹8,00,000 Cr",
    profit: "₹80,000 Cr",
    roce: 11.2,
    debtToEquity: 0.35,
    currentRatio: 1.2,
    priceToBook: 2.4,
    pegRatio: 1.8,
    salesGrowth: 15.2,
    profitGrowth: 18.5,
    recentAnnouncements: [
      "Q3 FY24 results declared - Net profit up 12% YoY",
      "New renewable energy project announced",
      "Retail expansion in tier-2 cities"
    ],
    financialHighlights: {
      revenueGrowth: 15.2,
      profitMargin: 10.0,
      returnOnAssets: 8.5,
      workingCapital: "₹45,000 Cr"
    },
    yearlyData: [
      { year: "FY20", revenue: 659651, profit: 53739, roce: 9.8, roe: 10.2 },
      { year: "FY21", revenue: 540432, profit: 49128, roce: 8.5, roe: 9.1 },
      { year: "FY22", revenue: 792756, profit: 60705, roce: 10.1, roe: 11.8 },
      { year: "FY23", revenue: 874433, profit: 73688, roce: 11.2, roe: 12.3 },
      { year: "FY24", revenue: 1004000, profit: 85000, roce: 11.8, roe: 13.1 }
    ]
  },
  {
    id: "tcs",
    name: "Tata Consultancy Services",
    ticker: "TCS",
    industry: "Information Technology",
    marketCap: "₹14,50,000 Cr",
    currentPrice: 3950,
    pe: 28.2,
    bookValue: 85,
    roe: 45.8,
    eps: 140.2,
    dividendYield: 2.1,
    revenue: "₹2,15,000 Cr",
    profit: "₹48,000 Cr",
    roce: 52.3,
    debtToEquity: 0.05,
    currentRatio: 2.8,
    priceToBook: 11.2,
    pegRatio: 2.1,
    salesGrowth: 13.8,
    profitGrowth: 16.2,
    recentAnnouncements: [
      "Q3 FY24 results - Revenue growth of 4.1% YoY",
      "New AI and cloud services expansion",
      "Strategic partnership with Microsoft"
    ],
    financialHighlights: {
      revenueGrowth: 13.8,
      profitMargin: 22.3,
      returnOnAssets: 28.5,
      workingCapital: "₹78,000 Cr"
    },
    yearlyData: [
      { year: "FY20", revenue: 156949, profit: 32430, roce: 45.2, roe: 42.1 },
      { year: "FY21", revenue: 164177, profit: 32430, roce: 46.8, roe: 43.5 },
      { year: "FY22", revenue: 191754, profit: 38327, roce: 48.9, roe: 44.8 },
      { year: "FY23", revenue: 208647, profit: 42867, roce: 51.2, roe: 45.8 },
      { year: "FY24", revenue: 225000, profit: 48000, roce: 52.3, roe: 46.2 }
    ]
  },
  {
    id: "hdfc-bank",
    name: "HDFC Bank",
    ticker: "HDFCBANK",
    industry: "Banking",
    marketCap: "₹11,20,000 Cr",
    currentPrice: 1485,
    pe: 18.5,
    bookValue: 575,
    roe: 17.2,
    eps: 80.3,
    dividendYield: 1.2,
    revenue: "₹1,85,000 Cr",
    profit: "₹58,000 Cr",
    roce: 5.8,
    debtToEquity: 8.2,
    currentRatio: 0.9,
    priceToBook: 2.6,
    pegRatio: 1.2,
    salesGrowth: 19.5,
    profitGrowth: 22.1,
    recentAnnouncements: [
      "Q3 FY24 results - Net profit up 27% YoY",
      "Digital banking initiatives expansion",
      "Rural banking network strengthening"
    ],
    financialHighlights: {
      revenueGrowth: 19.5,
      profitMargin: 31.4,
      returnOnAssets: 2.1,
      workingCapital: "₹12,50,000 Cr"
    },
    yearlyData: [
      { year: "FY20", revenue: 129416, profit: 26257, roce: 4.8, roe: 16.2 },
      { year: "FY21", revenue: 142220, profit: 31116, roce: 5.1, roe: 16.8 },
      { year: "FY22", revenue: 160747, profit: 38031, roce: 5.5, roe: 17.0 },
      { year: "FY23", revenue: 178998, profit: 50203, roce: 5.8, roe: 17.2 },
      { year: "FY24", revenue: 195000, profit: 58000, roce: 6.1, roe: 17.5 }
    ]
  },
  {
    id: "infosys",
    name: "Infosys Limited",
    ticker: "INFY",
    industry: "Information Technology",
    marketCap: "₹6,85,000 Cr",
    currentPrice: 1645,
    pe: 25.8,
    bookValue: 285,
    roe: 28.5,
    eps: 63.8,
    dividendYield: 2.8,
    revenue: "₹1,68,000 Cr",
    profit: "₹27,000 Cr",
    roce: 32.1,
    debtToEquity: 0.08,
    currentRatio: 2.1,
    priceToBook: 5.8,
    pegRatio: 2.3,
    salesGrowth: 12.5,
    profitGrowth: 15.8,
    recentAnnouncements: [
      "Q3 FY24 results - Constant currency revenue growth of 2.0%",
      "Large deal wins in BFSI segment",
      "Acquisition of technology consulting firm"
    ],
    financialHighlights: {
      revenueGrowth: 12.5,
      profitMargin: 16.1,
      returnOnAssets: 18.2,
      workingCapital: "₹45,500 Cr"
    },
    yearlyData: [
      { year: "FY20", revenue: 90791, profit: 16594, roce: 28.5, roe: 26.8 },
      { year: "FY21", revenue: 100472, profit: 16639, roce: 29.2, roe: 27.1 },
      { year: "FY22", revenue: 121641, profit: 22071, roce: 30.8, roe: 28.0 },
      { year: "FY23", revenue: 146767, profit: 24095, roce: 31.5, roe: 28.5 },
      { year: "FY24", revenue: 168000, profit: 27000, roce: 32.1, roe: 29.2 }
    ]
  },
  {
    id: "icici-bank",
    name: "ICICI Bank",
    ticker: "ICICIBANK",
    industry: "Banking",
    marketCap: "₹8,45,000 Cr",
    currentPrice: 1205,
    pe: 16.2,
    bookValue: 485,
    roe: 18.8,
    eps: 74.5,
    dividendYield: 1.1,
    revenue: "₹1,65,000 Cr",
    profit: "₹38,000 Cr",
    roce: 4.9,
    debtToEquity: 7.8,
    currentRatio: 0.8,
    priceToBook: 2.5,
    pegRatio: 1.1,
    salesGrowth: 16.8,
    profitGrowth: 25.2,
    recentAnnouncements: [
      "Q3 FY24 results - Net profit up 14% YoY",
      "Technology infrastructure upgrade",
      "Expansion in international markets"
    ],
    financialHighlights: {
      revenueGrowth: 16.8,
      profitMargin: 23.0,
      returnOnAssets: 1.8,
      workingCapital: "₹9,85,000 Cr"
    },
    yearlyData: [
      { year: "FY20", revenue: 102013, profit: 16431, roce: 3.8, roe: 14.2 },
      { year: "FY21", revenue: 109011, profit: 16193, roce: 4.1, roe: 15.8 },
      { year: "FY22", revenue: 125150, profit: 23339, roce: 4.5, roe: 17.2 },
      { year: "FY23", revenue: 147652, profit: 31257, roce: 4.9, roe: 18.8 },
      { year: "FY24", revenue: 165000, profit: 38000, roce: 5.2, roe: 19.5 }
    ]
  }
];

export const getStockById = (id: string): StockData | undefined => {
  return stocksData.find(stock => stock.id === id);
};

export const searchStocks = (query: string): StockData[] => {
  if (!query) return stocksData;
  
  const lowercaseQuery = query.toLowerCase();
  return stocksData.filter(stock => 
    stock.name.toLowerCase().includes(lowercaseQuery) ||
    stock.ticker.toLowerCase().includes(lowercaseQuery) ||
    stock.industry.toLowerCase().includes(lowercaseQuery)
  );
};