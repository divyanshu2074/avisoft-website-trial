import Link from "next/link";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";

export default function NewsIndexPage() {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={[{ label: "News & Insights" }]} />
      </div>

      <section className="pt-8 pb-16 lg:pt-12 lg:pb-20 border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-brand-blue text-xs font-semibold">
              <span>Articles, Whitepapers & News</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              News & Insights
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed font-normal">
              Explore perspectives, engineering retrospectives, industry benchmarks, and technology updates from the Avisoft team.
            </p>
          </div>
        </div>
      </section>

      {/* Featured News Article */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-2xl p-8 sm:p-12 border border-slate-200 hover:border-brand-blue/50 transition-colors shadow-sm">
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center space-x-3 text-xs text-slate-500">
                <span className="font-semibold text-brand-blue bg-blue-50 px-2.5 py-0.5 rounded-full">
                  Campus Drive & Recruitment
                </span>
                <span>·</span>
                <span className="flex items-center">
                  <Clock className="w-3.5 h-3.5 mr-1 text-slate-400" />
                  6 min read
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                Avisoft LPU Hiring Drive: What Makes a Good Engineer When AI Can Code?
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                During Avisoft&apos;s third consecutive year recruiting at Lovely Professional University, conversations shifted from frameworks to fundamental questions: What happens to engineering when models write code on demand? Explore how engineering leaders and upcoming developers are navigating the AI shift.
              </p>

              <div className="pt-2">
                <Link
                  href="/news/lpu-on-campus-drive"
                  className="inline-flex items-center px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover shadow-sm transition-colors"
                >
                  Read Full Article →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
