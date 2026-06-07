"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2 } from "lucide-react";
import { buyMetalsSchema, type BuyMetalsFormValues } from "@/lib/validations/buy-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const products = [
  "Copper Ingots",
  "Copper Blocks",
  "Silver Material",
  "Brass Material",
  "Other / Mixed Inquiry",
];

export function BuyMetalsForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BuyMetalsFormValues>({
    resolver: zodResolver(buyMetalsSchema),
  });

  const onSubmit = async (data: BuyMetalsFormValues) => {
    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Buy Inquiry submitted:", data);
    
    // Show success state
    setIsSuccess(true);
    reset();
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
        <h3 className="mb-2 text-2xl font-bold">Inquiry Submitted Successfully!</h3>
        <p className="mb-8 max-w-md text-muted-foreground">
          Thank you for your interest in our products. Our sales team will review your requirements and provide a detailed quote shortly.
        </p>
        <Button onClick={() => setIsSuccess(false)} variant="outline" size="lg">
          Submit Another Request
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
            placeholder="e.g. Apex Foundries"
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
            placeholder="e.g. Jane Smith"
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
            placeholder="jane@example.com"
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

        {/* Product of Interest */}
        <div className="space-y-2">
          <label htmlFor="productOfInterest" className="text-sm font-medium">
            Product of Interest <span className="text-destructive">*</span>
          </label>
          <div className="relative">
            <select
              id="productOfInterest"
              {...register("productOfInterest")}
              className={`flex h-10 w-full appearance-none rounded-lg border border-input bg-transparent px-3 py-2 text-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 ${
                errors.productOfInterest ? "border-destructive ring-destructive/20" : ""
              }`}
            >
              <option value="" disabled hidden>
                Select product
              </option>
              {products.map((product) => (
                <option key={product} value={product} className="text-foreground bg-background">
                  {product}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-muted-foreground">
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          {errors.productOfInterest && (
            <p className="text-xs text-destructive">{errors.productOfInterest.message}</p>
          )}
        </div>

        {/* Estimated Volume */}
        <div className="space-y-2">
          <label htmlFor="estimatedVolume" className="text-sm font-medium">
            Estimated Volume <span className="text-destructive">*</span>
          </label>
          <Input
            id="estimatedVolume"
            placeholder="e.g. 10 Metric Tons / Month"
            {...register("estimatedVolume")}
            aria-invalid={!!errors.estimatedVolume}
          />
          {errors.estimatedVolume && (
            <p className="text-xs text-destructive">{errors.estimatedVolume.message}</p>
          )}
        </div>
      </div>

      {/* Delivery Location */}
      <div className="space-y-2">
        <label htmlFor="deliveryLocation" className="text-sm font-medium">
          Delivery Destination <span className="text-destructive">*</span>
        </label>
        <Input
          id="deliveryLocation"
          placeholder="e.g. Port of Los Angeles, USA"
          {...register("deliveryLocation")}
          aria-invalid={!!errors.deliveryLocation}
        />
        {errors.deliveryLocation && (
          <p className="text-xs text-destructive">{errors.deliveryLocation.message}</p>
        )}
      </div>

      {/* Requirements */}
      <div className="space-y-2">
        <label htmlFor="requirements" className="text-sm font-medium">
          Specific Metallurgical Requirements (Optional)
        </label>
        <Textarea
          id="requirements"
          placeholder="Specify desired purities, dimensions, packaging needs, or compliance standards..."
          className="min-h-[120px]"
          {...register("requirements")}
          aria-invalid={!!errors.requirements}
        />
        {errors.requirements && (
          <p className="text-xs text-destructive">{errors.requirements.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        className="w-full bg-brand-navy text-white hover:bg-brand-navy-light dark:bg-brand-copper dark:hover:bg-brand-copper-dark sm:w-auto sm:px-12"
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
              Processing...
            </motion.div>
          ) : (
            <motion.span
              key="default"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Request Quote
            </motion.span>
          )}
        </AnimatePresence>
      </Button>
    </form>
  );
}
