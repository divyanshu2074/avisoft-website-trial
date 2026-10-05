"use client";

import Image from "next/image";
import { assetUrl } from "@/lib/utils";

interface ClientLogo {
  name: string;
  src?: string;
  fallbackText?: string;
}

const clientLogos: ClientLogo[] = [
  { name: "KDDI povo 2.0", src: "/case-studies/kddi-povo.svg" },
  { name: "PNC Bank", src: "/case-studies/pnc-bank.svg" },
  { name: "Galaxy Digital", src: "/case-studies/galaxy-one.svg" },
  { name: "Spendgo", src: "/case-studies/spendego.svg" },
  { name: "Homebazaar", src: "/case-studies/home-bazaar.svg" },
  { name: "Yapsody", src: "/case-studies/yapsody.svg" },
  { name: "Helical Insight", src: "/case-studies/helical-insight.svg" },
  { name: "Universal", src: "/case-studies/universal-orlando.svg" },
];

export function ClientLogoStrip() {
  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-xs font-bold uppercase tracking-widest text-slate-500 mb-8">
          Trusted by global businesses
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center justify-items-center opacity-85 hover:opacity-100 transition-opacity">
          {clientLogos.map((client, idx) => (
            <div
              key={idx}
              className="h-12 w-full flex items-center justify-center p-2 rounded-lg bg-slate-50/60 hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200"
              title={client.name}
            >
              {client.src ? (
                <div className="relative h-8 w-28 flex items-center justify-center">
                  <Image
                    src={assetUrl(client.src)}
                    alt={client.name}
                    width={110}
                    height={32}
                    className="max-h-7 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-200"
                  />
                </div>
              ) : (
                <span className="text-xs font-semibold text-slate-700 tracking-tight">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
