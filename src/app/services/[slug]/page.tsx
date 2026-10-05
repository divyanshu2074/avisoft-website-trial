import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Award,
  Sparkles,
} from "lucide-react";
import { servicesData, ServiceItem } from "@/data/servicesData";
import { caseStudiesData } from "@/data/caseStudiesData";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ClientLogoStrip } from "@/components/home/ClientLogoStrip";
import { ContactCTAForm } from "@/components/home/ContactCTAForm";

// Statically generate all 8 service pages for static export
export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default function IndividualServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  // Get related case studies
  const relatedStudies = caseStudiesData.filter((cs) =>
    service.relatedCaseStudyIds.includes(cs.id)
  );

  // Get other services for exploration
  const otherServices = servicesData.filter((s) => s.slug !== service.slug);

  return (
    <div className="bg-white">
      {/* Breadcrumb Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs
          items={[
            { label: "Services", href: "/services" },
            { label: service.title },
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="pt-8 pb-16 lg:pt-12 lg:pb-20 border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-brand-blue text-xs font-semibold">
              <span>{service.title} Practice</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              {service.tagline}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed font-normal">
              {service.heroDescription}
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#contact-cta"
                className="px-6 py-3.5 bg-brand-blue hover:bg-brand-blue-hover text-white text-sm font-semibold rounded-lg shadow-sm transition-colors"
              >
                Get a Free Consultation →
              </a>
              {service.slug === "hire-ai-native-developers" && (
                <a
                  href="#contact-cta"
                  className="px-6 py-3.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 text-sm font-semibold rounded-lg shadow-2xs transition-colors"
                >
                  Start a No-Cost Trial →
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Client Logo Strip */}
      <ClientLogoStrip />

      {/* Capabilities Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-2">
              Core Capabilities
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              {service.title} We Build & Deliver
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Explore our comprehensive capabilities tailored to your architectural, domain, and operational specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-brand-blue/60 shadow-sm transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center mb-4 text-xs font-bold font-mono">
                  {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{cap.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Extra Section (e.g. Databricks for Data Engineering) */}
      {service.extraSection && (
        <section className="py-20 bg-gradient-to-br from-slate-900 to-brand-navy text-white border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-700/60 text-sky-400 text-xs font-semibold mb-3">
                <Award className="w-3.5 h-3.5" />
                <span>{service.extraSection.subtitle}</span>
              </div>
              <h2 className="text-3xl font-bold text-white tracking-tight">
                {service.extraSection.title}
              </h2>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                {service.extraSection.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.extraSection.features.map((feat, fIdx) => (
                <div
                  key={fIdx}
                  className="bg-slate-800/80 rounded-xl p-6 border border-slate-700/70 hover:border-slate-600 transition-colors"
                >
                  <h3 className="text-base font-bold text-white mb-2">{feat.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{feat.description}</p>
                </div>
              ))}
            </div>

            {service.extraSection.bullets && (
              <div className="mt-10 p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {service.extraSection.bullets.map((b, bIdx) => (
                  <div key={bIdx} className="flex items-center space-x-2 text-xs text-sky-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Technologies Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-2">
              Technologies & Frameworks
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Technology We Use for {service.title}
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              We work with modern, proven technologies and platforms to build reliable, high-performance systems.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {service.technologies.map((tech, tIdx) => (
              <div
                key={tIdx}
                className="bg-slate-50 hover:bg-white rounded-xl p-4 border border-slate-200 hover:border-brand-blue/50 text-center transition-all flex flex-col items-center justify-center h-24"
              >
                <span className="text-xs font-bold text-slate-800 tracking-tight">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Avisoft + Our Process */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Why Choose Avisoft */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-2">
                  Why Avisoft
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Why Choose Avisoft for {service.title}
                </h2>
              </div>

              <div className="space-y-4">
                {service.whyChoose.map((item, iIdx) => (
                  <div key={iIdx} className="p-4 bg-white rounded-xl border border-slate-200">
                    <p className="text-xs text-slate-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Process */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-2">
                  Delivery Framework
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Our Process
                </h2>
              </div>

              <div className="space-y-4">
                {service.process.map((step) => (
                  <div
                    key={step.step}
                    className="p-5 bg-white rounded-xl border border-slate-200 flex items-start space-x-4"
                  >
                    <div className="text-xl font-bold text-brand-blue font-mono shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 mb-1">{step.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedStudies.length > 0 && (
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-2">
                Proven Track Record
              </div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                Related Case Studies
              </h2>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                Explore how Avisoft has applied engineering and technology expertise to solve real-world challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedStudies.map((study) => (
                <div
                  key={study.id}
                  className="bg-slate-50/60 rounded-xl p-6 border border-slate-200 hover:border-slate-300 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                        {study.client}
                      </span>
                      <span className="text-[11px] font-medium text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{study.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">{study.description}</p>
                  </div>
                  <div className="pt-4 border-t border-slate-200/70">
                    <Link
                      href="/case-studies"
                      className="inline-flex items-center text-xs font-semibold text-brand-blue hover:text-brand-blue-hover"
                    >
                      View Case Study Details
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/case-studies"
                className="text-xs font-semibold text-brand-blue hover:underline"
              >
                Explore All Case Studies →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Other Services You Can Explore (Horizontal Cards Without Images) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Other Services You Can Explore
            </h2>
            <p className="mt-2 text-slate-600 text-xs leading-relaxed">
              Explore other Avisoft services that support your technology, product, and engineering requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {otherServices.slice(0, 4).map((s) => (
              <div
                key={s.slug}
                className="bg-white rounded-xl p-5 border border-slate-200 hover:border-brand-blue/60 shadow-2xs transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {s.summary}
                  </p>
                </div>
                <Link
                  href={`/services/${s.slug}`}
                  className="inline-flex items-center text-xs font-semibold text-brand-blue hover:text-brand-blue-hover"
                >
                  Explore {s.title} →
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="text-xs font-semibold text-brand-blue hover:underline"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Final Contact Form */}
      <ContactCTAForm />
    </div>
  );
}
