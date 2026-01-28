import { z } from "zod";

export const planTripSchema = z.object({
  destination: z.string().min(2, "Destination is required..."),
  travelStyle: z.string().min(1, "Select travel style"),
  duration: z.string().min(1, "Select trip duration"),
  season: z.string().min(1, "Select travel season"),
  budget: z.string().min(1, "Budget is required"),
  notes: z.string().optional(),
});

export type PlanTripFormValues = z.infer<typeof planTripSchema>;
