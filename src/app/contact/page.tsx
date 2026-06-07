import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Building2,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch | Zeeshan Metal Recycling",
  description:
    "Reach Zeeshan Metal Recycling via phone, WhatsApp, email, or visit our facility. Get a free quote for scrap metal recycling services.",
};

/* ── Contact Info Data ──────────────────────────────────────────────── */
const contactCards = [
  {
    id: "phone",
    icon: Phone,
    label: "Phone",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone}`,
    description: "Call us directly for immediate assistance",
    color: "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400",
  },
  {
    id: "whatsapp",
    icon: MessageCircle,
    label: "WhatsApp",
    value: siteConfig.contact.phone,
    href: `https://wa.me/${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`,
    description: "Chat with us on WhatsApp for quick responses",
    color:
      "bg-green-50 text-green-600 dark:bg-green-950/40 dark:text-green-400",
  },
  {
    id: "email",
    icon: Mail,
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    description: "Send us an email for detailed inquiries",
    color:
      "bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400",
  },
  {
    id: "address",
    icon: MapPin,
    label: "Visit Us",
    value: siteConfig.contact.address,
    href: "https://maps.google.com",
    description: "Visit our facility for in-person consultations",
    color:
      "bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400",
  },
];

const businessHours = [
  { day: "Monday – Friday", hours: "9:00 AM – 6:00 PM" },
  { day: "Saturday", hours: "9:00 AM – 2:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

/* ── Page Component ─────────────────────────────────────────────────── */
export default function ContactPage() {
  return (
    <>
      {/* ── Hero Section ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-brand-navy py-20 text-white lg:py-32">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
        <div className="absolute -right-40 top-0 size-96 rounded-full bg-brand-copper/20 blur-[100px]" />
        <div className="absolute -left-60 bottom-0 size-80 rounded-full bg-brand-copper/10 blur-[120px]" />

        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block font-heading text-xl text-brand-copper">
              Get in Touch
            </span>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Contact Us
            </h1>
            <p className="text-lg text-neutral-300 sm:text-xl">
              Have questions about scrap pricing, logistics, or bulk orders?
              We&apos;re here to help. Reach out through any of the channels
              below or fill out our contact form.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Contact Info Cards ────────────────────────────────────── */}
      <section className="bg-background py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card) => (
              <a
                key={card.id}
                id={`contact-card-${card.id}`}
                href={card.href}
                target={card.id === "whatsapp" ? "_blank" : undefined}
                rel={card.id === "whatsapp" ? "noopener noreferrer" : undefined}
                className="group flex flex-col items-center rounded-2xl border border-border bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-brand-navy-light"
              >
                {/* Icon */}
                <div
                  className={`mb-5 flex size-14 items-center justify-center rounded-2xl ${card.color} transition-transform duration-300 group-hover:scale-110`}
                >
                  <card.icon className="size-6" />
                </div>

                {/* Label */}
                <h3 className="mb-1 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  {card.label}
                </h3>

                {/* Value */}
                <p className="mb-3 text-base font-semibold text-foreground">
                  {card.value}
                </p>

                {/* Description */}
                <p className="text-sm text-muted-foreground">
                  {card.description}
                </p>

                {/* Arrow indicator */}
                <div className="mt-4 flex items-center text-sm font-medium text-brand-copper opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Open <ArrowRight className="ml-1 size-3.5" />
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Form + Map + Hours Section ───────────────────────────── */}
      <section className="bg-neutral-50 py-16 dark:bg-brand-navy-dark sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            {/* ── Left: Contact Form (3 cols) ────────────────────── */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-border bg-white p-8 shadow-xl dark:bg-brand-navy-light sm:p-10">
                <div className="mb-8">
                  <h2 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">
                    Send Us a Message
                  </h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and our team will respond within 24
                    hours.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>

            {/* ── Right: Map + Hours (2 cols) ────────────────────── */}
            <div className="flex flex-col gap-8 lg:col-span-2">
              {/* Google Map Embed */}
              <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
                <div className="bg-brand-navy px-5 py-4">
                  <div className="flex items-center gap-2 text-white">
                    <MapPin className="size-4 text-brand-copper" />
                    <span className="text-sm font-semibold">Our Location</span>
                  </div>
                </div>
                <iframe
                  id="contact-map"
                  title="Zeeshan Metal Recycling Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0!2d72.85!3d19.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzEyLjAiTiA3MsKwNTEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>

              {/* Business Hours */}
              <div className="rounded-2xl border border-border bg-white p-8 shadow-lg dark:bg-brand-navy-light">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-brand-copper/10 text-brand-copper">
                    <Clock className="size-5" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    Business Hours
                  </h3>
                </div>

                <div className="space-y-4">
                  {businessHours.map((schedule) => (
                    <div
                      key={schedule.day}
                      className="flex items-center justify-between border-b border-border/50 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-sm font-medium text-foreground">
                        {schedule.day}
                      </span>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          schedule.hours === "Closed"
                            ? "bg-red-50 text-red-600 dark:bg-red-950/40 dark:text-red-400"
                            : "bg-green-50 text-green-600 dark:bg-green-950/40 dark:text-green-400"
                        }`}
                      >
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Quick note */}
                <div className="mt-6 rounded-xl bg-brand-copper/5 p-4">
                  <div className="flex gap-3">
                    <Building2 className="mt-0.5 size-4 shrink-0 text-brand-copper" />
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      For urgent pickups or large-volume deals, our operations
                      team is reachable 24/7 via WhatsApp.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
