"use client";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";

export function Header({ children }: { children?: React.ReactNode }) {
  const isMobile = useIsMobile();
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
      {isMobile && <SidebarTrigger />}
      <div className="flex-1">
        {children}
      </div>
    </header>
  );
}
