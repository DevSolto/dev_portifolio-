"use client";

import { useEffect, useMemo } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { useAboutStore } from "../store/aboutStore";

type Topic = {
  id: string;
  title: string;
  description: string;
};

type AboutSectionProps = {
  topics?: Topic[];
};

const DEFAULT_TOPICS: Topic[] = [
  {
    id: "mindset",
    title: "Arquitetura Mental",
    description:
      "Acredito em interfaces que respiram tecnologia — onde componentes são sistemas autônomos conectados por fluxos previsíveis de estado e dados. Busco equilíbrio entre lógica, estética e performance.",
  },
  {
    id: "stack",
    title: "Stack de Escolha",
    description:
      "React + TypeScript para previsibilidade. Zustand para estados simples e diretos. TanStack Query para sincronização de dados reativa. Vite para builds rápidos. shadcn/ui para consistência visual e acessibilidade.",
  },
  {
    id: "experience",
    title: "Experiência e Propósito",
    description:
      "Desenvolvo interfaces que unem design e engenharia. De dashboards a landing pages, foco em UX, acessibilidade e performance. Cada componente é uma peça de um sistema fluido e escalável.",
  },
];

const cardTransitions = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
} as const;

export default function AboutSection({ topics = DEFAULT_TOPICS }: AboutSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const activeTopic = useAboutStore((state) => state.activeTopic);
  const setActiveTopic = useAboutStore((state) => state.setActiveTopic);

  const normalizedTopics = useMemo(() => (topics.length ? topics : DEFAULT_TOPICS), [topics]);
  const currentTopic = normalizedTopics.find((topic) => topic.id === activeTopic);
  const fallbackTopic = normalizedTopics[0];
  const topicToDisplay = currentTopic ?? fallbackTopic;

  useEffect(() => {
    if (!currentTopic && fallbackTopic) {
      setActiveTopic(fallbackTopic.id);
    }
  }, [currentTopic, fallbackTopic, setActiveTopic]);

  return (
    <section
      id="sobre"
      className="relative px-6 py-20 text-white"
      aria-labelledby="about-section-title"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
            Sobre mim
          </span>
          <h2 id="about-section-title" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Engenharia de interfaces com propósito e fluidez.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Escolha um tópico para navegar pelo meu processo: mentalidade arquitetural, stack favorita e como transformo ideias em experiências digitais escaláveis.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            {normalizedTopics.map((topic) => {
              const isActive = topic.id === topicToDisplay?.id;

              return (
                <button
                  key={topic.id}
                  type="button"
                  aria-pressed={isActive}
                  aria-controls="about-topic-panel"
                  onClick={() => setActiveTopic(topic.id)}
                  onMouseEnter={() => setActiveTopic(topic.id)}
                  onFocus={() => setActiveTopic(topic.id)}
                  className={`group w-full rounded-2xl border border-white/10 px-6 py-6 text-left transition focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#8B5CF6] ${
                    isActive
                      ? "bg-white/10 ring-1 ring-inset ring-[#8B5CF6]/60"
                      : "bg-white/5 hover:border-[#06B6D4]/40 hover:bg-white/10"
                  }`}
                >
                  <span className="flex items-start justify-between gap-4">
                    <span className="text-lg font-semibold text-white">{topic.title}</span>
                    <span
                      aria-hidden
                      className={`mt-1 h-2 w-2 rounded-full transition ${
                        isActive ? "bg-[#8B5CF6] shadow-[0_0_12px_#8B5CF6]" : "bg-white/20"
                      }`}
                    />
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{topic.description}</p>
                </button>
              );
            })}
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 rounded-[30px] bg-gradient-to-br from-[#8B5CF6]/30 via-transparent to-[#06B6D4]/30 blur-3xl"
            />
            <div className="relative h-full rounded-[30px] border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_-25px_rgba(11,15,20,0.9)] backdrop-blur-md sm:p-10">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-white/50">Painel ativo</p>
                  <p className="mt-1 font-mono text-sm text-[#06B6D4]/90">~/sobre/{topicToDisplay?.id}</p>
                </div>
                <motion.span
                  aria-hidden
                  className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 shadow-sm"
                  initial={false}
                  animate={{
                    opacity: shouldReduceMotion ? 1 : [0.6, 1, 0.6],
                    scale: shouldReduceMotion ? 1 : [1, 1.04, 1],
                  }}
                  transition={{ repeat: shouldReduceMotion ? 0 : Infinity, duration: 3, ease: "easeInOut" }}
                >
                  React • Zustand • Framer Motion
                </motion.span>
              </div>

              <AnimatePresence mode="wait" initial={false}>
                {topicToDisplay && (
                  <motion.div
                    key={topicToDisplay.id}
                    initial={shouldReduceMotion ? { opacity: 1, y: 0 } : cardTransitions.initial}
                    animate={shouldReduceMotion ? { opacity: 1, y: 0 } : cardTransitions.animate}
                    exit={shouldReduceMotion ? { opacity: 0, y: 0 } : cardTransitions.exit}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.3,
                      ease: "easeOut",
                      delay: shouldReduceMotion ? 0 : 0.05,
                    }}
                    className="space-y-4"
                    id="about-topic-panel"
                    role="region"
                    aria-live="polite"
                  >
                    <motion.h3
                      layout
                      className="text-2xl font-semibold text-white"
                      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: [0.85, 1], textShadow: "0 0 18px rgba(139, 92, 246, 0.45)" }}
                      transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: "easeInOut" }}
                    >
                      {topicToDisplay.title}
                    </motion.h3>
                    <p className="max-w-xl text-base leading-relaxed text-white/75">
                      {topicToDisplay.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
