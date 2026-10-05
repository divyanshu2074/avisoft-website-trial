import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  MessageSquare,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ContactCTAForm } from "@/components/home/ContactCTAForm";

export default function ContactUsPage() {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={[{ label: "Contact Us" }]} />
      </div>

      {/* Hero Header */}
      <section className="pt-8 pb-16 lg:pt-12 lg:pb-20 border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-brand-blue text-xs font-semibold">
              <span>Let&apos;s Connect</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Get in Touch with Avisoft
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed font-normal">
              Whether you are scoping an upcoming AI solution, evaluating staff augmentation with AI-native developers, or looking to modernize legacy software, our team is ready to assist.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-brand-blue flex items-center justify-center mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Direct Lines</h3>
              <p className="text-xs text-slate-500 mb-4">Available during US & India business hours.</p>
              <div className="space-y-1.5 text-xs text-slate-700">
                <div>
                  <span className="font-semibold text-slate-900">India: </span>
                  <a href="tel:+917051878001" className="text-brand-blue hover:underline">
                    +91 705 187 8001
                  </a>
                </div>
                <div>
                  <span className="font-semibold text-slate-900">USA: </span>
                  <a href="tel:+17623800010" className="text-brand-blue hover:underline">
                    +1 762 380 0010
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-brand-blue flex items-center justify-center mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Email Inquiries</h3>
              <p className="text-xs text-slate-500 mb-4">General questions, proposals, and RFPs.</p>
              <div className="space-y-1.5 text-xs text-slate-700">
                <div>
                  <span className="font-semibold text-slate-900">General & Tech: </span>
                  <a href="mailto:tech@avisoft.io" className="text-brand-blue hover:underline">
                    tech@avisoft.io
                  </a>
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Careers: </span>
                  <a href="mailto:careers@avisoft.io" className="text-brand-blue hover:underline">
                    careers@avisoft.io
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-green-100 text-brand-green flex items-center justify-center mb-4">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Instant Messaging</h3>
              <p className="text-xs text-slate-500 mb-4">Chat directly with an Avisoft coordinator.</p>
              <div className="text-xs">
                <a
                  href="https://wa.me/919906677456?text=Hi%20Avisoft%20Team%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services%2E"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold text-emerald-700 hover:underline"
                >
                  WhatsApp: +91 99066 77456
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Delivery Centers */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-base font-bold text-slate-900 flex items-center">
                  <MapPin className="w-4 h-4 text-brand-blue mr-2" />
                  Mohali Delivery Center
                </h4>
                <a
                  href="https://maps.google.com/?q=Avisoft+Mohali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-brand-blue font-semibold hover:underline flex items-center gap-1"
                >
                  View on Google Maps <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Industrial Area, Phase 8A, Sector 75, Mohali, Punjab, 160071, India
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-base font-bold text-slate-900 flex items-center">
                  <MapPin className="w-4 h-4 text-brand-blue mr-2" />
                  Jammu Technology Hub
                </h4>
                <a
                  href="https://maps.google.com/?q=Avisoft+Jammu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-brand-blue font-semibold hover:underline flex items-center gap-1"
                >
                  View on Google Maps <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bahu Plaza Commercial Complex, Gandhi Nagar, Jammu, J&K, 180012, India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Form */}
      <ContactCTAForm />
    </div>
  );
}
