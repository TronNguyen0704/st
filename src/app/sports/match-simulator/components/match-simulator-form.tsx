"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2, ShieldCheck, Trophy } from "lucide-react";
import { simulateMatchAction } from "../actions";
import type { SimulateMatchOutput } from "@/ai/flows/match-simulator";

const formSchema = z.object({
  team1: z.string().min(2, "Team name must be at least 2 characters."),
  team2: z.string().min(2, "Team name must be at least 2 characters."),
  sport: z.string().min(2, "Sport must be at least 2 characters."),
  context: z.string().optional(),
});

export function MatchSimulatorForm() {
  const [result, setResult] = useState<SimulateMatchOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      team1: "",
      team2: "",
      sport: "Football",
      context: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);
    setError(null);
    try {
      const res = await simulateMatchAction(values);
      setResult(res);
    } catch (e) {
      setError("An error occurred during simulation. Please try again.");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Simulation Parameters</CardTitle>
          <CardDescription>Fill in the details for the match simulation.</CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="team1"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Team 1</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Real Madrid" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="team2"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Team 2</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., FC Barcelona" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="sport"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sport</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Football" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="context"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Context (Optional)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="e.g., Champions League Final, rainy weather" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Simulating...
                  </>
                ) : (
                  "Simulate Match"
                )}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>

      {error && (
        <Card className="border-destructive bg-destructive/10">
          <CardHeader>
            <CardTitle className="text-destructive">Simulation Failed</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{error}</p>
          </CardContent>
        </Card>
      )}

      {result && (
        <Card className="animate-in fade-in-50">
          <CardHeader className="items-center text-center">
            <ShieldCheck className="h-12 w-12 text-primary" />
            <CardTitle className="text-2xl pt-2">Simulation Result</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Predicted Winner</p>
              <p className="text-3xl font-bold font-headline flex items-center justify-center gap-2">
                <Trophy className="h-8 w-8 text-amber-400" />
                {result.predictedWinner}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Predicted Score</p>
              <p className="text-2xl font-semibold">{result.scorePrediction}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2 text-center">AI Analysis</p>
              <div className="p-4 bg-muted/50 rounded-lg text-foreground/80 prose prose-sm max-w-none">
                <p>{result.analysis}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
