import Link from "next/link";
import {
  Calendar,
  Clock,
  User,
  Share2,
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Award,
  CheckCircle2,
} from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";

export default function LpuOnCampusDriveArticle() {
  const comparisonData = [
    {
      traditional: "Developer writes implementation manually",
      aiAssisted: "Developer delegates routine execution to AI",
    },
    {
      traditional: "Developer manually searches for solutions",
      aiAssisted: "AI accelerates exploration and discovery",
    },
    {
      traditional: "Developer handcrafts boilerplate tests",
      aiAssisted: "AI generates test scaffolding automatically",
    },
    {
      traditional: "Developer reviews human-written code",
      aiAssisted: "Developer audits both human and AI-generated code",
    },
    {
      traditional: "Heavy focus on raw line-by-line coding",
      aiAssisted: "Greater emphasis on architecture, validation, and system design",
    },
  ];

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs
          items={[
            { label: "News & Insights", href: "/news" },
            { label: "LPU Campus Drive" },
          ]}
        />
      </div>

      {/* Article Header */}
      <article className="py-12">
        <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-brand-blue text-xs font-semibold mb-4">
            <span>Engineering Insights & Campus Recruitment</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
            Avisoft LPU Hiring Drive: What Makes a Good Engineer When AI Can Code?
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pb-6 border-b border-slate-200">
            <span className="flex items-center">
              <User className="w-3.5 h-3.5 mr-1.5 text-slate-400" />
              Avisoft Engineering Leadership
            </span>
            <span>·</span>
            <span className="flex items-center">
              <Calendar className="w-3.5 h-3.5 mr-1.5 text-slate-400" />
              Recruitment Retrospective
            </span>
            <span>·</span>
            <span className="flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1.5 text-slate-400" />
              6 min read
            </span>
          </div>
        </header>

        {/* Article Body */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none space-y-6 text-base text-slate-700 leading-relaxed">
            <p className="text-lg text-slate-800 font-medium leading-relaxed">
              When technology companies visit campuses for hiring drives, the conversation usually follows a predictable track. Students ask about starting salaries, programming languages, and tech stacks. Recruiters talk about project ownership, growth paths, and team culture.
            </p>

            <p>
              During Avisoft&apos;s recent hiring drive at <strong>Lovely Professional University (LPU)</strong>, our third consecutive year recruiting there, the conversation this year was completely different.
            </p>

            <p>
              The students sitting across from us were asking different things. They weren&apos;t just curious about frameworks or tools; they wanted to know:
            </p>

            <div className="p-6 rounded-xl bg-slate-50 border-l-4 border-brand-blue space-y-2 my-6">
              <ul className="list-disc list-inside space-y-1.5 text-sm text-slate-800 font-medium">
                <li>What happens to software engineering when models can write code on demand?</li>
                <li>What remains for a developer to do?</li>
                <li>How are engineering teams adapting?</li>
                <li>Where does a services company like Avisoft fit into an industry that is actively rethinking how software gets built?</li>
              </ul>
            </div>

            <p>
              Those questions didn&apos;t come out of nowhere. Across fintech, analytics, telecom, and enterprise cloud systems—the spaces where Avisoft builds products and data pipelines—every engineering team is grappling with how coding assistants and generative tools fit into their daily workflows.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 pt-6 border-t border-slate-200">
              When writing code is no longer the hardest part
            </h2>

            <p>
              The practical reality of modern development is that AI models can generate syntax, explain logic, build test suites, and scaffold entire components in seconds.
            </p>

            <p>
              That shift changes what developers spend their time on, but it hasn&apos;t eliminated the need for engineering judgment. Software development has never been solely about typing out lines of code. It has always been about figuring out what problem needs to be solved, translating messy business requirements into technical specifications, designing systems that won&apos;t fall apart under load, and balancing trade-offs between speed, security, and long-term maintainability.
            </p>

            <p>
              Data from industry research highlights this shift. <strong>O&apos;Reilly&apos;s 2025 technology learning trends report</strong> points to a notable surge in interest around software architecture and data engineering topics, even as raw programming content evolves. Developers are writing less boilerplate code manually, but their focus is drifting toward higher-level system design.
            </p>

            {/* Comparison Table */}
            <div className="my-8 overflow-hidden rounded-xl border border-slate-200 shadow-sm">
              <div className="bg-slate-900 text-white px-6 py-3 font-semibold text-sm">
                Evolution of Engineering Workflows
              </div>
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 text-slate-700">
                    <th className="p-4 font-bold w-1/2">Traditional development workflow</th>
                    <th className="p-4 font-bold w-1/2 text-brand-blue">AI-assisted development workflow</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                      <td className="p-4 text-slate-600">{row.traditional}</td>
                      <td className="p-4 text-slate-900 font-medium">{row.aiAssisted}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              When you break it down, the fundamentals haven&apos;t disappeared. Problem definition, system architecture, reviewing and validating generated output, working with data, and understanding the underlying business domain remain strictly human responsibilities. This is especially true in sectors like financial services or healthcare, where software interacts with sensitive data, strict compliance rules, and complex workflows.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 pt-6 border-t border-slate-200">
              How engineering teams are changing behind the scenes
            </h2>

            <p>
              These shifts aren&apos;t just theoretical; they are showing up in how organizations structure their teams and build internal systems.
            </p>

            {/* McKinsey Stat Box */}
            <div className="p-6 rounded-xl bg-blue-50/70 border border-blue-200 my-6 flex items-start space-x-4">
              <TrendingUp className="w-6 h-6 text-brand-blue shrink-0 mt-1" />
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-900">McKinsey 2026 State of AI Survey Findings</h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Roughly <strong>two in ten organizations</strong> are actively scaling software coding agents, with that number jumping to <strong>31% among large enterprises</strong>. Interestingly, <strong>32% of respondents</strong> noted their teams chose to build custom internal utilities in-house using agentic tools rather than purchasing commercial software.
                </p>
              </div>
            </div>

            <p>
              When generating code becomes effortless, the build-versus-buy calculation changes. Engineering teams are deploying coding agents as part of their standard toolkit, and engineers themselves are expected to understand model capabilities, data pipelines, and system evaluation alongside traditional coding.
            </p>

            <p>
              This brings data engineering into the foreground. AI tools are only as good as the data feeding them. Building reliable AI solutions requires robust data pipelines, storage architectures, retrieval strategies, and governance controls—a reality reflected in O&apos;Reilly&apos;s findings showing steady growth in data engineering and ETL learning.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 pt-6 border-t border-slate-200">
              Where Avisoft sits in the middle of this shift
            </h2>

            <p>
              Avisoft operates as an India-based technology services firm partnering with global clients and startups to build new platforms from scratch or modernize legacy systems. Our teams span full-stack development, mobile applications, REST APIs, microservices, DevOps, cloud infrastructure, test automation, and data engineering.
            </p>

            <p>
              When companies move past isolated AI experiments and try to embed intelligent solutions into production environments, they quickly realize that picking a model is only a fraction of the challenge.
            </p>

            <p>
              Real production readiness requires a sequence of heavy lifting: auditing legacy systems, harmonizing complex data, designing resilient application architectures, building scalable APIs, connecting AI capabilities directly into business workflows, establishing security protocols, benchmarking reliability, and continuously monitoring applications in production.
            </p>

            <p>
              That requires cross-functional engineering depth. Our work across fintech, banking, analytics, telecommunications, retail, and hospitality has shown us that long-term success comes from pairing deep technical fundamentals with domain expertise—whether we are deploying teams from our India delivery centers or working on-site with clients.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 pt-6 border-t border-slate-200">
              What the next generation needs to master
            </h2>

            <p>
              The questions we heard at LPU highlight a broader truth for students and early-career engineers preparing for the job market.
            </p>

            <p>
              Collecting certificates in every new AI utility isn&apos;t a substitute for a solid foundation. The most capable engineers we see are those who master core programming fundamentals, data structures, relational databases, distributed architectures, and automated testing first, and then use AI tools to amplify their output.
            </p>

            <p>
              Alongside those traditional pillars, today&apos;s engineers benefit from understanding generative AI mechanics, prompt design, RAG architectures, and model output evaluation. But the defining competitive advantage remains the same: <strong>knowing why a system should exist and how to verify its correctness, rather than just knowing how to prompt for syntax.</strong>
            </p>

            <h2 className="text-2xl font-bold text-slate-900 pt-6 border-t border-slate-200">
              Looking back at LPU
            </h2>

            <p>
              Our third year recruiting at LPU gave us a clear window into how early-career engineers view the industry. Led by Bharti Verma and the university&apos;s placement administration, the discussions were structured, objective, and deeply technical.
            </p>

            <p>
              We went to LPU expecting to evaluate candidates. Instead, we spent much of our time talking through the exact same questions that senior engineering leaders are debating internally: how AI is reshaping development, where human judgment matters most, and what it takes to build a lasting career in software engineering.
            </p>

            {/* Key Takeaway Callout Box */}
            <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-brand-navy text-white my-8 shadow-lg">
              <div className="text-xs font-mono uppercase text-sky-400 mb-2">
                Core Takeaway
              </div>
              <blockquote className="text-xl font-semibold leading-relaxed">
                “AI isn&apos;t replacing the engineering profession; it is raising the floor. For the next generation of developers, success won&apos;t come from competing with machines, but from learning how to steer them.”
              </blockquote>
            </div>
          </div>

          {/* Author / Back Footer */}
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/news"
              className="inline-flex items-center text-xs font-semibold text-slate-600 hover:text-brand-blue"
            >
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              Back to News & Insights
            </Link>

            <Link
              href="/careers"
              className="inline-flex items-center text-xs font-semibold text-brand-blue hover:underline"
            >
              Explore Open Engineering Careers at Avisoft
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
