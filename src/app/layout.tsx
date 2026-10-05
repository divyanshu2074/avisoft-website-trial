import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avisoft | AI Software Development Company & Platform Engineering",
  description:
    "Partner with Avisoft to build AI solutions, enterprise software, SaaS platforms, and scalable digital products that accelerate business growth.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white text-slate-800 antialiased selection:bg-blue-100 selection:text-brand-blue">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
