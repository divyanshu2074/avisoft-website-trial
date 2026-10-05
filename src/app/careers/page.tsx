import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  MapPin,
  Clock,
  Sparkles,
  Quote,
  Star,
  Layers,
  GraduationCap,
  TrendingUp,
} from "lucide-react";
import { jobOpenings, employeeTestimonials } from "@/data/careersData";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";

export default function CareersLandingPage() {
  const pillars = [
    {
      title: "Work on Real Technology Projects",
      desc: "Work on projects involving modern technology platforms, digital products, AI applications, and distributed software systems.",
      icon: Briefcase,
    },
    {
      title: "Learn Across Technology Areas",
      desc: "Build exposure across AI, software engineering, data engineering, cloud, enterprise platforms, and modern SaaS technologies.",
      icon: GraduationCap,
    },
    {
      title: "Solve Real Business Problems",
      desc: "Work on technology solutions designed around genuine business requirements, workflows, end-users, and operational needs.",
      icon: Layers,
    },
    {
      title: "Grow with Your Work",
      desc: "Develop your technical and professional capabilities through hands-on project experience, mentorship, and continuous learning.",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={[{ label: "Careers" }]} />
      </div>

      {/* Hero Section */}
      <section className="pt-8 pb-16 lg:pt-12 lg:pb-20 border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-brand-blue text-xs font-semibold">
                <span>Join Our Engineering Team</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                Build Your Career at Avisoft
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed font-normal">
                Join Avisoft and work on technology projects across AI, software engineering, data, enterprise platforms, and digital products. Explore opportunities to work with teams building and modernizing technology solutions for businesses across industries.
              </p>
              <div className="pt-2">
                <a
                  href="#open-positions"
                  className="inline-flex items-center px-6 py-3.5 bg-brand-blue hover:bg-brand-blue-hover text-white text-sm font-semibold rounded-lg shadow-sm transition-colors"
                >
                  View Open Positions →
                </a>
              </div>
            </div>

            {/* Team Collage Visual Panel */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-slate-900 to-brand-navy p-6 rounded-2xl shadow-xl text-white border border-slate-800 space-y-4">
                <div className="text-xs font-mono uppercase text-sky-400">
                  Culture & Engineering Ecosystem
                </div>
                <h3 className="text-xl font-bold text-white">
                  Collaborative, Innovative, and Developer-Centric
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Our delivery centers in Mohali and Jammu bring together software craftsmen, AI researchers, and data engineers. We emphasize high autonomy, modern tooling, and technical mastery.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/80">
                    <div className="text-lg font-bold text-brand-green">100%</div>
                    <div className="text-[11px] text-slate-400">Merit-Based Growth</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/80">
                    <div className="text-lg font-bold text-sky-400">Latest AI Tools</div>
                    <div className="text-[11px] text-slate-400">Copilots & Cloud Sandboxes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work at Avisoft */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-2">
              Life at Avisoft
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Build, Learn, and Grow with Avisoft
            </h2>
            <p className="mt-3 text-slate-600 text-sm leading-relaxed">
              At Avisoft, you get the opportunity to work across different technology environments and contribute to real-world projects involving AI, software engineering, data, enterprise platforms, and digital products.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 border border-slate-200 hover:border-slate-300 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">{p.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Opportunities */}
      <section id="open-positions" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-2">
              Open Positions
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Explore Opportunities at Avisoft
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Explore current full-time opportunities at Avisoft and find a role that matches your skills, experience, and career interests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-slate-50/70 hover:bg-white rounded-xl p-6 border border-slate-200 hover:border-brand-blue/60 shadow-sm transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center space-x-2 text-xs text-slate-500 mb-3">
                    <span className="font-semibold text-brand-blue">{job.type}</span>
                    <span>·</span>
                    <span className="flex items-center">
                      <MapPin className="w-3 h-3 mr-0.5 text-slate-400" />
                      {job.location}
                    </span>
                    <span>·</span>
                    <span>{job.workMode}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-blue transition-colors mb-2">
                    {job.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {job.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60">
                  <Link
                    href={`/careers/${job.id}`}
                    className="inline-flex items-center text-xs font-semibold text-brand-blue hover:text-brand-blue-hover group-hover:translate-x-0.5 transition-all"
                  >
                    View Role & Apply
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Slider (Life at Avisoft) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-2">
              Team Perspectives
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Life at Avisoft
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Hear from the people who work at Avisoft and learn about their experience of working, learning, and growing with the team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {employeeTestimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-7 h-7 text-blue-200 mb-3" />
                  <p className="text-xs text-slate-700 leading-relaxed italic mb-6">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{t.name}</h4>
                    <p className="text-[11px] text-slate-500">{t.role}</p>
                  </div>
                  <span className="text-[10px] font-mono bg-slate-100 px-2 py-0.5 rounded text-slate-600">
                    {t.tenure}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
