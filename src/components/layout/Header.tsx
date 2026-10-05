"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Sparkles,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";
import { servicesData } from "@/data/servicesData";
import { industriesData } from "@/data/industriesData";
import { ConsultationModal } from "@/components/common/ConsultationModal";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on page change
  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setIndustriesOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top micro bar for corporate contacts */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 text-slate-300">
              <Mail className="w-3.5 h-3.5 text-brand-blue" />
              <a href="mailto:tech@avisoft.io" className="hover:text-white transition-colors">
                tech@avisoft.io
              </a>
            </span>
            <span className="flex items-center space-x-1.5 text-slate-300">
              <Phone className="w-3.5 h-3.5 text-brand-blue" />
              <a href="tel:+17623800010" className="hover:text-white transition-colors">
                USA: +1 762 380 0010
              </a>
              <span className="text-slate-600">|</span>
              <a href="tel:+917051878001" className="hover:text-white transition-colors">
                India: +91 705 187 8001
              </a>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/careers"
              className="text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
              We are hiring AI Engineers & Architects
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80"
            : "bg-white border-b border-slate-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center group py-2">
              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="145"
                  height="46"
                  viewBox="0 0 458.823 500.824"
                  className="h-10 w-auto"
                >
                  <g transform="translate(-990.042 -37.085)">
                    <g transform="translate(990.042 37.085)">
                      <path
                        d="M314.8-441.806c-104.335,70.813-100.534,155.833,56.066,127.578,162.012-22.946,275.758-109.011,210.191-167.622,119.466,35.084-11.36,179.519-191.177,210.862-256.786,45.257-240.042-86.35-75.08-170.817"
                        transform="translate(-178.542 556.935)"
                        fill="#0457a8"
                        fillRule="evenodd"
                      />
                      <path
                        d="M186.278-292.2c189.479,51.451,355.773-7.44,458.823-139.531-16.989,30.45-40.479,60.9-77.86,91.351l46.577,93.23H540.131L515.1-299.082c-60.282,34.471-122.322,50-186.311,44.427l-.694,9.385H250.93l11.819-19.4a305.575,305.575,0,0,1-76.471-27.53"
                        transform="translate(-186.278 600.671)"
                        fill="#0b132b"
                        fillRule="evenodd"
                      />
                      <path
                        d="M246.018-285.432l75.082-4.38L369.067-393.68l37.54,83.22,57.007-24.4L371.152-521.948Z"
                        transform="translate(-121.58 521.948)"
                        fill="#0457a8"
                        fillRule="evenodd"
                      />
                    </g>
                    <text
                      transform="translate(1424.201 481.909)"
                      fill="#0457a8"
                      fontSize="100"
                      fontFamily="Arial, sans-serif"
                      fontWeight="700"
                      letterSpacing="0.08em"
                    >
                      <tspan x="-370.9" y="0">
                        Avisoft
                      </tspan>
                    </text>
                  </g>
                </svg>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1">
              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href="/services"
                  className={`inline-flex items-center px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                    pathname.startsWith("/services")
                      ? "text-brand-blue bg-blue-50/60 font-semibold"
                      : "text-slate-700 hover:text-brand-blue hover:bg-slate-50"
                  }`}
                >
                  Services
                  <ChevronDown className="w-4 h-4 ml-1 opacity-70" />
                </Link>

                {servicesOpen && (
                  <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-slate-100 p-2 z-50 animate-fade-in">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3 py-1.5">
                      Technology Services
                    </div>
                    {servicesData.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block px-3 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-brand-blue rounded-lg transition-colors group"
                      >
                        <div className="font-medium text-slate-800 group-hover:text-brand-blue flex items-center justify-between">
                          {service.title}
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-xs text-slate-500 line-clamp-1">{service.tagline}</p>
                      </Link>
                    ))}
                    <div className="pt-2 mt-1 border-t border-slate-100 px-3 py-1.5">
                      <Link
                        href="/services"
                        className="text-xs font-semibold text-brand-blue hover:underline flex items-center justify-between"
                      >
                        View All Services <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Industries Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIndustriesOpen(true)}
                onMouseLeave={() => setIndustriesOpen(false)}
              >
                <Link
                  href="/industries"
                  className={`inline-flex items-center px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                    pathname.startsWith("/industries")
                      ? "text-brand-blue bg-blue-50/60 font-semibold"
                      : "text-slate-700 hover:text-brand-blue hover:bg-slate-50"
                  }`}
                >
                  Industries
                  <ChevronDown className="w-4 h-4 ml-1 opacity-70" />
                </Link>

                {industriesOpen && (
                  <div className="absolute top-full left-0 w-96 bg-white rounded-xl shadow-xl border border-slate-100 p-3 z-50 grid grid-cols-1 gap-1 animate-fade-in">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-2 py-1">
                      Domains & Industries
                    </div>
                    <div className="max-h-96 overflow-y-auto custom-scrollbar pr-1">
                      {industriesData.map((ind) => (
                        <Link
                          key={ind.slug}
                          href={`/industries/${ind.slug}`}
                          className="block px-2.5 py-1.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-brand-blue rounded-md transition-colors"
                        >
                          <div className="font-medium text-slate-800 hover:text-brand-blue">
                            {ind.title}
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="pt-2 mt-1 border-t border-slate-100 px-2 py-1">
                      <Link
                        href="/industries"
                        className="text-xs font-semibold text-brand-blue hover:underline flex items-center justify-between"
                      >
                        Explore All Industries <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/case-studies"
                className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname.startsWith("/case-studies")
                    ? "text-brand-blue bg-blue-50/60 font-semibold"
                    : "text-slate-700 hover:text-brand-blue hover:bg-slate-50"
                }`}
              >
                Case Studies
              </Link>

              <Link
                href="/careers"
                className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname.startsWith("/careers")
                    ? "text-brand-blue bg-blue-50/60 font-semibold"
                    : "text-slate-700 hover:text-brand-blue hover:bg-slate-50"
                }`}
              >
                Careers
              </Link>

              <Link
                href="/news"
                className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname.startsWith("/news")
                    ? "text-brand-blue bg-blue-50/60 font-semibold"
                    : "text-slate-700 hover:text-brand-blue hover:bg-slate-50"
                }`}
              >
                News & Insights
              </Link>

              <Link
                href="/contact-us"
                className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname === "/contact-us"
                    ? "text-brand-blue bg-blue-50/60 font-semibold"
                    : "text-slate-700 hover:text-brand-blue hover:bg-slate-50"
                }`}
              >
                Contact Us
              </Link>
            </nav>

            {/* Header Right Action CTA */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                onClick={() => setIsConsultationOpen(true)}
                className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-slate-700 hover:text-brand-blue hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fade-in max-h-[85vh] overflow-y-auto custom-scrollbar">
            <Link
              href="/services"
              className="block px-3 py-2 text-base font-semibold text-slate-800 rounded-lg hover:bg-blue-50 hover:text-brand-blue"
            >
              Services
            </Link>
            <div className="pl-4 space-y-1">
              {servicesData.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="block px-3 py-1.5 text-sm text-slate-600 hover:text-brand-blue rounded-md"
                >
                  {s.title}
                </Link>
              ))}
            </div>

            <Link
              href="/industries"
              className="block px-3 py-2 text-base font-semibold text-slate-800 rounded-lg hover:bg-blue-50 hover:text-brand-blue pt-2 border-t border-slate-100"
            >
              Industries
            </Link>
            <div className="pl-4 space-y-1">
              {industriesData.slice(0, 6).map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="block px-3 py-1.5 text-sm text-slate-600 hover:text-brand-blue rounded-md"
                >
                  {ind.title}
                </Link>
              ))}
            </div>

            <div className="border-t border-slate-100 pt-2 space-y-1">
              <Link
                href="/case-studies"
                className="block px-3 py-2 text-base font-semibold text-slate-800 rounded-lg hover:bg-blue-50 hover:text-brand-blue"
              >
                Case Studies
              </Link>
              <Link
                href="/careers"
                className="block px-3 py-2 text-base font-semibold text-slate-800 rounded-lg hover:bg-blue-50 hover:text-brand-blue"
              >
                Careers
              </Link>
              <Link
                href="/news"
                className="block px-3 py-2 text-base font-semibold text-slate-800 rounded-lg hover:bg-blue-50 hover:text-brand-blue"
              >
                News & Insights
              </Link>
              <Link
                href="/contact-us"
                className="block px-3 py-2 text-base font-semibold text-slate-800 rounded-lg hover:bg-blue-50 hover:text-brand-blue"
              >
                Contact Us
              </Link>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsConsultationOpen(true);
                }}
                className="w-full text-center px-5 py-3 rounded-lg text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover shadow-sm"
              >
                Get a Free Consultation →
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Reusable Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </>
  );
}
