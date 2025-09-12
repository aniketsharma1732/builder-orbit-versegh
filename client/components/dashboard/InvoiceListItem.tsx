import { Bell, Pencil } from "lucide-react";
import StatusPill from "./StatusPill";

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
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div>
        <div className="text-sm font-medium text-foreground/90">{title}</div>
        <div className="mt-1 text-xs text-muted-foreground">
          ₹{amount}, Due: {due}
        </div>
      </div>
      <div className="flex items-center gap-3">
        {rightElement ? (
          rightElement
        ) : (
          <>
            <StatusPill status={status} />
            {icon === "bell" && (
              <Bell className="h-4 w-4 text-muted-foreground" />
            )}
            {icon === "pencil" && (
              <Pencil className="h-4 w-4 text-muted-foreground" />
            )}
          </>
        )}
      </div>
    </div>
  );
}
