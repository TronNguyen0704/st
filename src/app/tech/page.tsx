import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BotMessageSquare, Globe, Leaf } from "lucide-react";
import Image from "next/image";

export default function TechPage() {
  return (
    <div className="flex flex-col h-full">
      <Header>
        <h1 className="text-2xl font-bold font-headline">Technology</h1>
      </Header>
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <div className="grid gap-8">
          <Card className="overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2">
              <div className="p-6 flex flex-col justify-center">
                <CardHeader>
                  <CardTitle className="text-3xl font-headline">Hot &amp; Emerging Tech</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>Dive into the innovations shaping our future. From the latest in Artificial Intelligence to the decentralized world of Web3 and the sustainable solutions of Green Tech.</p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <div className="flex items-center gap-2"><BotMessageSquare className="text-accent"/> AI/ML Innovations</div>
                    <div className="flex items-center gap-2"><Globe className="text-accent"/> Web3 &amp; Blockchain</div>
                    <div className="flex items-center gap-2"><Leaf className="text-accent"/> Green Tech</div>
                  </div>
                </CardContent>
              </div>
              <div className="min-h-[250px] md:min-h-0">
                 <Image src="https://placehold.co/600x400.png" alt="Emerging Tech" width={600} height={400} className="object-cover w-full h-full" data-ai-hint="abstract technology" />
              </div>
            </div>
          </Card>
           <p className="text-center text-muted-foreground">More sections like Gadget Zone and Future Forecasts are just a click away in the sidebar!</p>
        </div>
      </main>
    </div>
  );
}
