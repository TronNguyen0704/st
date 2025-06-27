import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell, Newspaper, HeartPulse } from "lucide-react";
import Image from "next/image";

export default function SportsPage() {
  return (
    <div className="flex flex-col h-full">
      <Header>
        <h1 className="text-2xl font-bold font-headline">Sports</h1>
      </Header>
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <div className="grid gap-8">
          <Card className="overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2">
               <div className="min-h-[250px] md:min-h-0">
                 <Image src="https://placehold.co/600x400.png" alt="Breaking Sports News" width={600} height={400} className="object-cover w-full h-full" data-ai-hint="stadium crowd" />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <CardHeader>
                  <CardTitle className="text-3xl font-headline">Breaking News</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>Stay on top of the game with real-time updates. From transfer rumors to championship analytics, we've got you covered.</p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <div className="flex items-center gap-2"><Newspaper className="text-accent"/> Football &amp; Tennis</div>
                    <div className="flex items-center gap-2"><Dumbbell className="text-accent"/> Esports Meta</div>
                    <div className="flex items-center gap-2"><HeartPulse className="text-accent"/> Player Rankings</div>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
           <p className="text-center text-muted-foreground">More sections like Training Guides and Interactive Tools are just a click away in the sidebar!</p>
        </div>
      </main>
    </div>
  );
}
