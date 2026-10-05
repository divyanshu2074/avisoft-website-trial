import { techStackData } from "@/data/techStackData";
import { Code2, Smartphone, Monitor, CheckCircle, Cloud, Cpu } from "lucide-react";

const categoryIcons: Record<string, any> = {
  "Web Development": Code2,
  "Mobile Development": Smartphone,
  "Desktop Application Development": Monitor,
  "Testing & QA": CheckCircle,
  "Cloud & DevOps": Cloud,
  "AI & Data Engineering": Cpu,
};

export function TechStackGrid() {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-2">
            Engineering Toolchain
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Technologies We Use to Build Scalable Systems
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Our engineering teams leverage proven modern frameworks, scalable cloud providers, and advanced AI platforms to deliver resilient enterprise solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStackData.map((cat, idx) => {
            const Icon = categoryIcons[cat.title] || Code2;
            return (
              <div
                key={idx}
                className="bg-slate-50/70 rounded-xl p-6 border border-slate-200 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-100/70 text-brand-blue">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-white border border-slate-200/80 text-slate-700 shadow-2xs hover:border-brand-blue hover:text-brand-blue transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
