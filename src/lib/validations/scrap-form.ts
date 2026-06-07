import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const sellScrapSchema = z.object({
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  contactPerson: z.string().min(2, "Contact person must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  city: z.string().min(2, "City must be at least 2 characters"),
  metalType: z.string().min(1, "Please select a metal type"),
  quantity: z.string().min(1, "Please provide an approximate quantity"),
  message: z.string().max(500, "Message must not exceed 500 characters").optional(),
  
  // For standard browser FileList validation on the client
  // We use any to avoid SSR issues with FileList, but refine it manually
  photo: z
    .any()
    .optional()
    .refine((files) => {
      if (!files || files.length === 0) return true; // Optional field
      return files[0]?.size <= MAX_FILE_SIZE;
    }, `Max image size is 5MB.`)
    .refine((files) => {
      if (!files || files.length === 0) return true;
      return ACCEPTED_IMAGE_TYPES.includes(files[0]?.type);
    }, "Only .jpg, .jpeg, .png and .webp formats are supported."),
});

export type SellScrapFormValues = z.infer<typeof sellScrapSchema>;
