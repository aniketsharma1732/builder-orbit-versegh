import { Calendar, Crown } from "lucide-react";

interface PeriodSelectorProps {
  active: "1M" | "3M" | "1Y";
  onChange: (v: "1M" | "3M" | "1Y") => void;
}

export default function PeriodSelector({
  active,
  onChange,
}: PeriodSelectorProps) {
  const base = "rounded-full px-3 py-1.5 text-xs border flex items-center";
  const off = "bg-white text-foreground/80 border-slate-200";
  const on = "bg-primary/10 text-primary border-primary/30";

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <div>Time Period</div>
        <div>dd:mm:yyyy - dd:mm:yyyy</div>
      </div>

      {/* First row */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          className={`${base} ${active === "1M" ? on : off}`}
          onClick={() => onChange("1M")}
        >
          1Month
        </button>
        <button
          className={`${base} ${active === "3M" ? on : off}`}
          onClick={() => onChange("3M")}
        >
          3Months
        </button>
        <button
          className={`${base} ${active === "1Y" ? on : off}`}
          onClick={() => onChange("1Y")}
        >
          1Year
          <span className="ml-1 inline-block">
            <Crown className="h-3.5 w-3.5" />
          </span>
        </button>
      </div>

      {/* Second row */}
      <div className="flex items-center gap-2">
        <button className={`${base} ${off}`}>
          <Calendar className="mr-1 h-3.5 w-3.5" />
          Custom
        </button>
      </div>
    </div>
  );
}
