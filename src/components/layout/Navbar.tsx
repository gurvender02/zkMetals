"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/constants/site";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* ── Scroll detection ─────────────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Close mobile menu on route change ────────────────────────── */
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/80 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between lg:h-[72px]">
          {/* ── Logo ──────────────────────────────────────────────── */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 transition-opacity hover:opacity-80"
          >
            {/* Icon mark */}
            <div className="flex size-9 items-center justify-center rounded-lg bg-brand-navy shadow-sm">
              <span className="text-sm font-bold tracking-wider text-white">
                ZK
              </span>
            </div>
            {/* Wordmark */}
            <div className="flex flex-col leading-none">
              <span className="font-heading text-lg font-medium tracking-tight text-foreground">
                {siteConfig.shortName}
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-brand-copper">
                Recycling
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav ───────────────────────────────────────── */}
          <ul className="hidden items-center gap-1 lg:flex">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium transition-colors",
                    isActive(item.href)
                      ? "text-brand-copper"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                  {/* Active indicator */}
                  {isActive(item.href) && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-copper" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* ── Desktop CTA ───────────────────────────────────────── */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Phone className="size-3.5" />
              <span className="hidden xl:inline">{siteConfig.contact.phone}</span>
            </a>
            <Button asChild variant="default" size="lg" className="rounded-lg bg-brand-copper px-5 text-white hover:bg-brand-copper-dark">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* ── Mobile Trigger ────────────────────────────────────── */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu className="size-5" />
          </Button>
        </nav>
      </Container>

      {/* ── Mobile Menu (Sheet) ─────────────────────────────────── */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="right" className="w-[300px] border-l border-border/40 bg-background p-0 sm:w-[360px]">
          <SheetHeader className="border-b border-border/40 px-6 py-5">
            <div className="flex items-center justify-between">
              <SheetTitle className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-md bg-brand-navy">
                  <span className="text-xs font-bold text-white">ZK</span>
                </div>
                <span className="font-heading text-base">{siteConfig.shortName}</span>
              </SheetTitle>
              <SheetClose asChild>
                <Button variant="ghost" size="icon-sm" aria-label="Close menu">
                  <X className="size-4" />
                </Button>
              </SheetClose>
            </div>
          </SheetHeader>

          {/* Nav Links */}
          <div className="flex flex-col gap-1 px-4 py-4">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "bg-brand-copper/10 text-brand-copper"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="mt-auto border-t border-border/40 px-4 py-5">
            <Button asChild className="w-full rounded-lg bg-brand-copper text-white hover:bg-brand-copper-dark" size="lg">
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                Get a Quote
              </Link>
            </Button>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="mt-3 flex items-center justify-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Phone className="size-3.5" />
              {siteConfig.contact.phone}
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
