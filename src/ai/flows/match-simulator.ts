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
  async input => {
    const {output} = await ai.generate({
      prompt: `Predict the outcome of a match between ${input.team1} and ${input.team2} in ${input.sport}.  ${input.context ? `Additional context: ${input.context}` : ''}`,
      model: 'googleai/gemini-2.0-flash',
      config: {
        safetySettings: [
          {
            category: 'HARM_CATEGORY_HATE_SPEECH',
            threshold: 'BLOCK_ONLY_HIGH',
          },
          {
            category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
            threshold: 'BLOCK_NONE',
          },
          {
            category: 'HARM_CATEGORY_HARASSMENT',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE',
          },
          {
            category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
            threshold: 'BLOCK_LOW_AND_ABOVE',
          },
        ],
      },
    });
    return {predictedWinner: 'TBD', scorePrediction: 'TBD', analysis: output!.text};
  }
);
