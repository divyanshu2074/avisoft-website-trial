"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { caseStudiesData } from "@/data/caseStudiesData";

export function CaseStudiesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 380;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-2">
              Proven Delivery
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Explore Case Studies
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              See how Avisoft helps organizations modernize legacy systems, build digital products, apply AI, and scale technology platforms across industries.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="mt-6 md:mt-0 flex items-center space-x-2">
            <button
              onClick={() => scroll("left")}
              className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-brand-blue hover:border-slate-300 transition-colors shadow-sm"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-brand-blue hover:border-slate-300 transition-colors shadow-sm"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Container (3-4 cards visible on desktop) */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto pb-6 pt-1 custom-scrollbar scroll-smooth"
        >
          {caseStudiesData.map((study) => (
            <div
              key={study.id}
              className="min-w-[320px] sm:min-w-[360px] lg:min-w-[380px] max-w-[380px] bg-white rounded-xl p-6 border border-slate-200 hover:border-brand-blue/50 shadow-sm hover:shadow-md transition-all flex flex-col justify-between shrink-0"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                    {study.client}
                  </span>
                  <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    {study.industry}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug line-clamp-2 mb-3">
                  {study.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                  {study.description}
                </p>

                {/* Key Results / Metrics */}
                <div className="space-y-1.5 pt-3 border-t border-slate-100">
                  <div className="text-[11px] font-semibold text-slate-700 mb-1">Key Results:</div>
                  {study.metrics.slice(0, 3).map((metric, mIdx) => (
                    <div key={mIdx} className="flex items-center text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-green mr-1.5 shrink-0" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href="/case-studies"
                  className="inline-flex items-center text-xs font-semibold text-brand-blue hover:text-brand-blue-hover group"
                >
                  View Case Study
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All Case Studies CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center text-sm font-semibold text-brand-blue hover:text-brand-blue-hover hover:underline"
          >
            Explore All Case Studies
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
