import { cn } from "@/lib/utils";

const STATUS_STYLES: Record<string, string> = {
  Unpaid: "bg-slate-200 text-slate-700",
  Disputed: "bg-rose-100 text-rose-700",
  Paid: "bg-emerald-100 text-emerald-700",
  "Partially Paid": "bg-amber-100 text-amber-700",
  Overdue: "bg-rose-200 text-rose-800",
  Awaited: "bg-yellow-100 text-yellow-700",
  Draft: "bg-slate-100 text-slate-600",
};

export default function StatusPill({ status }: { status: keyof typeof STATUS_STYLES | string }) {
  const cls = STATUS_STYLES[status] ?? "bg-slate-100 text-slate-700";
  return (
    <span className={cn("inline-flex items-center rounded-full px-3 py-1 text-xs font-medium", cls)}>
      {status}
    </span>
  );
}
