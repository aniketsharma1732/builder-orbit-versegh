import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  title?: string;
  onBack?: () => void;
  density?: "spacious" | "compact";
}

export default function Header({ title = "Dashboard", onBack, density = "spacious" }: HeaderProps) {
  const isCompact = density === "compact";
  return (
    <header className={cn("relative z-20")}> 
      <div
        className={cn(
          "w-full bg-gradient-to-b from-primary/25 to-primary/10",
          isCompact ? "h-24 rounded-b-2xl" : "h-32 rounded-b-[2rem]",
        )}
      />
      <div className="absolute inset-x-0 top-0 mx-auto max-w-md px-4">
        <div className={cn("flex items-center", isCompact ? "h-14" : "h-16")}> 
          <button
            aria-label="Back"
            onClick={onBack}
            className="flex items-center gap-2 text-sm text-foreground/80"
          >
            <ArrowLeft className={cn(isCompact ? "h-5 w-5" : "h-6 w-6")} />
            <span>Back</span>
          </button>
          <div className="pointer-events-none absolute inset-x-0 text-center">
            <div className={cn("font-bold", isCompact ? "text-base" : "text-lg")}>{title}</div>
          </div>
          <div className="ml-auto">
            <button aria-label="Profile" className={cn("overflow-hidden rounded-full ring-2 ring-white", isCompact ? "h-8 w-8" : "h-9 w-9")}> 
              <img alt="Profile" src="https://i.pravatar.cc/56?img=5" className="h-full w-full object-cover" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
