import Image from "next/image";
import { Header } from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { CheckCircle, ShoppingCart } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "E-DRA EK368L Alpha Wireless Keyboard Review | TechSport Pulse",
    description: "Discover the E-DRA EK368L Alpha, a wireless mechanical keyboard designed for maximum convenience, durability, and a superior typing experience.",
};

export default function EdraKeyboardReviewPage() {
    return (
        <div className="flex flex-col h-full">
            <Header>
                <h1 className="text-2xl font-bold font-headline">Gadget Review</h1>
            </Header>
            <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-auto">
                <article className="max-w-4xl mx-auto">
                    <div className="space-y-4 mb-8">
                        <Badge variant="default">Hardware</Badge>
                        <h1 className="text-4xl font-bold font-headline tracking-tight">E-DRA EK368L Alpha Wireless Mechanical Keyboard: Compact, Durable, and Versatile</h1>
                        <p className="text-lg text-muted-foreground">
                            Discover the E-DRA EK368L Alpha, a wireless mechanical keyboard designed for maximum convenience, durability, and a superior typing experience.
                        </p>
                    </div>
                    
                    <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden mb-8 shadow-lg border">
                        <Image
                            src="https://firebasestorage.googleapis.com/v0/b/genkit-llm-78351.appspot.com/o/10b4844337b545d625d91be272c72b15.png?alt=media&token=d25f7a0c-6953-43ef-b209-fd10f545a05b"
                            alt="E-DRA EK368L Alpha Wireless Mechanical Keyboard"
                            fill
                            className="object-cover"
                            data-ai-hint="mechanical keyboard"
                        />
                    </div>

                    <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">
                        <section>
                            <h2 className="text-3xl font-headline font-semibold">Unleash Wireless Freedom and Versatility</h2>
                            <p>
                                The E-DRA EK368L Alpha boasts <strong>dual wireless connectivity</strong>, supporting both <strong>2.4GHz and Bluetooth (BT5.0)</strong> modes. This ensures broad compatibility with a wide range of devices, including PCs, laptops, tablets, smartphones, and even smart TVs, providing ultimate convenience and flexibility for various setups. With a <strong>connection distance of up to 10 meters</strong>, you can enjoy reliable performance without being tethered.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-headline font-semibold">Premium Typing Experience with Unmatched Durability</h2>
                            <p>
                                At the heart of the EK368L Alpha are the highly regarded <strong>Huano Switches</strong>, known as "national switches" for their quality and performance. These switches offer a <strong>durability of 50 million clicks</strong>, delivering a stable, weighty, and excellent tactile typing feel. The design ensures smooth keystrokes, high responsiveness, and accurate operations with a well-arranged key layout.
                            </p>
                            <p>
                                The keyboard is equipped with <strong>ABS DoubleShot keycaps</strong>, which are renowned for their anti-wear properties, ensuring long-lasting durability and aesthetic appeal. The modern black, orange, and white color combination of the keycaps creates a striking look, and the Doubleshot technology guarantees that the printed details are hard-wearing and won't fade or wear out over time.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-headline font-semibold">Compact Design, Extended Battery Life</h2>
                            <p>
                                The E-DRA EK368L Alpha features a <strong>mini-size, super-compact 68-key layout</strong>, making it perfect for smaller desks and optimizing your workspace. This design strategically removes less-used keys while retaining full utility, allowing for easy placement in "modest" gaming or working environments.
                            </p>
                            <p>
                                Powering your extended usage, the keyboard operates on <strong>2 AAA batteries</strong>, providing an impressive <strong>battery life of up to 6 months</strong>. This long-lasting power makes it an excellent choice for users who need reliability without frequent battery changes.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-headline font-semibold">Technical Specifications</h2>
                             <Card className="not-prose">
                                <CardContent className="p-0">
                                    <Table>
                                        <TableHeader>
                                          <TableRow>
                                            <TableHead className="w-1/3">Feature</TableHead>
                                            <TableHead>Specification</TableHead>
                                          </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow><TableCell className="font-medium">Keyboard Type</TableCell><TableCell>Mini-size</TableCell></TableRow>
                                            <TableRow><TableCell className="font-medium">Number of Keys</TableCell><TableCell>68 keys</TableCell></TableRow>
                                            <TableRow><TableCell className="font-medium">Compatibility</TableCell><TableCell>Windows XP, Win7, Win8, Win10, MAC systems</TableCell></TableRow>
                                            <TableRow><TableCell className="font-medium">Connectivity</TableCell><TableCell>Wireless 2.4G + Bluetooth (BT5.0)</TableCell></TableRow>
                                            <TableRow><TableCell className="font-medium">Connection Distance</TableCell><TableCell>10 meters</TableCell></TableRow>
                                            <TableRow><TableCell className="font-medium">LED Lighting</TableCell><TableCell>No LED</TableCell></TableRow>
                                            <TableRow><TableCell className="font-medium">Battery Life</TableCell><TableCell>Up to 6 months (2xAAA batteries)</TableCell></TableRow>
                                            <TableRow><TableCell className="font-medium">Manufacturer</TableCell><TableCell>E-dra</TableCell></TableRow>
                                            <TableRow><TableCell className="font-medium">Dimensions</TableCell><TableCell>311 x 101 x 42 mm</TableCell></TableRow>
                                            <TableRow><TableCell className="font-medium">Weight</TableCell><TableCell>Approximately 557g</TableCell></TableRow>
                                            <TableRow><TableCell className="font-medium">Switch Options</TableCell><TableCell>Brown, Yellow, Blue, Red Huano Switches</TableCell></TableRow>
                                            <TableRow><TableCell className="font-medium">Keycaps</TableCell><TableCell>ABS DoubleShot, durable and anti-wear</TableCell></TableRow>
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                        </section>

                        <section>
                             <h2 className="text-3xl font-headline font-semibold">An Ideal Choice for All Users</h2>
                             <p>
                                The E-DRA EK368L Alpha is positioned as a high-quality mechanical keyboard that offers premium features at an <strong>affordable price</strong>, making it particularly appealing for students and budget-conscious gamers. Its high-end functionality combined with a reasonable price makes it a truly ideal choice.
                            </p>
                        </section>
                        
                        <Card className="not-prose bg-muted/50">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <ShoppingCart className="text-primary"/>
                                    Availability &amp; Offers
                                </CardTitle>
                            </CardHeader>
                             <CardContent className="space-y-4">
                               <p className="text-2xl font-bold text-primary">499,000đ <span className="text-base text-muted-foreground line-through ml-2">549,000đ</span></p>
                               <div className="space-y-2 text-sm">
                                   <p className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> 0% installment plans available.</p>
                                   <p className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Free nationwide delivery.</p>
                               </div>
                               <Button size="lg" className="w-full mt-4">
                                   Order Now
                               </Button>
                            </CardContent>
                        </Card>
                    </div>
                </article>
            </main>
        </div>
    );
}
