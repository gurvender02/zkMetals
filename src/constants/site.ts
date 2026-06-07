/**
 * Site-wide configuration constants.
 */
export const siteConfig = {
  name: "Zeeshan Metal Recycling",
  shortName: "ZK Metals",
  description:
    "Premier metal recycling and industrial scrap solutions. Sustainable, reliable, and enterprise-grade metal processing services.",
  url: "https://zeeshanmetal.com",
  ogImage: "/og-image.jpg",

  contact: {
    email: "gurvender.singh2026@gmail.com",
    phone: "+91 9625479593",
    address: "Industrial Area, City, State, India",
  },

  social: {
    linkedin: "#",
    twitter: "#",
    facebook: "#",
    instagram: "#",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Sell Scrap", href: "/sell-scrap" },
    { label: "Buy Metals", href: "/buy-metals" },
    { label: "Metals", href: "/metals" },
    { label: "Process", href: "/process" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ] as const,
} as const;

export type NavItem = (typeof siteConfig.nav)[number];
