"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Users,
  ShieldCheck,
  Award,
  Building2,
  Terminal,
  Layers,
} from "lucide-react";
import { ConsultationModal } from "@/components/common/ConsultationModal";

export function StaffAugmentation() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const leftCards = [
    {
      title: "Cost Effective Remote Tech Teams",
      description:
        "Based in India, we offer you a unique blend of highly technical and cost-effective developers. Large pools of talent are available to easily scale your teams.",
      icon: Users,
    },
    {
      title: "One Stop Shop for all Your Tech Needs",
      description:
        "AI Adoption, Cloud Engineering, Full Stack Development, Test Automation, DevOps. We got you covered on all tech aspects.",
      icon: Layers,
    },
    {
      title: "Vetted Professionals",
      description:
        "Driven and passionate developers who have delivered multiple large-scale projects successfully.",
      icon: ShieldCheck,
    },
    {
      title: "Proven Track Record",
      description:
        "We consistently meet and exceed the expectations of our clients. Repeat business from the same clients is testimony to that.",
      icon: Award,
    },
    {
      title: "Outsource with Confidence",
      description:
        "Developers work from Avisoft offices in an innovative, supportive, and collaborative ecosystem.",
      icon: Building2,
    },
    {
      title: "AI Powered Development",
      description:
        "Co-development with Copilots viz. Claude Code, ChatGPT Codex, GitHub Copilot, Cursor AI or with no copilot at all based on your organization policy.",
      icon: Terminal,
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 rounded-full bg-blue-600/15 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-700/60 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Staff Augmentation Services by Avisoft</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Hire AI-Native Developers
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Scale your engineering team with pre-vetted, high-velocity developers experienced in modern AI copilots, cloud architectures, and full-stack development.
          </p>
        </div>

        {/* 2-Panel Layout: Left 6 Cards, Right CTA Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Panel: 6 Value Cards in 2 columns */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {leftCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-800/80 rounded-xl p-5 border border-slate-700/70 hover:border-slate-600 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-500/15 text-sky-400 flex items-center justify-center mb-3.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Panel: CTA Card */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="bg-gradient-to-b from-blue-900/40 to-slate-800/90 rounded-2xl p-7 border border-blue-500/30 shadow-2xl relative">
              <div className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">
                Flexible Engagement
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 leading-snug">
                Build Your Team with Avisoft
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Hire a single developer or full team for your technology requirements, with flexible engagement options and the choice to work from your office or Avisoft office.
              </p>

              <div className="space-y-3">
                <button
                  onClick={() => setIsConsultationOpen(true)}
                  className="w-full inline-flex items-center justify-center px-5 py-3 rounded-lg text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover shadow-lg transition-colors"
                >
                  <span>Start a No-Cost Trial</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>

                <Link
                  href="/services/hire-ai-native-developers"
                  className="w-full inline-flex items-center justify-center px-5 py-3 rounded-lg text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-600 transition-colors"
                >
                  Know More
                </Link>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-700/70 space-y-2 text-xs text-slate-400">
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>14-day zero-risk trial period</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Full IP ownership & strict NDA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Direct team communication in your timezone</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultService="Hire AI-Native Developers"
      />
    </section>
  );
}
