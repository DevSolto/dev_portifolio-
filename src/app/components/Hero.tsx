"use client";

import { useCallback, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Inter, Space_Grotesk } from "next/font/google";

import { Button } from "@/components/ui/button";
import { Terminal } from "./Terminal";
import heroConfig, { heroSequence } from "../lib/heroConfig";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  const terminalTheme = useMemo(() => heroConfig.terminal.theme, []);

  const handleScroll = useCallback(
    (targetId: string) => {
      const section = document.getElementById(targetId);
      if (!section) {
        return;
      }

      section.scrollIntoView({ behavior: shouldReduceMotion ? "auto" : "smooth", block: "start" });
    },
    [shouldReduceMotion]
  );

  const textMotionProps = shouldReduceMotion
    ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y: 28 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, ease: "easeOut" },
      };

  const terminalMotionProps = shouldReduceMotion
    ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.75, ease: "easeOut", delay: 0.15 },
      };

  return (
    <section
      className="relative flex min-h-[88vh] w-full items-center justify-center bg-[#0B0F14] px-6 py-24 text-white"
      id="inicio"
      role="region"
      aria-label="Seção principal com apresentação e terminal interativo"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {shouldReduceMotion ? (
          <div className="absolute left-1/2 top-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(139,92,246,0.35)_0%,_rgba(6,182,212,0.18)_45%,_transparent_70%)] blur-3xl" />
        ) : (
          <motion.div
            initial={{ opacity: 0.45, scale: 0.85 }}
            animate={{ opacity: [0.45, 0.65, 0.45], scale: [0.85, 1.05, 0.9] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(139,92,246,0.32)_0%,_rgba(6,182,212,0.14)_45%,_transparent_70%)] blur-3xl"
          />
        )}
        <div className="absolute -left-32 bottom-[-120px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,_rgba(6,182,212,0.18)_0%,_transparent_70%)] blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-16 lg:flex-row lg:items-stretch lg:justify-between">
        <motion.div
          {...textMotionProps}
          className="flex w-full max-w-xl flex-col items-center text-center lg:items-start lg:text-left"
        >
          <span
            className={`${inter.className} inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/70`}
          >
            <span className="h-2 w-2 rounded-full bg-[#8B5CF6] shadow-[0_0_18px_rgba(139,92,246,0.65)]" aria-hidden />
            React Runtime Ready
          </span>

          <h1
            className={`${spaceGrotesk.className} mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl`}
          >
            {heroConfig.headline}
          </h1>

          <p
            className={`${inter.className} mt-5 max-w-xl text-lg leading-relaxed text-white/70`}
          >
            {heroConfig.subheadline}
          </p>

          <div className={`${inter.className} mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 shadow-[0_0_30px_rgba(6,182,212,0.25)]`}
          >
            <span className="h-2 w-2 rounded-full bg-[#06B6D4] motion-safe:animate-pulse" aria-hidden />
            {heroConfig.badge.label}
          </div>

          <div className="mt-10 flex w-full flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            {heroConfig.buttons.map((button) => (
              <Button
                key={button.targetId}
                variant={button.variant}
                size="lg"
                aria-label={`${button.label} - ir para a seção ${button.targetId}`}
                className={
                  button.variant === "default"
                    ? "shadow-[0_0_30px_rgba(139,92,246,0.45)]"
                    : "border-white/20 text-white/80 hover:border-white/40 hover:text-white"
                }
                onClick={() => handleScroll(button.targetId)}
              >
                {button.label}
              </Button>
            ))}
          </div>
        </motion.div>

        <motion.div
          {...terminalMotionProps}
          className="relative w-full max-w-xl"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-5 rounded-[28px] bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.28),_rgba(6,182,212,0.18)_45%,_transparent_75%)] blur-3xl"
          />
          <div className="relative">
            <Terminal
              sequence={heroSequence}
              loop
              pauseMs={heroConfig.terminal.pauseMs}
              className="shadow-[0_40px_120px_rgba(8,12,20,0.65)]"
              title={heroConfig.terminal.title}
              prompt={heroConfig.terminal.prompt}
              theme={terminalTheme}
            />
            <div className={`${inter.className} mt-6 rounded-2xl border border-white/5 bg-white/5 px-5 py-4 text-sm text-white/70 backdrop-blur`}
            >
              <p className="font-medium text-white/80">Stack focada em performance</p>
              <p className="mt-1 leading-relaxed text-white/60">
                React 19, Next.js App Router, streaming RSC, Zustand e shadcn/ui conectados a métricas de tempo real para produtos digitais de alta performance.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
