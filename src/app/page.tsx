import AboutSection from "./components/AboutSection";
import Hero from "./components/Hero";
import {
  ContactSection,
  ProjectsSection,
  ServicesSection,
  TestimonialsSection,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden bg-[#04070d] text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-80 -translate-x-1/2 rounded-full bg-[#8B5CF6]/15 blur-[200px]" />
        <div className="absolute left-[12%] top-[640px] -translate-x-1/2 rounded-full bg-[#06B6D4]/12 blur-[180px] sm:left-[18%]" />
        <div className="absolute right-[10%] top-[960px] translate-x-1/2 rounded-full bg-[#22d3ee]/10 blur-[200px] sm:right-[14%]" />
      </div>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
