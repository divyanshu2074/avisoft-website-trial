import { Breadcrumbs } from "@/components/common/Breadcrumbs";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
        <div className="mt-8 space-y-6 text-sm text-slate-700 leading-relaxed">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Privacy Policy</h1>
          <p className="text-xs text-slate-500">Last updated: October 2026</p>

          <p>
            At Avisoft, we are committed to safeguarding the privacy of our website visitors, clients, and prospective candidates. This policy sets out how we collect, store, and process personal and organizational data.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-4">1. Information We Collect</h2>
          <p>
            We collect information provided directly through our contact forms, consultation requests, and career application forms (including full name, work email address, company details, phone number, and CVs/resumes).
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-4">2. Use of Information</h2>
          <p>
            Information collected is strictly utilized to respond to project requirements, conduct technical feasibility assessments, schedule consultations, and process employment applications. We do not sell or rent personal information to third parties.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-4">3. Data Security & Confidentiality</h2>
          <p>
            We enforce industry-standard security safeguards, encryption, and access controls to prevent unauthorized access, disclosure, or alteration of confidential information.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-4">4. Contact Us</h2>
          <p>
            For privacy inquiries, please contact our data governance team at <a href="mailto:tech@avisoft.io" className="text-brand-blue underline">tech@avisoft.io</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
