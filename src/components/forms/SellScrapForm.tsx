"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2, UploadCloud } from "lucide-react";
import { sellScrapSchema, type SellScrapFormValues } from "@/lib/validations/scrap-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const metalTypes = [
  "Ferrous (Iron/Steel)",
  "Non-Ferrous (Copper/Aluminum/Brass)",
  "E-Waste (Computers/Servers)",
  "Industrial Machinery",
  "Mixed/Other",
];

export function SellScrapForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SellScrapFormValues>({
    resolver: zodResolver(sellScrapSchema),
  });

  const onSubmit = async (data: SellScrapFormValues) => {
    setServerError(null);

    try {
      // Send data to API route (exclude photo — text-only for email)
      const { photo, ...payload } = data;

      const res = await fetch("/api/sell-scrap", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        setServerError(result.error || "Something went wrong. Please try again.");
        return;
      }

      setIsSuccess(true);
      reset();

      // Construct pre-filled WhatsApp message
      const formattedMessage = `Hello Zeeshan Metal Recycling, I have submitted a scrap metal inquiry:

🏢 Company Name: ${data.companyName}
🔧 Metal Type: ${data.metalType}
⚖️ Quantity: ${data.quantity}
📞 Phone Number: ${data.phone}`;

      const whatsappUrl = `https://wa.me/919625479593?text=${encodeURIComponent(formattedMessage)}`;

      // Redirect user to WhatsApp
      window.location.href = whatsappUrl;
    } catch {
      setServerError("Network error. Please check your connection and try again.");
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center rounded-2xl border border-border bg-white p-12 text-center shadow-xl dark:bg-brand-navy-light"
      >
        <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
          <CheckCircle2 className="size-10" />
        </div>
        <h3 className="mb-2 text-2xl font-bold">Inquiry Submitted!</h3>
        <p className="mb-8 max-w-md text-muted-foreground">
          Thank you for reaching out. Our procurement team will review your scrap details and get back to you within 24 hours.
        </p>
        <Button onClick={() => setIsSuccess(false)} variant="outline" size="lg">
          Submit Another Inquiry
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Company Name */}
        <div className="space-y-2">
          <label htmlFor="companyName" className="text-sm font-medium">
            Company Name <span className="text-destructive">*</span>
          </label>
          <Input
            id="companyName"
            placeholder="e.g. Apex Manufacturing"
            {...register("companyName")}
            aria-invalid={!!errors.companyName}
          />
          {errors.companyName && (
            <p className="text-xs text-destructive">{errors.companyName.message}</p>
          )}
        </div>

        {/* Contact Person */}
        <div className="space-y-2">
          <label htmlFor="contactPerson" className="text-sm font-medium">
            Contact Person <span className="text-destructive">*</span>
          </label>
          <Input
            id="contactPerson"
            placeholder="e.g. John Doe"
            {...register("contactPerson")}
            aria-invalid={!!errors.contactPerson}
          />
          {errors.contactPerson && (
            <p className="text-xs text-destructive">{errors.contactPerson.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email Address <span className="text-destructive">*</span>
          </label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            {...register("email")}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="text-xs text-destructive">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Phone Number <span className="text-destructive">*</span>
          </label>
          <Input
            id="phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            {...register("phone")}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && (
            <p className="text-xs text-destructive">{errors.phone.message}</p>
          )}
        </div>

        {/* City */}
        <div className="space-y-2">
          <label htmlFor="city" className="text-sm font-medium">
            City/Location <span className="text-destructive">*</span>
          </label>
          <Input
            id="city"
            placeholder="e.g. Chicago, IL"
            {...register("city")}
            aria-invalid={!!errors.city}
          />
          {errors.city && (
            <p className="text-xs text-destructive">{errors.city.message}</p>
          )}
        </div>

        {/* Metal Type (Using native select with Tailwind styling for simplicity) */}
        <div className="space-y-2">
          <label htmlFor="metalType" className="text-sm font-medium">
            Metal Type <span className="text-destructive">*</span>
          </label>
          <div className="relative">
            <select
              id="metalType"
              {...register("metalType")}
              className={`flex h-10 w-full appearance-none rounded-lg border border-input bg-transparent px-3 py-2 text-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 ${
                errors.metalType ? "border-destructive ring-destructive/20" : ""
              }`}
            >
              <option value="" disabled hidden>
                Select metal category
              </option>
              {metalTypes.map((type) => (
                <option key={type} value={type} className="text-foreground bg-background">
                  {type}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-muted-foreground">
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          {errors.metalType && (
            <p className="text-xs text-destructive">{errors.metalType.message}</p>
          )}
        </div>
      </div>

      {/* Approx Quantity */}
      <div className="space-y-2">
        <label htmlFor="quantity" className="text-sm font-medium">
          Approximate Quantity <span className="text-destructive">*</span>
        </label>
        <Input
          id="quantity"
          placeholder="e.g. 5 Tons, 200 Lbs, etc."
          {...register("quantity")}
          aria-invalid={!!errors.quantity}
        />
        {errors.quantity && (
          <p className="text-xs text-destructive">{errors.quantity.message}</p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Additional Details (Optional)
        </label>
        <Textarea
          id="message"
          placeholder="Describe the condition, packaging, or any specific logistics requirements..."
          className="min-h-[120px]"
          {...register("message")}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="text-xs text-destructive">{errors.message.message}</p>
        )}
      </div>

      {/* Photo Upload */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Photos of Scrap (Optional)</label>
        <div className="relative flex w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted/50 px-6 py-8 transition-colors hover:border-brand-copper/50 hover:bg-muted">
          <UploadCloud className="mb-2 size-8 text-muted-foreground" />
          <p className="mb-1 text-sm font-medium">Click to upload or drag and drop</p>
          <p className="text-xs text-muted-foreground">JPG, PNG or WEBP (Max 5MB)</p>
          <input
            type="file"
            accept="image/jpeg, image/png, image/webp"
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
            {...register("photo")}
          />
        </div>
        {errors.photo && (
          <p className="text-xs text-destructive">{errors.photo.message as string}</p>
        )}
      </div>

      {/* Server Error */}
      {serverError && (
        <div className="rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          {serverError}
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        className="w-full bg-brand-copper text-white hover:bg-brand-copper-dark sm:w-auto sm:px-12"
        disabled={isSubmitting}
      >
        <AnimatePresence mode="wait">
          {isSubmitting ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center"
            >
              <Loader2 className="mr-2 size-5 animate-spin" />
              Submitting...
            </motion.div>
          ) : (
            <motion.span
              key="default"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Submit Inquiry
            </motion.span>
          )}
        </AnimatePresence>
      </Button>
    </form>
  );
}
