import {
  ContactSection,
  HeroSection,
  ProjectsSection,
  ServicesSection,
  TestimonialsSection,
} from "@/components/sections";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f14] text-white">
      <TerminalHero />
    </main>
  );
}
