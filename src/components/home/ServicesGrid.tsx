import Link from "next/link";
import { ArrowRight, Bot, Cloud, Code, Database, Layers, Workflow, Compass, Users } from "lucide-react";
import { servicesData } from "@/data/servicesData";

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

export function ServicesGrid() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-2">
            Engineering Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Our Services
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            From AI solutions and custom software to data engineering, enterprise platforms, SaaS implementation, and technology consultancy, our services help businesses build, modernize, and scale their technology.
          </p>
        </div>

        {/* 8 Services in clean grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => {
            const Icon = iconMap[service.slug] || Code;
            return (
              <div
                key={service.slug}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-brand-blue/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
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

                  {/* Capability Badges */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {service.capabilitiesBadges.slice(0, 3).map((badge, bIdx) => (
                      <span
                        key={bIdx}
                        className="inline-block px-2 py-0.5 text-[11px] rounded bg-slate-100 text-slate-700 font-medium"
                      >
                        {badge}
                      </span>
                    ))}
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

        {/* View All Services Footer */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center px-6 py-3 rounded-lg text-sm font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-100 shadow-sm transition-all"
          >
            Explore Complete Services Overview
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
