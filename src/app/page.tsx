import AboutSection from "./components/AboutSection";
import {
  ContactSection,
  HeroSection,
  ProjectsSection,
  ServicesSection,
  TestimonialsSection,
} from "@/components/sections";
import TerminalHero from "./components/TerminalHero";

export default function Home() {
  return (
    <main>
      <TerminalHero />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
