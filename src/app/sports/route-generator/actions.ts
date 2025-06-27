"use server";

import { routeGenerator, type RouteGeneratorInput } from "@/ai/flows/route-generator";

export async function routeGeneratorAction(input: RouteGeneratorInput) {
    // Add a delay to simulate network latency for better UX
    await new Promise(resolve => setTimeout(resolve, 1000));
    return await routeGenerator(input);
}
