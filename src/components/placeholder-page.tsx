import { Header } from "@/components/header";
import { Construction } from "lucide-react";

export function PlaceholderPage({ title, description }: { title: string; description?: string }) {
  return (
    <div className="flex flex-col h-full">
      <Header>
        <h1 className="text-2xl font-bold font-headline">{title}</h1>
      </Header>
      <main className="flex-1 p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center text-center">
        <div className="p-6 bg-muted rounded-full">
            <Construction className="h-16 w-16 text-muted-foreground" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight mt-6 mb-2">Content Coming Soon!</h2>
        <p className="text-lg text-muted-foreground max-w-md">
          {description || `We're busy building out the ${title} section. Check back soon for exciting updates.`}
        </p>
      </main>
    </div>
  );
}
