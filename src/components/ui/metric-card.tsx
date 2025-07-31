import { cn } from "@/lib/utils";

interface MetricCardProps {
  label: string;
  value: string | number;
  change?: number;
  changeType?: "positive" | "negative" | "neutral";
  suffix?: string;
  className?: string;
}

const MetricCard = ({ 
  label, 
  value, 
  change, 
  changeType = "neutral", 
  suffix = "",
  className 
}: MetricCardProps) => {
  const formatValue = (val: string | number) => {
    if (typeof val === "number") {
      return val.toLocaleString("en-IN");
    }
    return val;
  };

  const getChangeColor = () => {
    switch (changeType) {
      case "positive":
        return "text-positive";
      case "negative":
        return "text-negative";
      default:
        return "text-neutral";
    }
  };

  return (
    <div className={cn(
      "bg-card border border-card-border rounded-lg p-4 space-y-2",
      className
    )}>
      <p className="text-sm text-muted-foreground font-medium">{label}</p>
      <div className="flex items-baseline space-x-2">
        <span className="text-2xl font-semibold text-foreground">
          {formatValue(value)}
          {suffix && <span className="text-lg text-muted-foreground ml-1">{suffix}</span>}
        </span>
        {change !== undefined && (
          <span className={cn("text-sm font-medium", getChangeColor())}>
            {change > 0 ? "+" : ""}{change}%
          </span>
        )}
      </div>
    </div>
  );
};

export default MetricCard;