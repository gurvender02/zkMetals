# Zeeshan Metal Recycling Website

A modern, high-performance industrial business website built for **Zeeshan Metal Recycling**, designed to generate supplier and buyer leads, establish trust, and provide a professional online presence.

## Overview

Zeeshan Metal Recycling specializes in purchasing industrial metal scrap and supplying processed recycled metal products to industries across India.

This website serves as a lead-generation platform where:

* Suppliers can submit scrap inquiries
* Buyers can request metal products
* Businesses can learn about the company's services
* Potential clients can easily contact the company

---

## Features

### Business-Focused Landing Page

* Professional industrial design
* Trust-building layout
* Conversion-focused call-to-actions
* Mobile responsive design

### Supplier Lead Generation

* Scrap inquiry form
* Company information collection
* Quantity and material details
* Email notification system

### Buyer Lead Generation

* Product inquiry forms
* Material requirement submission
* Direct business contact workflow

### Company Information

* About Us
* Business Process
* Industries Served
* Company Values
* Why Choose Us

### Gallery

* Factory Images
* Processing Facilities
* Material Handling
* Finished Products

### Contact System

* Contact form
* WhatsApp integration
* Email integration
* Business information

---

## Technology Stack

### Frontend

* Next.js 16
* TypeScript
* React
* Tailwind CSS
* Shadcn UI

### Forms & Validation

* React Hook Form
* Zod

### Animations

* Framer Motion
* GSAP

### Email Services

* Resend

### Deployment

* Vercel

---

## Project Structure

```text
src
├── app
│   ├── about
│   ├── buy-metals
│   ├── contact
│   ├── gallery
│   ├── metals
│   ├── process
│   ├── sell-scrap
│   └── api
│
├── components
│   ├── layout
│   ├── sections
│   ├── forms
│   └── ui
│
├── constants
├── lib
├── hooks
├── types
└── assets
```

---

## Pages

### Home

* Hero Section
* Company Statistics
* What We Buy
* What We Sell
* Process Overview
* Industries Served
* Testimonials
* Lead Generation CTA

### About

* Company Story
* Mission
* Vision
* Values
* Why Choose Us

### Sell Scrap

Supplier inquiry form for industrial scrap sellers.

### Buy Metals

Buyer inquiry form for companies looking to purchase processed metals.

### Metals

Detailed information about:

* Copper Scrap
* Silver Scrap
* Brass Scrap
* Aluminium Scrap
* Steel Scrap

### Process

Complete recycling and supply workflow.

### Gallery

Company facilities and operations showcase.

### Contact

Business contact information and inquiry form.

---

## Getting Started

### Clone Repository

```bash
git clone https://github.com/your-username/zeeshan-metal.git
```

```bash
cd zeeshan-metal
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create:

```text
.env.local
```

Add:

```env
RESEND_API_KEY=your_resend_api_key
```

---

### Run Development Server

```bash
npm run dev
```

Visit:

```text
http://localhost:3000
```

---

### Production Build

```bash
npm run build
```

```bash
npm start
```

---

## Email Configuration

This project uses Resend for email delivery.

Required environment variable:

```env
RESEND_API_KEY=your_api_key
```

For production deployments:

* Verify sending domain
* Configure DNS records
* Update sender email address

---

## SEO Features

* Next.js Metadata API
* Open Graph Tags
* Twitter Cards
* Sitemap
* Robots.txt
* Structured Data
* Mobile Optimization

---

## Performance

* Server Components
* Static Generation
* Optimized Images
* Code Splitting
* Lazy Loading
* TypeScript Type Safety

---

## Future Enhancements

Potential future upgrades:

* Admin Dashboard
* CRM Integration
* Inventory Management
* Lead Analytics
* Customer Portal
* Multi-language Support

---

## Deployment

Recommended deployment platform:

Vercel

```bash
npm install -g vercel
```

```bash
vercel
```

---

## Business Goal

This website is designed to:

* Increase supplier inquiries
* Generate buyer leads
* Improve business credibility
* Enhance online visibility
* Support long-term business growth

---

## License

This project is proprietary and developed for Zeeshan Metal Recycling.

All rights reserved.

---

## Contact

**Zeeshan Metal Recycling**

For business inquiries, partnerships, or support, please contact the company through the website contact form or official business channels.
