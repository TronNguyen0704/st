import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, PlusCircle } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';
import { Badge } from "@/components/ui/badge";

const gadgetPosts = [
  {
    title: "E-DRA EK368L Alpha Keyboard Review",
    description: "A deep dive into the compact, durable, and versatile wireless mechanical keyboard. Is it the right choice for you?",
    href: "/tech/gadgets/edra-keyboard-review",
    image: "https://firebasestorage.googleapis.com/v0/b/genkit-llm-78351.appspot.com/o/10b4844337b545d625d91be272c72b15.png?alt=media&token=d25f7a0c-6953-43ef-b209-fd10f545a05b",
    imageHint: "mechanical keyboard",
    tag: "Review",
    date: "October 26, 2023",
  },
  // Add more posts here in the future
];


export default function GadgetsPage() {
  return (
    <div className="flex flex-col h-full">
      <Header>
        <h1 className="text-2xl font-bold font-headline">Gadget Zone</h1>
      </Header>
      <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-auto">
        <div className="space-y-8">
            <div className="text-center">
                <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
                    Reviews, comparisons, and DIY guides for the latest tech. Stay tuned for more!
                </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {gadgetPosts.map((post) => (
                    <Card key={post.title} className="flex flex-col overflow-hidden transition-transform transform-gpu hover:-translate-y-1 hover:shadow-xl duration-300">
                         <CardHeader className="p-0 relative">
                            <Image src={post.image} alt={post.title} width={600} height={400} className="object-cover w-full h-48" data-ai-hint={post.imageHint} />
                             <Badge variant="secondary" className="absolute top-2 right-2">{post.tag}</Badge>
                        </CardHeader>
                        <CardContent className="p-6 flex-1">
                            <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                            <CardTitle className="font-headline text-xl mb-2">{post.title}</CardTitle>
                            <CardDescription>{post.description}</CardDescription>
                        </CardContent>
                        <CardFooter className="p-6 pt-0">
                            <Button asChild className="w-full" variant="outline">
                                <Link href={post.href}>
                                    Read More <ChevronRight className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
                 <Card className="flex flex-col items-center justify-center text-center border-dashed h-full min-h-[400px] bg-muted/20 hover:bg-muted/50 transition-colors">
                    <CardHeader>
                        <div className="flex justify-center mb-4">
                            <div className="p-4 bg-muted rounded-full">
                                <PlusCircle className="h-8 w-8 text-muted-foreground" />
                            </div>
                        </div>
                        <CardTitle>More Coming Soon</CardTitle>
                        <CardDescription>We're working on new reviews and gadget guides. Check back later!</CardDescription>
                    </CardHeader>
                </Card>
            </div>
        </div>
      </main>
    </div>
  );
}
