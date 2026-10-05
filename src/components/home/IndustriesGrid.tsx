import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industriesData } from "@/data/industriesData";

export function IndustriesGrid() {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-2">
            Domain Specialization
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Industries We Serve
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Our technology expertise spans industries with diverse business models, regulatory standards, and operational requirements. Explore how Avisoft's capabilities can support your industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesData.map((ind) => (
            <div
              key={ind.slug}
              className="bg-slate-50/70 hover:bg-white rounded-xl p-6 border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-blue transition-colors">
                  {ind.title}
                </h3>
                <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
                  {ind.heroDescription}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200/60">
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

        <div className="mt-12 text-center">
          <Link
            href="/industries"
            className="inline-flex items-center px-6 py-3 rounded-lg text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            Explore Complete Industry Practice Areas
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
