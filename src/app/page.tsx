
import AboutSection from "./components/AboutSection";
import TerminalHero from "./components/TerminalHero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f14] text-white">
      <TerminalHero />
      <AboutSection />
      
    </main>
  );
}
