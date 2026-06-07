import { z } from "zod";

export const buyMetalsSchema = z.object({
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  contactPerson: z.string().min(2, "Contact person must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  productOfInterest: z.string().min(1, "Please select a product"),
  estimatedVolume: z.string().min(1, "Please provide an estimated volume required"),
  deliveryLocation: z.string().min(2, "Please provide a delivery location"),
  requirements: z.string().max(1000, "Requirements must not exceed 1000 characters").optional(),
});

export type BuyMetalsFormValues = z.infer<typeof buyMetalsSchema>;
