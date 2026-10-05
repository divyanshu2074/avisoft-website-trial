import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Layers,
  Cpu,
} from "lucide-react";
import { industriesData, IndustryItem } from "@/data/industriesData";
import { servicesData } from "@/data/servicesData";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ClientLogoStrip } from "@/components/home/ClientLogoStrip";
import { ContactCTAForm } from "@/components/home/ContactCTAForm";

export function generateStaticParams() {
  return industriesData.map((ind) => ({
    slug: ind.slug,
  }));
}

export default function IndividualIndustryPage({
  params,
}: {
  params: { slug: string };
}) {
  const industry = industriesData.find((i) => i.slug === params.slug);

  if (!industry) {
    notFound();
  }

  // Other industries for recommendations
  const otherIndustries = industriesData.filter((i) => i.slug !== industry.slug);

  // Industry tailored challenges
  const industryChallenges = [
    {
      title: "Translating Concepts to Production",
      desc: "Moving beyond experimentation to build stable, secure software solutions aligned with specific operational workflows.",
    },
    {
      title: "Data Structuring & Integration",
      desc: "Preparing, cleaning, and piping legacy or multi-channel data to power real-time dashboards and intelligent applications.",
    },
    {
      title: "Security, Compliance & Data Governance",
      desc: "Enforcing rigorous domain-specific security standards, encryption protocols, and regulatory audit compliance.",
    },
    {
      title: "Scalability Under High Concurrency",
      desc: "Ensuring zero-downtime reliability during traffic surges, peak seasonal demand, and multi-tenant expansion.",
    },
  ];

  // Specific tailored solutions for this industry (Highlighting section without horizontal cards)
  const industrySolutions = [
    {
      title: `Custom ${industry.title} Platforms`,
      desc: "Bespoke digital platforms engineered around your organizational workflows, partner ecosystems, and customer touchpoints.",
    },
    {
      title: "AI Integration & Workflow Automation",
      desc: "Integrating intelligent copilots, predictive models, and autonomous agents directly into day-to-day operations.",
    },
    {
      title: "Legacy Modernization & Cloud Migration",
      desc: "Refactoring legacy monolithic architectures to modern cloud-native microservices with zero operational disruption.",
    },
    {
      title: "Real-Time Data Pipelines & Analytics",
      desc: "Building streaming and batch data pipelines that provide actionable insights, unified reporting, and low latency.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs
          items={[
            { label: "Industries", href: "/industries" },
            { label: industry.title },
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="pt-8 pb-16 lg:pt-12 lg:pb-20 border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-brand-blue text-xs font-semibold">
              <span>{industry.title} Industry Practice</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              {industry.tagline}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed font-normal">
              {industry.heroDescription}
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#contact-cta"
                className="px-6 py-3.5 bg-brand-blue hover:bg-brand-blue-hover text-white text-sm font-semibold rounded-lg shadow-sm transition-colors"
              >
                Get a Free Consultation →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Client Logo Strip */}
      <ClientLogoStrip />

      {/* Industry Challenges */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-2">
              Industry Challenges
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Key Challenges in {industry.title}
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Operating in {industry.title} requires addressing critical architectural, regulatory, and scalability constraints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industryChallenges.map((ch, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-slate-300 transition-colors flex items-start space-x-4"
              >
                <div className="p-2 rounded-lg bg-red-50 text-red-600 shrink-0 mt-0.5">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">{ch.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{ch.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Highlighting Section (Vertical detailed blocks as requested in doc) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-2">
              Engineered Solutions
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Solutions for {industry.title}
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              From intelligent applications to resilient platforms, Avisoft delivers tailored engineering solutions designed specifically for {industry.title} ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industrySolutions.map((sol, idx) => (
              <div
                key={idx}
                className="bg-slate-50/80 rounded-xl p-6 border border-slate-200 hover:border-brand-blue/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-blue-100/70 text-brand-blue flex items-center justify-center mb-4 text-xs font-bold font-mono">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{sol.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{sol.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/60">
                  <span className="text-[11px] font-semibold text-brand-blue">
                    Enterprise SLA Ready
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Avisoft Helps (Capabilities Grid) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-2">
              Cross-Functional Capabilities
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              How Avisoft Helps {industry.title} Businesses
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Avisoft combines AI capabilities, software engineering, data engineering, deployment, and technology consultancy to help businesses build and evolve intelligent products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.slice(0, 6).map((service) => (
              <div
                key={service.slug}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-brand-blue/60 transition-colors flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{service.summary}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {service.capabilitiesBadges.slice(0, 3).map((b, bIdx) => (
                      <span
                        key={bIdx}
                        className="px-2 py-0.5 text-[10px] rounded bg-slate-100 text-slate-700 font-medium"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-xs font-semibold text-brand-blue hover:text-brand-blue-hover"
                  >
                    Explore {service.title} →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-flex items-center text-xs font-semibold text-brand-blue hover:underline"
            >
              Explore All Avisoft Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Industry Case Study */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-2">
              Featured Case Study
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              {industry.title} Success Story
            </h2>
          </div>

          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-8 sm:p-12 shadow-xl border border-slate-700">
            <div className="max-w-3xl space-y-4">
              <div className="inline-block px-3 py-1 rounded bg-blue-500/20 text-sky-300 text-xs font-semibold">
                Client Engagement: {industry.caseStudy.title}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                {industry.caseStudy.subtitle}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                {industry.caseStudy.description}
              </p>
              <div className="pt-4">
                <Link
                  href="/case-studies"
                  className="inline-flex items-center px-5 py-2.5 rounded-lg bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-semibold transition-colors"
                >
                  Explore All Case Studies →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Industries Exploration */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Other Industries You Can Explore
            </h2>
            <p className="mt-2 text-slate-600 text-xs leading-relaxed">
              Explore other industries where Avisoft’s technology capabilities support different business and technology requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {otherIndustries.slice(0, 4).map((ind) => (
              <div
                key={ind.slug}
                className="bg-white rounded-xl p-5 border border-slate-200 hover:border-brand-blue/60 shadow-2xs transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2">{ind.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {ind.heroDescription}
                  </p>
                </div>
                <Link
                  href={`/industries/${ind.slug}`}
                  className="inline-flex items-center text-xs font-semibold text-brand-blue hover:text-brand-blue-hover"
                >
                  Explore {ind.title} →
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/industries"
              className="text-xs font-semibold text-brand-blue hover:underline"
            >
              View All Industries →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTAForm />
    </div>
  );
}
