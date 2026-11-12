<div align="center">

# 🌿 AyurCommerce — Cross-Border Ayurvedic E-Commerce Platform

### *Bringing Authentic Ayurveda from India to the World*

A production-grade, full-stack SaaS platform enabling Ayurvedic brands and manufacturers to sell authentic herbal products globally with a seamless, secure, and scalable shopping experience.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)

[![Status](https://img.shields.io/badge/status-active--development-yellow?style=flat-square)]()
[![Version](https://img.shields.io/badge/version-0.1.0--MVP-blue?style=flat-square)]()
[![License](https://img.shields.io/badge/license-Proprietary-red?style=flat-square)]()
[![Made in India](https://img.shields.io/badge/made%20in-India-ff9933?style=flat-square)]()

**Company:** AyurCommerce Technologies &nbsp;•&nbsp; **Lead Developer:** Abi

[About](#-about-the-project) • [Features](#-core-features) • [Tech Stack](#-technology-stack) • [Installation](#-installation) • [Roadmap](#-future-roadmap) • [Contributing](#-contributing)

</div>

---

## 📖 About the Project

**AyurCommerce** is a full-stack, cross-border e-commerce platform purpose-built for the global Ayurvedic and herbal wellness industry. It connects verified Indian Ayurvedic manufacturers and brands directly with international customers — starting with the United States — removing traditional middlemen, ensuring product authenticity, and delivering a modern, trustworthy shopping experience.

Unlike generic e-commerce templates, AyurCommerce is architected from the ground up around the specific needs of the Ayurveda vertical: ingredient transparency, certification badges (GMP, AYUSH, USDA Organic), cross-border logistics, multi-currency pricing, and compliance-aware product listings — all wrapped in a fast, SEO-optimized, enterprise-grade codebase.

The platform is designed as a **multi-tenant-ready SaaS foundation**, starting with a single-vendor MVP and evolving into a full marketplace supporting multiple Ayurvedic brands, vendors, and delivery partners.

---

## 🎯 Project Vision

> *To become the most trusted global gateway for authentic Ayurveda — empowering Indian manufacturers with borderless market access, and empowering customers worldwide with verified, high-quality herbal products delivered with complete transparency.*

Our long-term vision is to build the **"Shopify + Amazon Global" equivalent for Ayurveda** — a platform trusted by brands for its compliance-first infrastructure, and trusted by customers for its authenticity guarantees and world-class shopping experience.

---

## ✨ Core Features

### 🌐 Public Website
- 🏠 Dynamic, CMS-managed homepage with hero banners & featured collections
- 🔍 Advanced product search with autocomplete & typo tolerance
- 🗂️ Category & sub-category browsing with faceted filters (ailment, ingredient, brand, price)
- 📦 Rich product detail pages (ingredients, usage, certifications, reviews)
- 📱 Fully responsive, mobile-first design
- 🚀 SEO-optimized static & server-rendered pages
- 🌍 Multi-currency price display (Phase 2)

### 🛍️ Customer Portal
- 🛒 Persistent shopping cart (guest + authenticated)
- ❤️ Wishlist management
- 💳 Secure checkout with saved addresses & payment methods
- 💰 Multiple payment gateways (Stripe for international, Razorpay for domestic)
- 📦 Real-time order tracking & shipment status
- 👤 Customer profile & order history dashboard
- ⭐ Verified purchase reviews & ratings
- 🎟️ Coupon & discount code application
- 🔔 Order & shipping notifications (email/SMS)

### 🏪 Vendor Dashboard *(Future Module)*
- 📦 Product & catalog management
- 📊 Vendor-specific sales dashboard
- 🧾 Order fulfillment management
- 📈 Inventory tracking & low-stock alerts
- 💵 Payout & commission reports

### 🛠️ Admin Dashboard
- 📊 Centralized analytics dashboard (revenue, orders, traffic)
- 🧴 Product, category & brand management
- 📦 Order management & fulfillment pipeline
- 👥 Customer management
- 🎟️ Coupon & promotions engine
- ⭐ Review moderation
- 📦 Inventory management with stock alerts
- 🖥️ CMS for homepage, banners & static pages
- ⚙️ Website & global settings
- 📈 Sales & performance reports

---

## 🔄 Business Workflow

```
                         ┌─────────────────────────┐
                         │   Ayurvedic Manufacturer │
                         │   (Product Onboarding)   │
                         └────────────┬─────────────┘
                                      │
                                      ▼
                         ┌─────────────────────────┐
                         │   Admin Verification &   │
                         │   Compliance Approval    │
                         └────────────┬─────────────┘
                                      │
                                      ▼
                         ┌─────────────────────────┐
                         │   Product Published to   │
                         │   Storefront (Catalog)   │
                         └────────────┬─────────────┘
                                      │
              ┌───────────────────────┼───────────────────────┐
              ▼                       ▼                       ▼
     ┌────────────────┐     ┌────────────────┐      ┌────────────────┐
     │ Customer Browses │    │ Search & Filter │      │ Wishlist / Cart │
     └────────┬────────┘     └────────┬────────┘      └────────┬────────┘
              └───────────────────────┼───────────────────────┘
                                      ▼
                         ┌─────────────────────────┐
                         │   Secure Checkout Flow   │
                         │  (Address → Payment)     │
                         └────────────┬─────────────┘
                                      │
                                      ▼
                         ┌─────────────────────────┐
                         │  Payment Gateway (Stripe/ │
                         │      Razorpay)            │
                         └────────────┬─────────────┘
                                      │
                                      ▼
                         ┌─────────────────────────┐
                         │   Order Created & Sent   │
                         │      to Admin Panel      │
                         └────────────┬─────────────┘
                                      │
                                      ▼
                         ┌─────────────────────────┐
                         │  Fulfillment → Cross-    │
                         │  Border Shipping         │
                         └────────────┬─────────────┘
                                      │
                                      ▼
                         ┌─────────────────────────┐
                         │  Order Tracking & Post-  │
                         │  Purchase Reviews        │
                         └─────────────────────────┘
```

---

## 🧰 Technology Stack

| Layer                  | Technology                          | Purpose                                      |
|-------------------------|--------------------------------------|-----------------------------------------------|
| **Framework**            | Next.js 15 (App Router)             | Full-stack React framework, SSR/SSG/ISR       |
| **Frontend Library**     | React 19                            | Component-based UI                            |
| **Language**             | TypeScript (Strict Mode)            | Type safety across the codebase               |
| **Styling**              | Tailwind CSS v4                     | Utility-first, responsive styling             |
| **UI Components**        | shadcn/ui                           | Accessible, composable component library      |
| **Animations**           | Framer Motion                       | Smooth UI transitions & micro-interactions    |
| **Forms**                | React Hook Form                     | Performant, uncontrolled form state           |
| **Validation**           | Zod                                  | Schema-based runtime validation               |
| **Authentication**       | Auth.js                             | Secure session & OAuth-based authentication   |
| **Database**             | PostgreSQL                          | Relational, ACID-compliant primary database   |
| **ORM**                  | Prisma                              | Type-safe database access & migrations        |
| **State Management**     | Zustand                             | Lightweight global client state               |
| **Data Fetching**        | TanStack Query                      | Server-state caching & synchronization        |
| **Media Storage**        | Cloudinary                          | Image/video storage, optimization & CDN       |
| **Payments**             | Stripe / Razorpay                   | International & domestic payment processing  |
| **Maps**                 | Google Maps API                     | Address autocomplete & delivery geolocation   |
| **Deployment**           | Vercel                              | CI/CD, edge deployment, preview environments |
| **Version Control**      | Git & GitHub                        | Source control & collaboration               |

---

## 📁 Project Structure

```
ayurcommerce/
├── src/
│   ├── app/                    # Next.js App Router (routes, layouts, pages)
│   │   ├── (public)/           # Public storefront routes
│   │   ├── (customer)/         # Customer portal routes
│   │   ├── (vendor)/           # Vendor dashboard routes
│   │   ├── (admin)/            # Admin dashboard routes
│   │   └── api/                # API route handlers
│   ├── components/             # Shared/reusable UI components
│   │   ├── ui/                 # shadcn/ui primitives
│   │   ├── layout/             # Header, footer, nav, sidebar
│   │   └── shared/              # Cross-feature shared components
│   ├── features/               # Feature-based modules (domain-driven)
│   │   ├── products/
│   │   ├── cart/
│   │   ├── checkout/
│   │   ├── orders/
│   │   ├── reviews/
│   │   └── admin/
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Core libraries (auth, db, payments config)
│   ├── services/               # Business logic & external API integrations
│   ├── prisma/                 # Prisma schema & migrations
│   │   ├── schema.prisma
│   │   └── migrations/
│   ├── types/                  # Shared TypeScript types & interfaces
│   ├── utils/                  # Utility/helper functions
│   └── middleware.ts           # Auth & route protection middleware
├── public/                     # Static assets (images, fonts, icons)
├── .env.example                 # Environment variable template
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## ⚙️ Installation

### Prerequisites
- Node.js `v18.18+`
- PostgreSQL `v14+`
- npm / pnpm / yarn

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/your-org/ayurcommerce.git

# 2. Navigate into the project directory
cd ayurcommerce

# 3. Install dependencies
npm install

# 4. Configure environment variables
cp .env.example .env
# then fill in the required values (see below)

# 5. Run database migrations
npx prisma migrate dev

# 6. Start the development server
npm run dev
```

The app will be available at `http://localhost:3000`.

---

## 🔐 Environment Variables

Create a `.env` file in the project root with the following variables:

```env
# Database
DATABASE_URL=

# Authentication
AUTH_SECRET=
NEXTAUTH_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# Media Storage
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# Payments
STRIPE_SECRET_KEY=
STRIPE_PUBLISHABLE_KEY=
```

> ⚠️ Never commit your `.env` file. It is excluded via `.gitignore` by default.

---

## ✅ MVP Features

- [x] Product catalog with categories & filters
- [x] Product detail pages with reviews
- [x] Cart & wishlist
- [x] Secure checkout with Stripe/Razorpay
- [x] Customer authentication (Auth.js)
- [x] Order tracking & history
- [x] Admin dashboard (products, orders, customers)
- [x] Coupon engine
- [x] CMS-managed homepage & banners
- [ ] Vendor dashboard
- [ ] Multi-currency support
- [ ] Mobile app

---

## 🗺️ Future Roadmap

### 🚀 Phase 2
- 📱 Native mobile app (iOS & Android)
- 🌍 Multi-language support (i18n)
- 💱 Multi-currency checkout
- 🎁 Loyalty & rewards program
- 🤖 AI-powered product recommendations

### 🚀 Phase 3
- 🏪 Full multi-vendor marketplace
- 🧑‍💼 Self-serve vendor onboarding portal
- 🤝 Affiliate & referral program
- 📊 Advanced analytics & BI dashboards
- 📣 Built-in marketing & campaign tools

---

## 🔒 Security

- 🔑 Role-Based Access Control (RBAC) across Customer, Vendor, and Admin roles
- 🪪 Secure session management via Auth.js (JWT-based)
- 🔒 Password hashing & salting (bcrypt/argon2)
- 🛡️ Protected & rate-limited API routes
- 💳 PCI-compliant payment handling (no card data stored on servers)
- 🌐 Environment variable-based secrets management
- 🍪 Secure, httpOnly session cookies
- 🚫 CSRF & XSS protection out of the box

---

## ⚡ Performance Goals

| Metric                | Target                          |
|-------------------------|----------------------------------|
| First Contentful Paint  | < 1.5s                          |
| Lighthouse Performance  | 90+                             |
| Lighthouse SEO          | 95+                              |
| Image Delivery          | Optimized via Cloudinary CDN    |
| Code Splitting          | Route-based automatic splitting |
| Lazy Loading            | Images & below-the-fold sections|

---

## 🏗️ Development Standards

- ✅ Clean, layered architecture (feature-driven structure)
- ✅ SOLID principles across services & modules
- ✅ Fully typed codebase — no implicit `any`
- ✅ Reusable, composable UI components
- ✅ Scalable, domain-oriented folder structure
- ✅ Mobile-first, fully responsive design
- ✅ Consistent linting & formatting (ESLint + Prettier)
- ✅ Enterprise-grade commit & branching conventions

---

## 🧭 Development Roadmap

```
Phase 0: Planning & Architecture
        │
        ▼
Phase 1: Core MVP (Storefront + Checkout + Admin)
        │
        ▼
Phase 2: Vendor Module + Multi-currency + i18n
        │
        ▼
Phase 3: Full Marketplace + Mobile App + AI Features
        │
        ▼
Phase 4: Scale, Compliance Expansion & New Markets
```

---

## 📊 Current Status

| Module                  | Status          |
|--------------------------|-----------------|
| Public Storefront         | 🟢 In Progress  |
| Customer Portal            | 🟢 In Progress  |
| Admin Dashboard             | 🟡 Planned      |
| Vendor Dashboard             | ⚪ Not Started  |
| Payment Integration           | 🟡 Planned      |
| CMS & Homepage Builder          | 🟡 Planned      |
| Mobile App                        | ⚪ Not Started  |

**Legend:** 🟢 In Progress &nbsp;•&nbsp; 🟡 Planned &nbsp;•&nbsp; ⚪ Not Started &nbsp;•&nbsp; 🔵 Completed

---

## 🤝 Contributing

This project is currently developed and maintained as a private/proprietary initiative. External contributions are not open at this stage.

If you are part of the internal team:

1. Create a feature branch from `develop`: `git checkout -b feature/your-feature-name`
2. Follow the established coding standards & commit conventions
3. Ensure all type checks and lint rules pass: `npm run lint && npm run type-check`
4. Submit a pull request with a clear description and testing notes
5. Request review from at least one team member before merging

---

## 📄 License

This project is licensed under a **Proprietary License**. All rights reserved. Unauthorized copying, distribution, or use of this codebase, in whole or in part, is strictly prohibited without explicit written permission.

---

<div align="center">

### Built with ❤️ for a healthier, more connected world

*"Authentic Ayurveda, delivered without borders."*

⭐ **If you believe in this vision, star this repository!** ⭐


</div>
