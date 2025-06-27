'use server';

/**
 * @fileOverview Simulates match outcomes using AI to provide predictive analysis.
 *
 * - simulateMatch - A function that simulates the outcome of a match.
 * - SimulateMatchInput - The input type for the simulateMatch function.
 * - SimulateMatchOutput - The return type for the simulateMatch function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SimulateMatchInputSchema = z.object({
  team1: z.string().describe('The name of the first team.'),
  team2: z.string().describe('The name of the second team.'),
  sport: z.string().describe('The sport being played (e.g., Football, Tennis).'),
  context: z.string().optional().describe('Additional context about the match (e.g., location, time, weather).'),
});
export type SimulateMatchInput = z.infer<typeof SimulateMatchInputSchema>;

const SimulateMatchOutputSchema = z.object({
  predictedWinner: z.string().describe('The predicted winner of the match.'),
  scorePrediction: z.string().describe('The predicted score of the match.'),
  analysis: z.string().describe('An analysis of the match and the prediction.'),
});
export type SimulateMatchOutput = z.infer<typeof SimulateMatchOutputSchema>;

export async function simulateMatch(input: SimulateMatchInput): Promise<SimulateMatchOutput> {
  return simulateMatchFlow(input);
}

const prompt = ai.definePrompt({
  name: 'simulateMatchPrompt',
  input: {schema: SimulateMatchInputSchema},
  output: {schema: SimulateMatchOutputSchema},
  prompt: `You are an AI expert in sports match outcome prediction.

You will simulate the match between {{team1}} and {{team2}} in {{sport}}.

{{#if context}}
Additional context: {{context}}
{{/if}}

Based on your knowledge and the provided context, predict the winner, the final score, and provide an analysis of the match.

Here's the predicted outcome:
Winner: {{predictedWinner}}
Score: {{scorePrediction}}
Analysis: {{analysis}}`,
});

const simulateMatchFlow = ai.defineFlow(
  {
    name: 'simulateMatchFlow',
    inputSchema: SimulateMatchInputSchema,
    outputSchema: SimulateMatchOutputSchema,
  },
  async (input) => {
    return {
      predictedWinner: '',
      scorePrediction: '',
      analysis: '',
    };
  }
);
