import { Bell, Pencil } from "lucide-react";

interface InvoiceItemProps {
  title: string;
  amount: string;
  due: string;
  status: string;
  icon?: "bell" | "pencil" | null;
  rightElement?: React.ReactNode;
}

export default function InvoiceListItem({
  title,
  amount,
  due,
  status,
  icon = null,
  rightElement,
}: InvoiceItemProps) {
  const statusColors: Record<string, string> = {
    Unpaid: "bg-slate-200 text-slate-700",
    Disputed: "bg-rose-100 text-rose-700",
    Paid: "bg-emerald-100 text-emerald-700",
    Partially Paid: "bg-amber-100 text-amber-700",
    Overdue: "bg-rose-200 text-rose-800",
    Awaited: "bg-yellow-100 text-yellow-700",
    Draft: "bg-slate-100 text-slate-600",
  };

  return (
    <div className="p-4 flex justify-between items-center rounded-2xl bg-white shadow">
      <div>
        <p className="font-medium text-sm">{title}</p>
        <p className="text-xs text-gray-500">₹{amount}, Due: {due}</p>
      </div>
      <div className="flex items-center space-x-2">
        {rightElement ? (
          rightElement
        ) : (
          <span className={`px-4 py-3 rounded-full text-xs font-semibold ${statusColors[status] ?? "bg-slate-100 text-slate-700"}`}>
            {status}
          </span>
        )}
        {icon === "bell" && <Bell className="w-4 h-4 text-gray-500" />}
        {icon === "pencil" && <Pencil className="w-4 h-4 text-gray-500" />}
      </div>
    </div>
  );
}
