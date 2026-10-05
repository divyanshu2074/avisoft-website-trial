"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Cloud,
  Code,
  Database,
  Layers,
  Workflow,
  Compass,
  Users,
  CheckCircle2,
} from "lucide-react";
import { servicesData } from "@/data/servicesData";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ConsultationModal } from "@/components/common/ConsultationModal";
import { ContactCTAForm } from "@/components/home/ContactCTAForm";

const iconMap: Record<string, any> = {
  "ai-solutions": Bot,
  "ai-deployment": Cloud,
  "custom-software": Code,
  "data-engineering": Database,
  "enterprise-platform-services": Layers,
  "saas-implementation": Workflow,
  "end-to-end-consultancy": Compass,
  "hire-ai-native-developers": Users,
};

export default function ServicesLandingPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Breadcrumb Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={[{ label: "Services" }]} />
      </div>

      {/* Hero Section */}
      <section className="pt-8 pb-16 lg:pt-12 lg:pb-20 border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-brand-blue text-xs font-semibold">
              <span>Full-Lifecycle Engineering</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Technology Services to Build, Modernize, and Scale
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              From AI and custom software to data engineering, enterprise platforms, SaaS implementation, and technology consultancy, Avisoft helps businesses build and evolve their digital products and technology platforms.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => setIsConsultationOpen(true)}
                className="px-6 py-3 bg-brand-blue hover:bg-brand-blue-hover text-white text-sm font-semibold rounded-lg shadow-sm transition-colors"
              >
                Get a Free Consultation →
              </button>
              <Link
                href="/case-studies"
                className="px-6 py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg shadow-2xs transition-colors"
              >
                Explore Case Studies →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Our Services</h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              From AI solutions and custom software to data engineering, enterprise platforms, SaaS implementation, and technology consultancy, our services help businesses build, modernize, and scale their technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service) => {
              const Icon = iconMap[service.slug] || Code;
              return (
                <div
                  key={service.slug}
                  className="bg-white rounded-xl p-6 border border-slate-200 hover:border-brand-blue shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center mb-5 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-blue transition-colors">
                      {service.title}
                    </h3>

                    <p className="mt-2.5 text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {service.summary}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Capabilities
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {service.capabilitiesBadges.map((badge, bIdx) => (
                          <span
                            key={bIdx}
                            className="inline-block px-2 py-0.5 text-[11px] rounded bg-slate-100 text-slate-700 font-medium"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center text-xs font-semibold text-brand-blue hover:text-brand-blue-hover group-hover:translate-x-0.5 transition-all"
                    >
                      Explore {service.title}
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-2">
              Our Methodology
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">How We Work</h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              From understanding your requirements to implementing the right technology solution, we work closely with your team through every stage of the journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Understand",
                desc: "Understand your business, requirements, existing technology environment, and project objectives.",
              },
              {
                step: "02",
                title: "Plan",
                desc: "Define the right technology approach, architecture, scope, and implementation plan for your requirements.",
              },
              {
                step: "03",
                title: "Build",
                desc: "Design, develop, integrate, and test the solution with a focus on quality, scalability, and your business requirements.",
              },
              {
                step: "04",
                title: "Deploy & Support",
                desc: "Take the solution into its required environment and provide the support needed for continued improvements and scale.",
              },
            ].map((st) => (
              <div
                key={st.step}
                className="bg-white rounded-xl p-6 border border-slate-200 relative"
              >
                <div className="text-3xl font-extrabold text-blue-100 font-mono mb-2">
                  {st.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{st.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High Contrast Full-Width Strip for Industries */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold text-white mb-2">
              Need a Solution for Your Specific Industry?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Explore how Avisoft's technology services can support businesses across financial services and fintech, retail and e-commerce, healthtech and medtech, telecom and media, real estate, travel and tourism, loyalty and rewards, enterprise SaaS, government technology, education, and AI & emerging technology.
            </p>
          </div>
          <div>
            <Link
              href="/industries"
              className="inline-flex items-center px-6 py-3.5 bg-brand-blue hover:bg-brand-blue-hover text-white text-sm font-semibold rounded-lg shadow-md transition-colors whitespace-nowrap"
            >
              <span>Explore Industries</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final Contact CTA Form */}
      <ContactCTAForm />

      {/* Explore More section */}
      <section className="py-16 bg-slate-100/70 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-slate-900 mb-8">Explore More</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Case Studies</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  See how Avisoft helps organizations modernize legacy systems, build digital products, apply AI, and scale technology platforms across industries.
                </p>
              </div>
              <Link href="/case-studies" className="text-xs font-semibold text-brand-blue hover:underline">
                Explore Case Studies →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Industries</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Explore the industries we serve and discover how our technology services can address different business and technology requirements.
                </p>
              </div>
              <Link href="/industries" className="text-xs font-semibold text-brand-blue hover:underline">
                Explore Industries →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-900 mb-1">News & Insights</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Explore technology insights, perspectives, and updates from Avisoft's engineering leadership.
                </p>
              </div>
              <Link href="/news" className="text-xs font-semibold text-brand-blue hover:underline">
                Explore Insights →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Careers</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Explore opportunities to work with Avisoft and become part of our engineering and technology team.
                </p>
              </div>
              <Link href="/careers" className="text-xs font-semibold text-brand-blue hover:underline">
                Explore Careers →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}
