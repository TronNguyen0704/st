import { Rocket } from "lucide-react";
import { useSidebar } from "./ui/sidebar";
import { cn } from "@/lib/utils";

export function Logo() {
  const { state } = useSidebar();
  return (
    <div className="flex items-center gap-3 p-2">
      <div className="p-2 bg-primary rounded-lg">
        <Rocket className="h-6 w-6 text-primary-foreground" />
      </div>
      <span className={cn(
        "font-semibold text-lg whitespace-nowrap transition-opacity duration-200",
        state === "collapsed" && "opacity-0 hidden"
      )}>
        TechSport Central
      </span>
    </div>
  );
}
