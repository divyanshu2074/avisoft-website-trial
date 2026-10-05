# Avisoft Corporate Website

Modern, corporate-grade website for **Avisoft**, built with **Next.js** (App Router, TypeScript, Tailwind CSS) strictly implementing the specification documents and brand styling from `avisoft.io`.

Live demonstration target: [GitHub Pages Repository](https://github.com/divyanshu2074/avisoft-website-trial)

---

## Key Highlights & Pages

- **Homepage (`/`)**:
  - Hero banner with corporate tagline and consultation trigger
  - Trusted client logos strip (KDDI, PNC Bank, Galaxy Digital, Spendgo, Homebazaar, Yapsody, Helical Insight, Universal)
  - Our Services (8 capabilities overview with chip tags)
  - Industries We Serve (11 domains overview)
  - Staff Augmentation panel ("Hire AI-Native Developers")
  - Case Studies horizontal carousel (AviFires, KDDI, FDB, GalaxyOne, Clima, Homebazaar, Spendgo, Yapsody)
  - Categorized Technologies grid (Web, Mobile, Desktop, QA, Cloud, AI/Data)
  - "Let's Build Something That Matters" final CTA form with notification feedback
  - Frequently Asked Questions accordion (10 FAQs)
  - Corporate footer with locations (Mohali & Jammu with map links), phone numbers, email, and 5.0/5 LinkedIn rating
- **Services Landing & Individual Pages (`/services`, `/services/[slug]`)**:
  - AI Solutions (`/services/ai-solutions`)
  - AI Deployment (`/services/ai-deployment`)
  - Custom Software (`/services/custom-software`)
  - Data Engineering (`/services/data-engineering` - includes official Databricks Partner section)
  - Enterprise Platform Services (`/services/enterprise-platform-services`)
  - SaaS Implementation (`/services/saas-implementation`)
  - End-to-End Consultancy (`/services/end-to-end-consultancy`)
  - Hire AI-Native Developers (`/services/hire-ai-native-developers`)
- **Industries Landing & Individual Pages (`/industries`, `/industries/[slug]`)**:
  - 11 dedicated industry pages with challenges, solutions, capability mapping, and featured case studies.
- **Careers & Vacancies (`/careers`, `/careers/[roleId]`)**:
  - Value pillars, job openings, team testimonials ("Life at Avisoft"), and full job application modal/form.
- **News & Insights (`/news`, `/news/lpu-on-campus-drive`)**:
  - "Avisoft LPU Hiring Drive: What Makes a Good Engineer When AI Can Code?" with comparative table and industry survey citations.
- **Case Studies Catalog (`/case-studies`)**
- **Contact Us (`/contact-us`)**

---

## Brand Palette

- **Brand Blue**: `#0457A8` / `#005CA2`
- **Deep Navy**: `#0B132B` / `#0F172A`
- **Accent Gold**: `#D6AF37`
- **Success Green**: `#22C35E`
- **Surfaces**: `#FFFFFF` / `#F8FAFC`

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local dev server
npm run dev
# Visit http://localhost:3000

# 3. Static export build
npm run build
# Generated files output to ./out
```

---

## GitHub Pages Deployment

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) configured to automatically build and deploy the static site to GitHub Pages whenever changes are pushed to `main`.
