"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Database, Cpu, Layers, Workflow, Server, Lock } from "lucide-react";
import { industriesData } from "@/data/industriesData";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ConsultationModal } from "@/components/common/ConsultationModal";
import { ContactCTAForm } from "@/components/home/ContactCTAForm";

const challengeIcons = [
  Server,
  Database,
  Layers,
  Cpu,
  Workflow,
  ShieldCheck,
  Lock,
  ArrowRight,
];

export default function IndustriesLandingPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const challenges = [
    {
      title: "Legacy Technology Modernization",
      description:
        "Modernizing existing applications and technology platforms while maintaining business continuity, system stability, and compliance.",
    },
    {
      title: "Disconnected Systems & Data",
      description:
        "Connecting distributed applications, platforms, and databases across increasingly complex enterprise technology environments.",
    },
    {
      title: "Complex Integrations",
      description:
        "Integrating new solutions with existing applications, third-party APIs, legacy databases, and operational business workflows.",
    },
    {
      title: "Scalable Digital Products",
      description:
        "Building technology platforms that can gracefully support growing active users, transactional volumes, and compute demands.",
    },
    {
      title: "AI Adoption & Implementation",
      description:
        "Moving from experimental AI prototypes to robust, production-ready applications integrated into real-world business systems.",
    },
    {
      title: "Data Readiness for AI & ML",
      description:
        "Preparing, cleaning, transforming, and engineering data so it can reliably power AI models, analytics, and intelligent algorithms.",
    },
    {
      title: "Operational Automation",
      description:
        "Leveraging technology and AI to streamline workflows, eliminate manual friction, and accelerate organizational velocity.",
    },
    {
      title: "Security, Compliance & Reliability",
      description:
        "Architecting software environments aligned with rigorous data privacy regulations, SOC2 compliance, and enterprise SLAs.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={[{ label: "Industries" }]} />
      </div>

      {/* Hero Section */}
      <section className="pt-8 pb-16 lg:pt-12 lg:pb-20 border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-brand-blue text-xs font-semibold">
              <span>Domain Engineering Depth</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Technology Solutions Built for Your Industry
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed font-normal">
              Avisoft helps businesses across industries build, modernize, integrate, and scale their technology platforms with AI, software engineering, data, and technology expertise.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#industries-grid"
                className="px-6 py-3 bg-brand-blue hover:bg-brand-blue-hover text-white text-sm font-semibold rounded-lg shadow-sm transition-colors"
              >
                Explore Industries →
              </a>
              <button
                onClick={() => setIsConsultationOpen(true)}
                className="px-6 py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg shadow-2xs transition-colors"
              >
                Get a Free Consultation →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Expertise Across Industries */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Technology Expertise Across Industries
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Every industry comes with its own technology environment, business processes, customer expectations, and operational requirements. Avisoft works across industries to build, modernize, integrate, and scale technology solutions aligned with these requirements.
            </p>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              From AI and software engineering to data, enterprise platforms, and SaaS implementation, our technology capabilities can be applied across different industry environments.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section id="industries-grid" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Industries We Serve</h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Our technology expertise spans industries with diverse business models, technology environments, and operational requirements. Explore how Avisoft’s capabilities can support your industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesData.map((ind) => (
              <div
                key={ind.slug}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-brand-blue/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-blue transition-colors mb-2">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {ind.heroDescription}
                  </p>

                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-700">
                    <span className="font-semibold text-slate-900">Featured Engagement: </span>
                    <span>{ind.caseStudy.title}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="inline-flex items-center text-xs font-semibold text-brand-blue hover:text-brand-blue-hover group-hover:translate-x-0.5 transition-all"
                  >
                    Explore {ind.title}
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Challenges Across Industries */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-2">
              Common Hurdles We Solve
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Technology Challenges Across Industries
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Different industries have different technology environments, but many businesses face common challenges as their products, operations, and technology ecosystems evolve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((ch, idx) => {
              const Icon = challengeIcons[idx] || ShieldCheck;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-slate-300 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-100 text-brand-blue flex items-center justify-center mb-4">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2">{ch.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{ch.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTAForm />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}
