// route-generator.ts
'use server';

/**
 * @fileOverview Generates running/cycling routes using GPS data.
 *
 * - routeGenerator - A function that generates routes.
 * - RouteGeneratorInput - The input type for the routeGenerator function.
 * - RouteGeneratorOutput - The return type for the routeGenerator function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RouteGeneratorInputSchema = z.object({
  startLatitude: z.number().describe('The latitude of the starting point.'),
  startLongitude: z.number().describe('The longitude of the starting point.'),
  distance: z.number().describe('The desired distance of the route in kilometers.'),
  activityType: z.enum(['running', 'cycling']).describe('The type of activity: running or cycling.'),
  difficulty: z.enum(['easy', 'moderate', 'hard']).describe('The difficulty of the route.'),
});
export type RouteGeneratorInput = z.infer<typeof RouteGeneratorInputSchema>;

const RouteGeneratorOutputSchema = z.object({
  routeDescription: z.string().describe('A description of the generated route.'),
  routeGpsCoordinates: z.array(z.object({
    latitude: z.number(),
    longitude: z.number(),
  })).describe('An array of GPS coordinates representing the route.'),
});
export type RouteGeneratorOutput = z.infer<typeof RouteGeneratorOutputSchema>;

export async function routeGenerator(input: RouteGeneratorInput): Promise<RouteGeneratorOutput> {
  return routeGeneratorFlow(input);
}

const routeGeneratorPrompt = ai.definePrompt({
  name: 'routeGeneratorPrompt',
  input: {schema: RouteGeneratorInputSchema},
  output: {schema: RouteGeneratorOutputSchema},
  prompt: `You are an expert route generator for outdoor activities. Given a starting location, desired distance, activity type, and difficulty, you will generate a route description and a set of GPS coordinates.

Starting Latitude: {{startLatitude}}
Starting Longitude: {{startLongitude}}
Distance: {{distance}} km
Activity Type: {{activityType}}
Difficulty: {{difficulty}}

Consider the activity type and difficulty when generating the route. For example, a cycling route should prioritize roads and bike paths, while a running route can include trails. A hard route should include more elevation changes.

Output the route description and GPS coordinates in the specified JSON format.`,
});

const routeGeneratorFlow = ai.defineFlow(
  {
    name: 'routeGeneratorFlow',
    inputSchema: RouteGeneratorInputSchema,
    outputSchema: RouteGeneratorOutputSchema,
  },
  async input => {
    const {output} = await routeGeneratorPrompt(input);
    return output!;
  }
);
