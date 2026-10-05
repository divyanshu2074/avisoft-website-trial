export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  industrySlug: string;
  description: string;
  metrics: string[];
  logo?: string;
  tags: string[];
  highlight?: boolean;
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: "avifires",
    client: "AviFires",
    title: "Engineered to Improve Investment Conversions and Reduce Drop-offs with AI-Driven Advisory",
    industry: "Fintech & AI",
    industrySlug: "financial-services-fintech",
    description:
      "Built an AI-powered mutual fund advisory platform that uses financial goals, risk profiles, and investor behaviour to deliver personalized investment recommendations.",
    metrics: [
      "100% Best Practices",
      "100% SEO Score",
      "97% Accessibility",
      "Real-time Portfolio Rebalancing",
    ],
    tags: ["AI Advisory", "Next.js", "Financial Modeling", "Risk Analytics"],
    highlight: true,
  },
  {
    id: "kddi-povo",
    client: "KDDI (povo 2.0)",
    title: "Enabled 100% digital onboarding and plan management for millions of telecom users across Japan",
    industry: "Telecom, Media & Streaming",
    industrySlug: "telecom-media-streaming",
    description:
      "Built a digital platform enabling users to purchase, manage, and customize mobile plans with on-demand data add-ons.",
    metrics: [
      "1M+ Active Users",
      "5-Minute Digital Onboarding",
      "100% Digital Plan Lifecycle",
    ],
    logo: "/case-studies/kddi-povo.svg",
    tags: ["High-Scale Telecom", "Microservices", "React", "Cloud Architecture"],
    highlight: true,
  },
  {
    id: "fdb",
    client: "First Databank (FDB)",
    title: "Improved core system performance by 60% while modernising a legacy drug data platform",
    industry: "HealthTech & MedTech",
    industrySlug: "healthtech-medtech",
    description:
      "Modernized a critical drug data management application by migrating from .NET 4 to .NET 7, improving performance, stability, and future scalability.",
    metrics: [
      "60% Faster Operations",
      "100% Framework Migration",
      "3× Response Speed",
    ],
    logo: "/case-studies/universal-orlando.svg",
    tags: [".NET 7", "Healthcare Modernization", "Database Optimization"],
    highlight: true,
  },
  {
    id: "galaxy-one",
    client: "GalaxyOne by Galaxy Digital",
    title: "Enabled unified multi-asset investing by building a modular fintech web platform",
    industry: "Financial Services & Fintech",
    industrySlug: "financial-services-fintech",
    description:
      "Built key frontend modules that bring banking, crypto, and equity investments together within a unified digital experience.",
    metrics: [
      "90% SEO Rating",
      "180% Performance Improvement",
      "89% Accessibility",
    ],
    logo: "/case-studies/galaxy-one.svg",
    tags: ["Multi-Asset Banking", "Crypto & Equities", "Modular UI"],
    highlight: true,
  },
  {
    id: "clima",
    client: "Clima",
    title: "Reduced carbon reporting effort by 80% by building an automated Net Zero management platform",
    industry: "Enterprise SaaS & Sustainability",
    industrySlug: "enterprise-saas",
    description:
      "Built a multi-tenant sustainability platform that automates carbon tracking, emissions calculations, compliance reporting, and reduction initiatives.",
    metrics: [
      "80% Reporting Effort Reduction",
      "Scope 1, 2 & 3 Coverage",
      "100% Compliance Automation",
    ],
    tags: ["Carbon Accounting", "Multi-Tenant SaaS", "Automated Compliance"],
    highlight: false,
  },
  {
    id: "homebazaar",
    client: "Homebazaar",
    title: "Enabled digital property discovery at scale by building a technology-driven real estate platform",
    industry: "Real Estate",
    industrySlug: "real-estate",
    description:
      "Built and enhanced a digital property platform that helps users discover, evaluate, and transact properties with end-to-end assistance.",
    metrics: [
      "2.5 Lakh+ Buyers Served",
      "5+ Major Cities",
      "90% Accessibility Score",
    ],
    logo: "/case-studies/home-bazaar.svg",
    tags: ["PropTech", "Search & Discovery", "High-Concurrency"],
    highlight: true,
  },
  {
    id: "spendgo",
    client: "Spendgo",
    title: "Enabled unified loyalty experiences across channels by building a scalable customer engagement platform",
    industry: "Loyalty & Rewards",
    industrySlug: "loyalty-rewards",
    description:
      "Built a multi-channel loyalty and engagement platform connecting rewards, promotions, and customer interactions across in-store, mobile, and online experiences.",
    metrics: [
      "1200% More Customer Interactions",
      "92% Repeat Purchase Rate",
      "400+ Tech Integrations",
    ],
    logo: "/case-studies/spendego.svg",
    tags: ["Omnichannel Loyalty", "Data Engineering", "POS Integrations"],
    highlight: true,
  },
  {
    id: "yapsody",
    client: "Yapsody",
    title: "Reduced onsite checkout time by 65% by implementing a cashless iPad POS system",
    industry: "Retail & E-Commerce",
    industrySlug: "retail-ecommerce",
    description:
      "Built an iPad-based POS application for high-frequency event environments, enabling faster ticket sales, integrated payments, and attendee check-ins.",
    metrics: [
      "290% Higher Device Throughput",
      "65% Faster Checkout",
      "40% Shorter Wait Times",
    ],
    logo: "/case-studies/yapsody.svg",
    tags: ["POS Engineering", "Offline Sync", "Payment Gateways"],
    highlight: true,
  },
  {
    id: "helical-insight",
    client: "Helical Insight",
    title: "Enabled customizable BI workflows by building an open-source analytics platform with 360+ APIs",
    industry: "Enterprise SaaS & Analytics",
    industrySlug: "enterprise-saas",
    description:
      "Built and enhanced Helical Insight to enable businesses to create, customize, and deploy analytics workflows with self-service reporting, embedded dashboards, and multi-source data integration.",
    metrics: [
      "360+ Custom APIs",
      "Multi-Tenant Embedded Dashboards",
      "Self-Service Reporting Engine",
    ],
    logo: "/case-studies/helical-insight.svg",
    tags: ["Business Intelligence", "API Architecture", "Data Pipelines"],
    highlight: false,
  },
  {
    id: "pnc-bank",
    client: "PNC Bank",
    title: "Improved system performance and scalability by migrating to .NET 7 and modernizing core modules",
    industry: "Financial Services & Fintech",
    industrySlug: "financial-services-fintech",
    description:
      "Modernized a financial application for PNC Bank by migrating from legacy .NET to .NET 7, optimizing APIs, and enhancing core modules for better performance and scalability.",
    metrics: [
      "Sub-100ms API Latency",
      "Enterprise Banking Compliance",
      "High Reliability Architecture",
    ],
    logo: "/case-studies/pnc-bank.svg",
    tags: ["Banking Modernization", ".NET 7", "Enterprise Scalability"],
    highlight: false,
  },
];
