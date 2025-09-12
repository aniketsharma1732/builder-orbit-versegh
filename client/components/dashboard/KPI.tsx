import { Card } from "@/components/ui/card";

interface KPIProps {
  label: string;
  value: string;
}

export default function KPI({ label, value }: KPIProps) {
  return (
    <Card className="rounded-2xl border-slate-200 p-4 shadow-sm">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="mt-2 text-xl font-semibold text-primary">{value}</div>
    </Card>
  );
}
