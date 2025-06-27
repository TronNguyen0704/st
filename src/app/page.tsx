"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, User, Menu, X, Twitter, Instagram, Linkedin, PlayCircle, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme-toggle';

const TechSportLogo = ({ className }: { className?: string }) => (
  <Link href="/" className={cn("flex items-center gap-2", className)}>
    <div className="p-2 bg-primary rounded-md">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground">
        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
        <path d="M2 17l10 5 10-5"></path>
        <path d="M2 12l10 5 10-5"></path>
      </svg>
    </div>
    <span className="text-xl font-semibold font-headline text-foreground">TechSport Pulse</span>
  </Link>
);

const navItems = [
  { 
    label: "Tech", 
    subItems: [
      { label: "AI", href: "/tech" },
      { label: "Gadgets", href: "/tech/gadgets" },
      { label: "Startups", href: "/tech" }
    ] 
  },
  { 
    label: "Sports", 
    subItems: [
      { label: "Football", href: "/sports" },
      { label: "Tennis", href: "/sports" },
      { label: "Analytics", href: "/sports" }
    ] 
  },
  { label: "Hybrid", href: "#" },
];

const TechSportHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-lg border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <TechSportLogo />
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
            {navItems.map(item => (
              item.subItems ? (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger className="hover:text-primary transition-colors outline-none">{item.label}</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {item.subItems.map(subItem => (
                      <DropdownMenuItem key={subItem.label} asChild>
                        <Link href={subItem.href}>{subItem.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link key={item.label} href={item.href || '#'} className="hover:text-primary transition-colors">{item.label}</Link>
              )
            ))}
          </nav>
          
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="icon"><Search className="h-5 w-5"/></Button>
            <Button variant="ghost" size="icon"><User className="h-5 w-5"/></Button>
            <ThemeToggle />
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t">
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
          <div className="p-4 border-t flex items-center justify-center gap-4">
             <Button variant="ghost" size="icon"><Search className="h-5 w-5"/></Button>
            <Button variant="ghost" size="icon"><User className="h-5 w-5"/></Button>
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
};

const TechSportFooter = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <TechSportLogo />
            <p className="text-muted-foreground mt-4 text-sm">*All data-driven.*</p>
          </div>
          <div className="col-span-1">
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary">Newsletter</Link></li>
              <li><Link href="#" className="hover:text-primary">Careers</Link></li>
              <li><Link href="#" className="hover:text-primary">About</Link></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="font-semibold text-foreground mb-4">Social Media</h3>
            <div className="flex gap-4">
              <Link href="#"><Twitter className="h-6 w-6 text-muted-foreground hover:text-primary"/></Link>
              <Link href="#"><Instagram className="h-6 w-6 text-muted-foreground hover:text-primary"/></Link>
              <Link href="#"><Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary"/></Link>
            </div>
          </div>
          <div className="col-span-1">
             <h3 className="font-semibold text-foreground mb-4">Download App</h3>
             <div className="p-2 border rounded-md bg-background w-fit">
                <Image src="https://placehold.co/150x150.png" alt="QR Code" width={100} height={100} data-ai-hint="qr code"/>
             </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} TechSport Pulse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

const HeadlineCarousel = () => (
    <div className="w-full max-w-lg mx-auto mt-8 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
            <p className="text-sm text-foreground/70 mx-4">Apple’s AR Glasses Launch</p>
            <p className="text-sm text-foreground/70 mx-4">•</p>
            <p className="text-sm text-foreground/70 mx-4">UCL 2025 Quarterfinal Predictions</p>
             <p className="text-sm text-foreground/70 mx-4">•</p>
            <p className="text-sm text-foreground/70 mx-4">New AI Coding Assistant Released</p>
             <p className="text-sm text-foreground/70 mx-4">•</p>
            <p className="text-sm text-foreground/70 mx-4">F1 Tech Regulations for Next Season</p>
        </div>
    </div>
)

const ContentCard = ({ title, description, imageUrl, imageHint, tag, className }: { title: string; description: string; imageUrl: string; imageHint: string; tag: string; className?: string; }) => (
  <motion.div whileHover={{ y: -5, scale: 1.02 }} className={cn("h-full", className)}>
    <Card className="h-full overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
        <div className="relative">
            <Image src={imageUrl} alt={title} width={600} height={400} className="w-full h-48 object-cover" data-ai-hint={imageHint} />
            <Badge className="absolute top-2 right-2" variant="secondary">{tag}</Badge>
        </div>
      <CardContent className="p-4">
        <h3 className="font-headline text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

const VideoCard = ({ title, description, imageUrl, imageHint, tag }: { title: string; description: string; imageUrl: string; imageHint: string; tag: string }) => (
  <motion.div whileHover={{ y: -5, scale: 1.02 }} className="h-full">
    <Card className="h-full overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 relative group">
        <Image src={imageUrl} alt={title} width={600} height={400} className="w-full h-full object-cover" data-ai-hint={imageHint} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
            <PlayCircle className="h-16 w-16 text-white/70 transform transition-transform duration-300 group-hover:scale-110" />
        </div>
        <CardContent className="p-4 absolute bottom-0 left-0">
            <Badge className="mb-2" variant="secondary">{tag}</Badge>
            <h3 className="font-headline text-lg font-semibold text-white mb-1">{title}</h3>
            <p className="text-white/80 text-sm">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

export default function HomePage() {
  return (
    <div className="bg-background min-h-screen flex flex-col font-body">
      <TechSportHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative text-center py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-sky-200 dark:from-rose-900/50 dark:to-sky-900/50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold font-headline tracking-tight text-foreground"
            >
              Decode the Future, Celebrate the Game
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground"
            >
                Where Innovation Meets Passion
            </motion.p>
             <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex flex-wrap justify-center gap-4"
            >
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">Explore Tech Trends</Button>
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">Live Sports Updates</Button>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                 <HeadlineCarousel />
            </motion.div>
          </div>
        </section>

        {/* Content Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-headline font-bold text-foreground">Today's Pulse</h2>
                <p className="text-muted-foreground mt-2">The latest intersection of technology and sports.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-start">
                {/* Tech Spotlight */}
                <div className="md:col-span-1 space-y-8">
                    <h3 className="font-headline text-2xl font-semibold border-b-2 border-primary pb-2">Tech Spotlight</h3>
                    <ContentCard 
                        title="GPT-5 in Coaching"
                        description="How AI is revolutionizing training strategies and player development with predictive analytics."
                        imageUrl="https://placehold.co/600x400.png"
                        imageHint="ai coach"
                        tag="AI"
                    />
                     <ContentCard 
                        title="Top 5 Drones for Sports Filming"
                        description="A breakdown of the best drones for capturing dynamic, high-quality footage of live sports."
                        imageUrl="https://placehold.co/600x400.png"
                        imageHint="drone filming"
                        tag="Gadgets"
                    />
                </div>

                {/* Hybrid Topic */}
                <div className="md:col-span-1">
                     <motion.div whileHover={{ y: -5, scale: 1.02 }} className="h-full">
                        <Card className="h-full overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-muted/30">
                            <CardContent className="p-6 text-center">
                                <Badge variant="default" className="mb-4 bg-gradient-to-r from-primary to-accent text-primary-foreground animate-pulse">Trending Hybrid</Badge>
                                <h3 className="font-headline text-xl font-semibold text-foreground mb-3">Biofeedback Wearables for Athletes</h3>
                                <p className="text-muted-foreground text-sm mb-4">Syncing real-time heart-rate data and muscle oxygen levels to training apps for peak performance.</p>
                                <Image src="https://placehold.co/600x400.png" alt="Biofeedback chart" width={600} height={400} className="w-full h-auto object-cover rounded-md border" data-ai-hint="data chart" />
                                <Button variant="link" className="mt-4 text-primary">
                                    See the data <ChevronRight className="h-4 w-4 ml-1" />
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                {/* Sports Hub */}
                <div className="md:col-span-1 space-y-8">
                     <h3 className="font-headline text-2xl font-semibold border-b-2 border-accent pb-2">Sports Hub</h3>
                     <div className="w-full bg-muted/50 rounded-md p-2 overflow-hidden">
                        <p className="text-sm text-muted-foreground whitespace-nowrap animate-marquee">
                            <span className="mx-4">LIVE: Real Madrid 2 - 1 Barcelona</span>
                            <span className="mx-4">LIVE: Alcaraz wins first set vs. Sinner</span>
                            <span className="mx-4">VCT: Gen.G advances to finals</span>
                        </p>
                    </div>
                     <VideoCard 
                        title="How Neural Nets Analyze Soccer Tactics"
                        description="A deep dive into the AI models breaking down game-winning formations."
                        imageUrl="https://placehold.co/600x400.png"
                        imageHint="soccer tactics"
                        tag="Analytics"
                    />
                </div>
            </div>
          </div>
        </section>
      </main>
      <TechSportFooter />
    </div>
  );
}
