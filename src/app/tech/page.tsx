import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BotMessageSquare, Gamepad2, TestTube2, Network, Rocket, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';

const techTopics = [
  {
    icon: BotMessageSquare,
    title: "AI & Machine Learning",
    description: "Dive into the latest breakthroughs in artificial intelligence, from large language models to neural networks revolutionizing industries.",
    href: "/tech/forecasts",
    image: "https://placehold.co/600x400.png",
    imageHint: "abstract AI",
  },
  {
    icon: Gamepad2,
    title: "Gadget Zone",
    description: "Explore reviews, unboxings, and deep dives into the consumer tech that's shaping our daily lives. What's new, what's next?",
    href: "/tech/gadgets",
    image: "https://placehold.co/600x400.png",
    imageHint: "modern gadgets",
  },
  {
    icon: Rocket,
    title: "Startup Ecosystem",
    description: "Track the unicorns of tomorrow. We cover the most innovative startups, funding rounds, and market-disrupting ideas.",
    href: "/tech",
    image: "https://placehold.co/600x400.png",
    imageHint: "startup office",
  },
  {
    icon: Network,
    title: "Web3 & Blockchain",
    description: "From decentralized finance to NFTs and the metaverse, understand the technologies building the next generation of the internet.",
    href: "/tech",
    image: "https://placehold.co/600x400.png",
    imageHint: "blockchain network",
  },
   {
    icon: TestTube2,
    title: "Future Forecasts",
    description: "What will technology look like in 5, 10, or 20 years? Explore expert predictions on quantum computing, biotech, and more.",
    href: "/tech/forecasts",
    image: "https://placehold.co/600x400.png",
    imageHint: "futuristic lab",
  },
];


export default function TechPage() {
  return (
    <div className="flex flex-col h-full">
      <Header>
        <h1 className="text-2xl font-bold font-headline">Technology Hub</h1>
      </Header>
      <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-auto">
        <div className="space-y-8">
            <div className="text-center">
                <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
                    Your portal to the world of tomorrow. Explore cutting-edge innovations, insightful analyses, and the trends shaping our future.
                </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {techTopics.map((topic) => (
                    <Card key={topic.title} className="flex flex-col overflow-hidden transition-transform transform-gpu hover:-translate-y-1 hover:shadow-xl duration-300">
                         <CardHeader className="p-0">
                            <Image src={topic.image} alt={topic.title} width={600} height={400} className="object-cover w-full h-48" data-ai-hint={topic.imageHint} />
                        </CardHeader>
                        <CardContent className="p-6 flex-1">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-primary/10 rounded-full">
                                    <topic.icon className="w-6 h-6 text-primary" />
                                </div>
                                <CardTitle className="font-headline text-xl">{topic.title}</CardTitle>
                            </div>
                            <CardDescription>{topic.description}</CardDescription>
                        </CardContent>
                        <CardFooter className="p-6 pt-0">
                            <Button asChild className="w-full" variant="outline">
                                <Link href={topic.href}>
                                    Learn More <ChevronRight className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
      </main>
    </div>
  );
}
