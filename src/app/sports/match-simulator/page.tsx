import { Header } from "@/components/header";
import { MatchSimulatorForm } from "./components/match-simulator-form";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Match Simulator | TechSport Pulse",
    description: "Predict game outcomes with our AI-powered simulation tool.",
};

export default function MatchSimulatorPage() {
  return (
    <div className="flex flex-col h-full">
      <Header>
        <h1 className="text-2xl font-bold font-headline">Match Simulator</h1>
      </Header>
      <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-auto">
        <div className="max-w-2xl mx-auto">
          <p className="text-center mb-8 text-muted-foreground">
            Use our AI to predict the outcome of your favorite matches. Enter the teams, sport, and any extra context to get a detailed analysis.
          </p>
          <MatchSimulatorForm />
        </div>
      </main>
    </div>
  );
}
