import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { caseStudiesData } from "@/data/caseStudiesData";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ContactCTAForm } from "@/components/home/ContactCTAForm";

export default function CaseStudiesPage() {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={[{ label: "Case Studies" }]} />
      </div>

      {/* Hero Section */}
      <section className="pt-8 pb-16 lg:pt-12 lg:pb-20 border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-brand-blue text-xs font-semibold">
              <span>Client Success Stories</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Engineering That Drives Real Business Impact
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed font-normal">
              Explore how Avisoft helps organizations modernize legacy systems, build digital products, apply AI, and scale technology platforms across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Catalog Grid */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudiesData.map((study) => (
              <div
                key={study.id}
                className="bg-white rounded-xl p-8 border border-slate-200 hover:border-brand-blue/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                      {study.client}
                    </span>
                    <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                      {study.industry}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                    {study.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {study.description}
                  </p>

                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-100 space-y-2 mb-6">
                    <div className="text-xs font-bold text-slate-900">Key Outcomes & Metrics:</div>
                    {study.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="flex items-center text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-green mr-2 shrink-0" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {study.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 text-[10px] rounded bg-slate-100 text-slate-600 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100">
                  <a
                    href="#contact-cta"
                    className="inline-flex items-center text-xs font-semibold text-brand-blue hover:text-brand-blue-hover"
                  >
                    Discuss a Similar Project With Our Team →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form CTA */}
      <ContactCTAForm />
    </div>
  );
}
