"use client";

import { SEQ_DEFAULT } from "../lib/terminalSequences";
import { Terminal } from "./Terminal";

const TerminalHero = () => {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 py-24 text-white lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
      <div className="space-y-6">
        <span className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200/90">
          DevSouto Portfolio
        </span>
        <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
          Hero animado inspirado em terminais Next.js.
        </h1>
        <p className="max-w-xl text-base text-white/70 sm:text-lg">
          Simule comandos reais com rolagem automática, cursor vivo e loops configuráveis. Ajuste a sequência sem tocar no componente: basta editar <code className="rounded bg-white/10 px-1 py-0.5 text-xs">terminalSequences.ts</code>.
        </p>
        <div className="flex flex-col gap-3 text-sm text-white/60 sm:flex-row sm:items-center sm:gap-6">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-300" aria-hidden="true" />
            Loop automático com pausa suave.
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-300" aria-hidden="true" />
            Respeita prefers-reduced-motion.
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute -inset-6 hidden rounded-3xl bg-emerald-400/10 blur-3xl lg:block" aria-hidden="true" />
        <Terminal sequence={SEQ_DEFAULT} loop className="relative z-10" title="Next.js logs" />
      </div>
    </section>
  );
};

export default TerminalHero;
