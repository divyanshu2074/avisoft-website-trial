"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqData } from "@/data/faqData";

export function FAQAccordion() {
  const [openId, setOpenId] = useState<number | null>(1); // first FAQ open by default

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-2">
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Answers to common questions about Avisoft's technology services, AI capabilities, development teams, and engagement models.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4.5 text-left bg-slate-50/60 hover:bg-slate-50 flex items-center justify-between space-x-4 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-slate-900">
                    {faq.id}. {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-brand-blue" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 py-4 bg-white border-t border-slate-100 text-sm text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
