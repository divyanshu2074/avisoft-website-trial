import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Star,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import { servicesData } from "@/data/servicesData";
import { industriesData } from "@/data/industriesData";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Overview */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block">
              <div className="flex items-center space-x-3 bg-white/5 p-2 rounded-lg inline-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="145"
                  height="46"
                  viewBox="0 0 458.823 500.824"
                  className="h-9 w-auto"
                >
                  <g transform="translate(-990.042 -37.085)">
                    <g transform="translate(990.042 37.085)">
                      <path
                        d="M314.8-441.806c-104.335,70.813-100.534,155.833,56.066,127.578,162.012-22.946,275.758-109.011,210.191-167.622,119.466,35.084-11.36,179.519-191.177,210.862-256.786,45.257-240.042-86.35-75.08-170.817"
                        transform="translate(-178.542 556.935)"
                        fill="#38bdf8"
                        fillRule="evenodd"
                      />
                      <path
                        d="M186.278-292.2c189.479,51.451,355.773-7.44,458.823-139.531-16.989,30.45-40.479,60.9-77.86,91.351l46.577,93.23H540.131L515.1-299.082c-60.282,34.471-122.322,50-186.311,44.427l-.694,9.385H250.93l11.819-19.4a305.575,305.575,0,0,1-76.471-27.53"
                        transform="translate(-186.278 600.671)"
                        fill="#ffffff"
                        fillRule="evenodd"
                      />
                      <path
                        d="M246.018-285.432l75.082-4.38L369.067-393.68l37.54,83.22,57.007-24.4L371.152-521.948Z"
                        transform="translate(-121.58 521.948)"
                        fill="#38bdf8"
                        fillRule="evenodd"
                      />
                    </g>
                    <text
                      transform="translate(1424.201 481.909)"
                      fill="#ffffff"
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
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Your partner for building secure, scalable, and intelligent digital platforms. We build AI solutions, enterprise software, SaaS platforms, and scalable digital products that accelerate business growth.
            </p>

            {/* LinkedIn 5.0 Rating Badge */}
            <div className="pt-2">
              <a
                href="https://www.linkedin.com/company/avisoft-io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/80 hover:border-slate-600 transition-colors group"
              >
                <div className="w-8 h-8 rounded bg-[#0077b5] flex items-center justify-center text-white font-bold text-xs">
                  in
                </div>
                <div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#d6af37] text-[#d6af37]" />
                    ))}
                    <span className="text-xs font-bold text-white ml-1">5.0 / 5</span>
                  </div>
                  <p className="text-[11px] text-slate-400 group-hover:text-slate-300">
                    Client satisfaction & verified reviews
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100 mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              {servicesData.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100 mb-4">
              Industries
            </h4>
            <ul className="space-y-2 text-sm">
              {industriesData.slice(0, 8).map((ind) => (
                <li key={ind.slug}>
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {ind.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/industries"
                  className="text-brand-blue hover:text-sky-300 text-xs font-semibold inline-flex items-center pt-1"
                >
                  View All Industries →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company & Connect */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100 mb-4">
                Company
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/case-studies" className="text-slate-400 hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-slate-400 hover:text-white transition-colors">
                    Careers <span className="text-[10px] bg-green-900/60 text-green-300 px-1.5 py-0.5 rounded font-mono ml-1">We're hiring</span>
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="text-slate-400 hover:text-white transition-colors">
                    News & Insights
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="text-slate-400 hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100 mb-3">
                Locations & Connect
              </h4>
              <div className="space-y-2.5 text-xs text-slate-400">
                <div className="flex items-start space-x-2">
                  <Mail className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <a href="mailto:tech@avisoft.io" className="hover:text-white transition-colors">
                    tech@avisoft.io
                  </a>
                </div>
                <div className="flex items-start space-x-2">
                  <Phone className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <div>India: <a href="tel:+917051878001" className="hover:text-white">+91 705 187 8001</a></div>
                    <div>USA: <a href="tel:+17623800010" className="hover:text-white">+1 762 380 0010</a></div>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <a
                      href="https://maps.google.com/?q=Avisoft+Mohali"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white flex items-center gap-1"
                    >
                      Mohali, Punjab, India <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                    <a
                      href="https://maps.google.com/?q=Avisoft+Jammu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white flex items-center gap-1 mt-0.5"
                    >
                      Jammu, J&K, India <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Avisoft. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/terms-of-use" className="hover:text-slate-400 transition-colors">
              Terms of Use
            </Link>
            <span>·</span>
            <Link href="/contact-us" className="hover:text-slate-400 transition-colors">
              Partner with Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
