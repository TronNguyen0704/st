"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Bell, Menu, X, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from '@/components/theme-toggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const NexusLogo = () => (
  <Link href="/" className="flex items-center gap-2">
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
      <path d="M9 27V9L18 18L9 27Z" fill="currentColor"/>
      <path d="M27 9V27L18 18L27 9Z" fill="currentColor" fillOpacity="0.7"/>
    </svg>
    <span className="text-xl font-semibold font-headline text-foreground">Nexus Horizon</span>
  </Link>
);

const navItems = [
  { 
    label: "Technology", 
    subItems: [
      { label: "AI", href: "/tech" },
      { label: "Gadgets", href: "/tech/gadgets" },
      { label: "Future Tech", href: "/tech/forecasts" }
    ] 
  },
  { 
    label: "Sports", 
    subItems: [
      { label: "Football", href: "/sports" },
      { label: "Tennis", href: "/sports" },
      { label: "Fitness", href: "/sports/training" }
    ] 
  },
  { label: "Resources", href: "#" },
  { label: "About", href: "#" },
];

const NexusHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 z-50 w-full">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <NexusLogo />
          
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white/80">
            {navItems.map(item => (
              item.subItems ? (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger className="hover:text-white transition-colors outline-none">{item.label}</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {item.subItems.map(subItem => (
                      <DropdownMenuItem key={subItem.label} asChild>
                        <Link href={subItem.href}>{subItem.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link key={item.label} href={item.href || '#'} className="hover:text-white transition-colors">{item.label}</Link>
              )
            ))}
          </nav>
          
          <div className="hidden md:flex items-center gap-2">
            <Button variant="outline" size="sm" className="text-white border-white/30 hover:bg-white/10 hover:text-white">Sign In</Button>
            <Button size="sm">Get Started</Button>
            <ThemeToggle className="text-white/80 hover:text-white hover:bg-white/10" />
            <Button variant="ghost" size="icon" className="text-white/80 hover:text-white hover:bg-white/10"><Bell className="h-5 w-5"/></Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:bg-white/10">
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background/90 backdrop-blur-lg border-t border-border/50">
          <nav className="flex flex-col gap-4 p-4">
          {navItems.map(item => (
            <div key={item.label}>
              <h3 className="font-semibold text-foreground mb-2">{item.label}</h3>
              {item.subItems ? (
                <div className="flex flex-col gap-2 pl-4">
                {item.subItems.map(sub => <Link key={sub.label} href={sub.href} className="text-muted-foreground hover:text-primary">{sub.label}</Link>)}
                </div>
              ) : <Link href={item.href || '#'} className="text-muted-foreground hover:text-primary">{item.label}</Link>}
            </div>
          ))}
          </nav>
          <div className="p-4 border-t border-border/50 flex flex-col gap-2">
            <Button variant="outline">Sign In</Button>
            <Button>Get Started</Button>
            <div className="flex items-center justify-between">
              <ThemeToggle />
              <Button variant="ghost" size="icon"><Bell className="h-5 w-5"/></Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const NexusFooter = () => {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <NexusLogo />
            <p className="text-muted-foreground mt-4 text-sm">*Intelligence • Performance • Simplicity*</p>
          </div>
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary">About</Link></li>
              <li><Link href="#" className="hover:text-primary">Careers</Link></li>
              <li><Link href="#" className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex gap-4">
              <Link href="#"><Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary"/></Link>
              <Link href="#"><Twitter className="h-6 w-6 text-muted-foreground hover:text-primary"/></Link>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-semibold text-foreground mb-4">Stay Ahead</h3>
            <p className="text-sm text-muted-foreground mb-2">Subscribe to our newsletter.</p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="bg-background/50" />
              <Button><ArrowRight /></Button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Nexus Horizon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

const TechSpotlightCard = ({ title, description, imageUrl, imageHint }: { title: string; description: string; imageUrl: string; imageHint: string; }) => (
  <motion.div whileHover={{ y: -5, boxShadow: "0px 10px 20px hsla(30, 85%, 65%, 0.1)" }}>
    <Card className="h-full overflow-hidden bg-card/50">
      <Image src={imageUrl} alt={title} width={600} height={400} className="w-full h-48 object-cover" data-ai-hint={imageHint} />
      <CardContent className="p-6">
        <h3 className="font-headline text-xl font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

const SportsPulseCard = ({ title, description, imageUrl, imageHint }: { title: string; description: string; imageUrl: string; imageHint: string; }) => (
  <motion.div whileHover={{ y: -5, boxShadow: "0px 10px 20px hsla(30, 85%, 65%, 0.1)" }}>
    <Card className="h-full overflow-hidden bg-card/50 relative">
      <Image src={imageUrl} alt={title} width={600} height={400} className="w-full h-full object-cover" data-ai-hint={imageHint} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      <CardContent className="p-6 absolute bottom-0 left-0">
        <h3 className="font-headline text-2xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-white/80 text-sm">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

export default function HomePage() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <NexusHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#4d2c1d] to-[#b45309] animate-[pulse_10s_ease-in-out_infinite] opacity-80"></div>
          <div className="relative z-10 p-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-7xl font-bold font-headline tracking-tight"
            >
              Where Innovation Meets Precision
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 max-w-xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="AI-suggested queries: Meta's LLM benchmarks..."
                  className="w-full pl-12 pr-4 py-6 rounded-full bg-white/10 backdrop-blur-md text-white placeholder:text-white/60 border-white/20 focus:ring-primary focus:ring-2"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            {/* Tech Spotlight */}
            <div className="mb-12">
              <h2 className="text-3xl font-headline font-bold text-foreground mb-6">Tech Spotlight</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <TechSpotlightCard 
                  title="GPT-5 Enterprise Use Cases"
                  description="Exploring how the next generation of language models will revolutionize corporate workflows and data analysis."
                  imageUrl="https://placehold.co/600x400.png"
                  imageHint="ai model"
                />
                <TechSpotlightCard 
                  title="Apple Vision Pro 2 Leaks"
                  description="A carousel of speculated features, from enhanced resolution to new sensory feedback systems."
                  imageUrl="https://placehold.co/600x400.png"
                  imageHint="vr headset"
                />
              </div>
            </div>

            {/* Sports Pulse */}
            <div className="mb-12">
              <h2 className="text-3xl font-headline font-bold text-foreground mb-2">Sports Pulse</h2>
              <div className="overflow-hidden bg-muted/20 rounded-md p-2 mb-6">
                <p className="text-sm text-muted-foreground whitespace-nowrap animate-marquee">
                  <span className="mx-4">Live Ticker: Federer joins Wimbledon 2025 as commentator</span>
                  <span className="mx-4">Man City reveals new AI-driven training kit</span>
                  <span className="mx-4">eSports: VCT Masters viewership breaks records</span>
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <SportsPulseCard 
                  title="How Alcaraz's Serve Speed Increased by 12%"
                  description="A deep dive into the biomechanics and technology behind the tennis star's latest improvements."
                  imageUrl="https://placehold.co/600x400.png"
                  imageHint="tennis serve"
                />
                 <SportsPulseCard 
                  title="F1 Aerodynamics in the AI Era"
                  description="Simulations are getting faster and more accurate, leading to unprecedented design innovations on the track."
                  imageUrl="https://placehold.co/600x400.png"
                  imageHint="formula one"
                />
              </div>
            </div>

            {/* Trending Now */}
            <div>
              <h2 className="text-3xl font-headline font-bold text-foreground mb-6">Trending Now</h2>
              <Carousel className="w-full">
                <CarouselContent>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                      <TechSpotlightCard 
                        title="Solid-State Batteries: 2025 Breakthroughs"
                        description="A look at the companies closest to commercializing next-gen battery tech for EVs and gadgets."
                        imageUrl="https://placehold.co/600x400.png"
                        imageHint="battery technology"
                      />
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                      <TechSpotlightCard 
                        title="Man City’s New AI-Driven Training Kit"
                        description="Sensors embedded in the fabric provide real-time biometric data to optimize player performance and prevent injuries."
                        imageUrl="https://placehold.co/600x400.png"
                        imageHint="football kit"
                      />
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                      <TechSpotlightCard 
                        title="The Ethics of AI in Sports Refereeing"
                        description="VAR and automated line calls are just the beginning. We explore the future of automated officiating."
                        imageUrl="https://placehold.co/600x400.png"
                        imageHint="sports referee"
                      />
                    </CarouselItem>
                     <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                      <TechSpotlightCard 
                        title="Decentralized Social Media"
                        description="Can blockchain-based platforms offer a viable alternative to today's social media giants? A look at the leading contenders."
                        imageUrl="https://placehold.co/600x400.png"
                        imageHint="social media"
                      />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="ml-12"/>
                <CarouselNext className="mr-12"/>
              </Carousel>
            </div>

          </div>
        </section>
      </main>
      <NexusFooter />
    </div>
  );
}
