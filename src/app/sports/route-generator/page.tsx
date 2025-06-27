import { Header } from "@/components/header";
import { RouteGeneratorForm } from "./components/route-generator-form";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Route Generator | TechSport Central",
    description: "Generate personalized running or cycling routes for your next workout.",
};

export default function RouteGeneratorPage() {
  return (
    <div className="flex flex-col h-full">
      <Header>
        <h1 className="text-2xl font-bold font-headline">Route Generator</h1>
      </Header>
      <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-auto">
        <div className="max-w-2xl mx-auto">
          <p className="text-center mb-8 text-muted-foreground">
            Plan your next adventure. Our AI will generate a running or cycling route based on your preferences, complete with GPS coordinates.
          </p>
          <RouteGeneratorForm />
        </div>
      </main>
    </div>
  );
}
