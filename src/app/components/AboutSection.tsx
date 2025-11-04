"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

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
    id: "intro",
    title: "Quem sou",
    description:
      "Sou um desenvolvedor frontend apaixonado por criar experiências digitais que combinam performance, acessibilidade e design minimalista. Meu foco está em entender o problema, colaborar com o time e entregar produtos que façam diferença.",
  },
  {
    id: "stack",
    title: "Tecnologias",
    description:
      "Trabalho diariamente com Next.js, React, Tailwind CSS e Node.js, além de ferramentas de automação e qualidade como TypeScript, ESLint e testes automatizados. Gosto de explorar novas tecnologias e incorporar boas práticas no fluxo de desenvolvimento.",
  },
  {
    id: "xp",
    title: "Experiência",
    description:
      "Atuei em projetos reais focados em produtos escaláveis, performance e UX, colaborando com times multidisciplinares. Tenho experiência em transformar interfaces em soluções robustas, sempre atento aos detalhes e à satisfação do usuário final.",
  },
];

export default function AboutSection({ topics = DEFAULT_TOPICS }: AboutSectionProps) {
  const validTopics = useMemo(() => (topics.length > 0 ? topics : DEFAULT_TOPICS), [topics]);
  const [activeId, setActiveId] = useState<string>(validTopics[0]?.id ?? "intro");
  const shouldReduceMotion = useReducedMotion();

  const activeTopic = validTopics.find((topic) => topic.id === activeId) ?? validTopics[0];

  return (
    <section
      id="sobre"
      className=" px-6 py-20 text-white"
      aria-labelledby="about-section-title"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
            Sobre mim
          </span>
          <h2 id="about-section-title" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Explorando histórias, tecnologias e experiências.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Clique em um tópico para conhecer mais sobre minha trajetória, stack principal e como aplico tudo isso em projetos reais.
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            {validTopics.map((topic) => {
              const isActive = topic.id === activeTopic?.id;

              return (
                <button
                  key={topic.id}
                  type="button"
                  role="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveId(topic.id)}
                  className={`w-full rounded-2xl border px-6 py-5 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${isActive
                      ? "border-white/40 bg-white/10 shadow-lg backdrop-blur"
                      : "border-white/20 bg-white/5 hover:border-white/30 hover:bg-white/10"
                    } ${shouldReduceMotion ? "" : "transform transition-transform hover:-translate-y-0.5"}`}
                >
                  <span className="text-lg font-semibold text-white">{topic.title}</span>
                  <p className="mt-2 text-sm text-white/70">{topic.description}</p>
                </button>
              );
            })}
          </div>
          <div className="relative">
            <AnimatePresence mode="wait">
              {activeTopic && (
                <motion.div
                  key={activeTopic.id}
                  initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? { opacity: 0, y: 0 } : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0b1119]/80 shadow-2xl backdrop-blur"
                >
                  <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-400/80" aria-hidden="true" />
                      <span className="h-3 w-3 rounded-full bg-yellow-300/80" aria-hidden="true" />
                      <span className="h-3 w-3 rounded-full bg-emerald-400/80" aria-hidden="true" />
                    </div>
                    <p className="pointer-events-none select-none text-xs font-medium uppercase tracking-[0.2em] text-white/50">
                      Sobre mim
                    </p>
                    <span aria-hidden="true" className="w-6" />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 px-6 py-6 text-white/80">
                    <h3 className="text-2xl font-semibold text-white">{activeTopic.title}</h3>
                    <p className="text-base leading-relaxed">{activeTopic.description}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
