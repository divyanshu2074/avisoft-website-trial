"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Cpu, Code2, Users, CheckCircle2 } from "lucide-react";
import { ConsultationModal } from "@/components/common/ConsultationModal";

export function Hero() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-slate-100">
      {/* Subtle geometric background accents */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-100/50 blur-3xl"></div>
        <div className="absolute top-60 -left-20 w-80 h-80 rounded-full bg-slate-100/60 blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100/80 text-brand-blue text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
              <span>Enterprise AI & Software Engineering Partner</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.15]">
              Building secure, scalable, and{" "}
              <span className="text-brand-blue">intelligent digital platforms</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl">
              Partner with Avisoft to build AI solutions, enterprise software, SaaS platforms, and scalable digital products that accelerate business growth.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => setIsConsultationOpen(true)}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-base font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover shadow-md transition-all group"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-base font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-all"
              >
                Explore Services
              </Link>
            </div>

            {/* Highlights row */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200/80 max-w-lg">
              <div>
                <div className="text-2xl font-bold text-slate-900">10+</div>
                <div className="text-xs text-slate-500 font-medium">Years Engineering Excellence</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-brand-blue">400+</div>
                <div className="text-xs text-slate-500 font-medium">Platform Integrations</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">5.0 / 5</div>
                <div className="text-xs text-slate-500 font-medium">Client Satisfaction Score</div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Architecture Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-200/80 relative">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-red-400"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                </div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  avisoft-platform-stack
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start space-x-3.5">
                  <div className="p-2 rounded-lg bg-blue-100 text-brand-blue shrink-0">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">AI & Agentic Systems</h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Generative AI, RAG, multi-agent workflows, and custom inference deployment.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start space-x-3.5">
                  <div className="p-2 rounded-lg bg-sky-100 text-sky-700 shrink-0">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Cloud & Custom Software</h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      High-throughput Next.js, Node.js, Python, and microservice architectures.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start space-x-3.5">
                  <div className="p-2 rounded-lg bg-amber-100 text-amber-800 shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">AI-Native Developer Staffing</h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Vetted engineering teams in India with flexible engagement and no-cost trial.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center text-emerald-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 mr-1 text-emerald-600" />
                  Production Ready SLA
                </span>
                <span className="text-slate-400">SOC2 & ISO Compliant Practices</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </section>
  );
}
