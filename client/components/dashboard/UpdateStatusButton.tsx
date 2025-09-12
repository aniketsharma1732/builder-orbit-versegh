import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Props {
  value: string;
  onChange: (v: string) => void;
}

export default function UpdateStatusButton({ value, onChange }: Props) {
  const statuses = [
    "Unpaid",
    "Paid",
    "Partially Paid",
    "Overdue",
    "Awaited",
    "Disputed",
    "Draft",
  ];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground shadow hover:bg-primary/90">
          Update Status <ChevronDown className="h-3.5 w-3.5" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {statuses.map((s) => (
          <DropdownMenuItem key={s} onClick={() => onChange(s)}>
            {s}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
