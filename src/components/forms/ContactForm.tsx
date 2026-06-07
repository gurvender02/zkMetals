"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2, Send } from "lucide-react";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/validations/contact-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const subjects = [
  "General Inquiry",
  "Sell Scrap Metal",
  "Buy Processed Metal",
  "Bulk Order / Partnership",
  "Logistics & Pickup",
  "Feedback / Complaint",
  "Other",
];

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Contact form submitted:", data);

    setIsSuccess(true);
    reset();
  };

  /* ── Success State ─────────────────────────────────────────────── */
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
        <h3 className="mb-2 text-2xl font-bold">Message Sent Successfully!</h3>
        <p className="mb-8 max-w-md text-muted-foreground">
          Thank you for reaching out. Our team will review your message and get
          back to you within 24 hours.
        </p>
        <Button
          onClick={() => setIsSuccess(false)}
          variant="outline"
          size="lg"
        >
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  /* ── Form ───────────────────────────────────────────────────────── */
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Full Name */}
        <div className="space-y-2">
          <label htmlFor="contact-fullName" className="text-sm font-medium">
            Full Name <span className="text-destructive">*</span>
          </label>
          <Input
            id="contact-fullName"
            placeholder="e.g. Rahul Sharma"
            {...register("fullName")}
            aria-invalid={!!errors.fullName}
          />
          {errors.fullName && (
            <p className="text-xs text-destructive">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="contact-email" className="text-sm font-medium">
            Email Address <span className="text-destructive">*</span>
          </label>
          <Input
            id="contact-email"
            type="email"
            placeholder="you@example.com"
            {...register("email")}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="text-xs text-destructive">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label htmlFor="contact-phone" className="text-sm font-medium">
            Phone Number <span className="text-destructive">*</span>
          </label>
          <Input
            id="contact-phone"
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            {...register("phone")}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && (
            <p className="text-xs text-destructive">{errors.phone.message}</p>
          )}
        </div>

        {/* Subject */}
        <div className="space-y-2">
          <label htmlFor="contact-subject" className="text-sm font-medium">
            Subject <span className="text-destructive">*</span>
          </label>
          <div className="relative">
            <select
              id="contact-subject"
              {...register("subject")}
              className={`flex h-10 w-full appearance-none rounded-lg border border-input bg-transparent px-3 py-2 text-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 ${
                errors.subject
                  ? "border-destructive ring-destructive/20"
                  : ""
              }`}
            >
              <option value="" disabled hidden>
                Select subject
              </option>
              {subjects.map((subject) => (
                <option
                  key={subject}
                  value={subject}
                  className="bg-background text-foreground"
                >
                  {subject}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-muted-foreground">
              <svg
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
          {errors.subject && (
            <p className="text-xs text-destructive">
              {errors.subject.message}
            </p>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label htmlFor="contact-message" className="text-sm font-medium">
          Your Message <span className="text-destructive">*</span>
        </label>
        <Textarea
          id="contact-message"
          placeholder="Tell us how we can help you..."
          className="min-h-[140px]"
          {...register("message")}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="text-xs text-destructive">{errors.message.message}</p>
        )}
      </div>

      {/* Submit */}
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
              Sending...
            </motion.div>
          ) : (
            <motion.span
              key="default"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center"
            >
              <Send className="mr-2 size-4" />
              Send Message
            </motion.span>
          )}
        </AnimatePresence>
      </Button>
    </form>
  );
}
