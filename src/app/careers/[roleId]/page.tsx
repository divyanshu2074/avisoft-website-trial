import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, CheckCircle2 } from "lucide-react";
import { jobOpenings, JobOpening } from "@/data/careersData";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { JobApplicationForm } from "@/components/careers/JobApplicationForm";

export function generateStaticParams() {
  return jobOpenings.map((job) => ({
    roleId: job.id,
  }));
}

export default function IndividualJobPage({
  params,
}: {
  params: { roleId: string };
}) {
  const job = jobOpenings.find((j) => j.id === params.roleId);

  if (!job) {
    notFound();
  }

  const otherJobs = jobOpenings.filter((j) => j.id !== job.id);

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs
          items={[
            { label: "Careers", href: "/careers" },
            { label: job.title },
          ]}
        />
      </div>

      {/* Role Header Banner */}
      <section className="pt-8 pb-14 border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-brand-blue font-semibold">
                {job.type}
              </span>
              <span>·</span>
              <span className="flex items-center text-slate-600">
                <MapPin className="w-3.5 h-3.5 mr-1 text-slate-400" />
                {job.location}
              </span>
              <span>·</span>
              <span>{job.workMode}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              {job.title}
            </h1>

            <p className="text-base text-slate-600 leading-relaxed">
              {job.shortDescription}
            </p>

            <div className="pt-2">
              <a
                href="#apply-form"
                className="inline-flex items-center px-6 py-3 rounded-lg text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover shadow-sm transition-colors"
              >
                Apply for this Role →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Role Content & Application Form */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Job Description & Details */}
            <div className="lg:col-span-7 space-y-10">
              {/* About Avisoft */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-slate-900">About Avisoft</h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Avisoft is a technology solutions company partnering with global businesses to build, modernize, integrate, and scale digital platforms, AI applications, and enterprise software. Operating out of state-of-the-art delivery centers in India with international reach, we foster an engineering-led culture focused on quality, speed, and real-world problem solving.
                </p>
              </div>

              {/* About the Role */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-slate-900">About the Role</h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {job.fullDescription}
                </p>
              </div>

              {/* Responsibilities */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-slate-900">Responsibilities</h2>
                <ul className="space-y-2.5">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 mr-3 shrink-0"></span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What We Are Looking For */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-slate-900">What We Are Looking For</h2>
                <ul className="space-y-2.5">
                  {job.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 mr-2.5 shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nice to Have */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-slate-900">Nice to Have</h2>
                <ul className="space-y-2.5">
                  {job.niceToHave.map((nth, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 mr-3 shrink-0"></span>
                      <span>{nth}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Application Form (Client Component) */}
            <div className="lg:col-span-5">
              <JobApplicationForm jobId={job.id} jobTitle={job.title} />
            </div>
          </div>
        </div>
      </section>

      {/* Other Open Roles */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h3 className="text-xl font-bold text-slate-900">Other Open Roles</h3>
            <p className="text-xs text-slate-600 mt-1">
              Explore additional engineering opportunities across our practice areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherJobs.slice(0, 3).map((oj) => (
              <div
                key={oj.id}
                className="bg-white p-5 rounded-xl border border-slate-200 hover:border-brand-blue/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-[11px] font-semibold text-brand-blue mb-1">
                    {oj.type} · {oj.location}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-2">{oj.title}</h4>
                  <p className="text-xs text-slate-600 line-clamp-2 mb-4">{oj.shortDescription}</p>
                </div>
                <Link
                  href={`/careers/${oj.id}`}
                  className="inline-flex items-center text-xs font-semibold text-brand-blue hover:text-brand-blue-hover"
                >
                  View Role →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
