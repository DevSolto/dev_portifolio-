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
        <div className="absolute left-1/2 top-24 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-emerald-400/20 blur-[180px] sm:top-32 md:h-[42rem] md:w-[42rem]" />
        <div className="absolute left-[12%] top-[46rem] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-emerald-300/10 blur-[160px] sm:left-[18%] sm:top-[42rem]" />
        <div className="absolute right-[8%] top-[78rem] h-[28rem] w-[28rem] translate-x-1/2 rounded-full bg-sky-400/10 blur-[160px] sm:right-[14%] sm:top-[72rem]" />
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
