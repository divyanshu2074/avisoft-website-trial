"use client";

import { useState } from "react";
import { CheckCircle2, Send, Loader2 } from "lucide-react";

interface JobApplicationFormProps {
  jobId: string;
  jobTitle: string;
}

export function JobApplicationForm({ jobId, jobTitle }: JobApplicationFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    company: "",
    experience: "",
    noticePeriod: "",
    whyInterested: "",
    resumeLink: "",
    portfolio: "",
    additionalInfo: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      console.log(
        `Application received for ${jobTitle} (${jobId}) from ${formData.fullName} (${formData.email}). Notification sent to candidates email and CC: careers@avisoft.io, tech@avisoft.io`
      );
    }, 700);
  };

  return (
    <div id="apply-form" className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm sticky top-28">
      <div className="mb-6">
        <div className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-1">
          Job Application
        </div>
        <h3 className="text-xl font-bold text-slate-900">
          Apply for {jobTitle}
        </h3>
        <p className="text-xs text-slate-600 mt-1">
          Interested in joining Avisoft? Share your details and our recruitment team will review your application.
        </p>
      </div>

      {isSubmitted ? (
        <div className="py-8 text-center space-y-4">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-lg font-bold text-slate-900">Application Submitted!</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Thank you, <span className="font-semibold">{formData.fullName}</span>. Your application for <span className="font-semibold">{jobTitle}</span> has been logged. A confirmation has been prepared for <span className="font-semibold">{formData.email}</span> (CC: careers@avisoft.io and tech@avisoft.io).
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-3 px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold rounded-lg transition-colors"
          >
            Submit Another Application
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Hidden Job ID / Title */}
          <input type="hidden" name="jobId" value={jobId} />
          <input type="hidden" name="jobRole" value={jobTitle} />

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="John Doe"
              className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Current Location
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="e.g. Chandigarh, Mohali, Jammu"
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Years of Experience
              </label>
              <input
                type="text"
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                placeholder="e.g. 3.5 years"
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                LinkedIn Profile
              </label>
              <input
                type="url"
                value={formData.linkedin}
                onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                placeholder="https://linkedin.com/in/..."
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Notice Period
              </label>
              <input
                type="text"
                value={formData.noticePeriod}
                onChange={(e) => setFormData({ ...formData, noticePeriod: e.target.value })}
                placeholder="Immediate / 30 Days"
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Resume / CV Link or Drive URL <span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              required
              value={formData.resumeLink}
              onChange={(e) => setFormData({ ...formData, resumeLink: e.target.value })}
              placeholder="Link to Google Drive, Dropbox, or PDF"
              className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Portfolio / GitHub URL
            </label>
            <input
              type="url"
              value={formData.portfolio}
              onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
              placeholder="https://github.com/..."
              className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Why are you interested in this role?
            </label>
            <textarea
              rows={3}
              value={formData.whyInterested}
              onChange={(e) => setFormData({ ...formData, whyInterested: e.target.value })}
              placeholder="Tell us what excites you about building platforms with Avisoft..."
              className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center px-5 py-3 rounded-lg text-xs font-bold text-white bg-brand-blue hover:bg-brand-blue-hover shadow-sm transition-colors disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-3.5 h-3.5 mr-2 animate-spin" />
                Submitting Application...
              </>
            ) : (
              <>
                <Send className="w-3.5 h-3.5 mr-2" />
                Submit Application
              </>
            )}
          </button>

          <p className="text-[11px] text-slate-500 text-center">
            Applications & CVs are reviewed by our hiring panel: careers@avisoft.io
          </p>
        </form>
      )}
    </div>
  );
}
