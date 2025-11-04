import AboutSection from "./components/AboutSection";
import {
  ContactSection,
  ProjectsSection,
  ServicesSection,
  TestimonialsSection,
} from "@/components/sections";
import TerminalHero from "./components/TerminalHero";

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-24  -translate-x-1/2 rounded-full bg-emerald-400/20 blur-[180px] sm:top-32" />
        <div className="absolute left-[12%]  -translate-x-1/2 rounded-full bg-emerald-300/10 blur-[160px] sm:left-[18%] " />
        <div className="absolute right-[8%] translate-x-1/2 rounded-full bg-sky-400/10 blur-[160px] sm:right-[14%] " />
      </div>
      <TerminalHero />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
