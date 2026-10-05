"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2, ArrowRight } from "lucide-react";

export function ContactCTAForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "AI & ML Solutions",
    requirement: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Construct mailto representation
      const subject = encodeURIComponent(`Project Inquiry from ${formData.name} (${formData.company || "Direct"})`);
      const body = encodeURIComponent(
        `Lead Details:\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nRequirement:\n${formData.requirement}\n\n--\nDelivered to: ${formData.email}\nCC: teams@avisoft.io`
      );
      console.log(`Dispatched inquiry email to ${formData.email}, cc: teams@avisoft.io`);
    }, 700);
  };

  return (
    <section id="contact-cta" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Info Panel */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-900 to-brand-navy text-white p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-sky-400 mb-3">
                  Start the Conversation
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-snug">
                  Let’s Build Something That Matters
                </h2>
                <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                  Tell us what you’re building, what you want to improve, or where you need technology support. Our team will get back to you to understand your requirements and explore the right way forward.
                </p>
              </div>

              <div className="mt-12 space-y-4 pt-8 border-t border-slate-800 text-xs text-slate-400">
                <div className="flex items-center space-x-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Prompt consultation response within 24 business hours</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Technical feasibility and scope estimation</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>No-cost trial options for team augmentation</span>
                </div>
              </div>
            </div>

            {/* Right Form Panel */}
            <div className="lg:col-span-7 p-8 sm:p-12">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Inquiry Received!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. A confirmation has been prepared for <span className="font-semibold text-slate-900">{formData.email}</span> (CC: teams@avisoft.io). Our engineering leads will review your requirement and connect shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        phone: "",
                        service: "AI & ML Solutions",
                        requirement: "",
                      });
                    }}
                    className="mt-4 px-6 py-2.5 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-lg text-xs font-semibold transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Company
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Organization or project name"
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      What can we help you with? <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                    >
                      <option value="AI & ML Solutions">AI & ML Solutions</option>
                      <option value="Custom Software">Custom Software</option>
                      <option value="Data Engineering">Data Engineering</option>
                      <option value="Enterprise Platforms">Enterprise Platforms</option>
                      <option value="SaaS Implementation">SaaS Implementation</option>
                      <option value="AI Deployment">AI Deployment</option>
                      <option value="Hire AI-Native Developers">Hire AI-Native Developers</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Tell us about your requirement <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                      placeholder="Briefly describe your project, challenge, or requirement..."
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center px-7 py-3.5 bg-brand-blue text-white rounded-lg text-sm font-semibold hover:bg-brand-blue-hover transition-colors shadow-md disabled:opacity-70 group"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending Details...
                        </>
                      ) : (
                        <>
                          <span>Let’s Talk</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                    <p className="text-xs text-slate-500 mt-2">
                      Submission notification will be shared to your email and cc: teams@avisoft.io.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
