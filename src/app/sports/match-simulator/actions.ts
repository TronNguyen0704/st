"use server";

import { simulateMatch, type SimulateMatchInput } from "@/ai/flows/match-simulator";

export async function simulateMatchAction(input: SimulateMatchInput) {
  // Add a delay to simulate network latency for better UX
  await new Promise(resolve => setTimeout(resolve, 1000));
  return await simulateMatch(input);
}
