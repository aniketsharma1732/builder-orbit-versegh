import { ArrowLeft, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  title?: string;
  onBack?: () => void;
}

export default function Header({ title = "Dashboard", onBack }: HeaderProps) {
  return (
    <header className="sticky top-0 z-20 mb-2">
      <div className="h-14 w-full bg-gradient-to-b from-primary/20 to-transparent" />
      <div className="absolute inset-x-0 top-0 mx-auto max-w-md px-4">
        <div className="mt-2 flex h-10 items-center justify-between rounded-full bg-white/70 px-3 shadow-md ring-1 ring-black/5 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <button
            aria-label="Back"
            onClick={onBack}
            className={cn(
              "flex items-center gap-1 text-sm text-foreground/80 transition-colors hover:text-foreground"
            )}
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </button>
          <div className="text-sm font-semibold">{title}</div>
          <button aria-label="Profile" className="h-7 w-7 overflow-hidden rounded-full ring-2 ring-white">
            <img
              alt="Profile"
              src="https://i.pravatar.cc/56?img=5"
              className="h-full w-full object-cover"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
