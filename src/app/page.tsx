import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Cpu, Dumbbell, Shield, Route } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 font-headline">
            The Future of Tech and Sports, Combined.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Welcome to TechSport Central. Your hub for cutting-edge technology insights and thrilling sports action. Explore, learn, and engage.
          </p>
        </section>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={<Cpu className="h-10 w-10 text-primary" />}
            title="Tech Insights"
            description="Explore AI, Web3, Green Tech, and more. Stay ahead of the curve."
            href="/tech"
            linkText="Dive into Tech"
          />
          <FeatureCard
            icon={<Dumbbell className="h-10 w-10 text-primary" />}
            title="Sports Coverage"
            description="Get the latest on football, tennis, and esports, plus training guides."
            href="/sports"
            linkText="Explore Sports"
          />
          <FeatureCard
            icon={<Shield className="h-10 w-10 text-primary" />}
            title="Match Simulator"
            description="Predict game outcomes with our AI-powered simulation tool."
            href="/sports/match-simulator"
            linkText="Simulate a Match"
          />
          <FeatureCard
            icon={<Route className="h-10 w-10 text-primary" />}
            title="Route Generator"
            description="Create personalized running or cycling routes for your next workout."
            href="/sports/route-generator"
            linkText="Generate a Route"
          />
        </div>
      </main>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  href,
  linkText,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  linkText: string;
}) {
  return (
    <Card className="flex flex-col transition-all hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="items-center pb-4">
        {icon}
        <CardTitle className="mt-4 text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription className="text-center">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={href}>{linkText}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
