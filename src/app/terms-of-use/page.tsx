import { Breadcrumbs } from "@/components/common/Breadcrumbs";

export default function TermsOfUsePage() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Terms of Use" }]} />
        <div className="mt-8 space-y-6 text-sm text-slate-700 leading-relaxed">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Terms of Use</h1>
          <p className="text-xs text-slate-500">Last updated: October 2026</p>

          <p>
            Welcome to Avisoft. By accessing or using our website, services, and related digital assets, you agree to be bound by these Terms of Use and all applicable laws and regulations.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-4">1. Intellectual Property</h2>
          <p>
            All content, trademarks, logos, case studies, graphics, and software code presented on this website are the intellectual property of Avisoft or its respective partners and clients, protected under copyright and trademark laws.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-4">2. Permitted Use</h2>
          <p>
            You may browse this website and review service specifications for prospective business evaluations or career opportunities. Unauthorized copying, reverse engineering, scraping, or distribution of site content without prior written permission is prohibited.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-4">3. Disclaimer & Warranties</h2>
          <p>
            Materials on this site are provided for informational and preliminary evaluation purposes. Client project deliverables and software warranties are governed strictly by individual Master Services Agreements (MSAs) and Statements of Work (SOWs).
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-4">4. Governing Law</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of India and the jurisdiction of courts in Punjab / Jammu & Kashmir.
          </p>
        </div>
      </div>
    </div>
  );
}
