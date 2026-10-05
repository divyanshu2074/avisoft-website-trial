import { Hero } from "@/components/home/Hero";
import { ClientLogoStrip } from "@/components/home/ClientLogoStrip";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { IndustriesGrid } from "@/components/home/IndustriesGrid";
import { StaffAugmentation } from "@/components/home/StaffAugmentation";
import { CaseStudiesCarousel } from "@/components/home/CaseStudiesCarousel";
import { TechStackGrid } from "@/components/home/TechStackGrid";
import { ContactCTAForm } from "@/components/home/ContactCTAForm";
import { FAQAccordion } from "@/components/home/FAQAccordion";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientLogoStrip />
      <ServicesGrid />
      <IndustriesGrid />
      <StaffAugmentation />
      <CaseStudiesCarousel />
      <TechStackGrid />
      <ContactCTAForm />
      <FAQAccordion />
    </>
  );
}
