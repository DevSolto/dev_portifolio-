"use client";

import { SEQ_DEFAULT } from "../lib/terminalSequences";
import { Terminal } from "./Terminal";

const TerminalHero = () => {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 py-24 text-white lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
      <div className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.4em] text-zinc-500 dark:text-zinc-400">
          Desenvolvedor Frontend
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
          Construindo experiências digitais modernas e eficientes.
        </h1>
        <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
          Portfólio pessoal com uma seleção de projetos, serviços e depoimentos de clientes.
          Explore para conhecer melhor meu trabalho e entre em contato.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            href="#projetos"
          >
            Ver projetos
          </a>
          <a
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 transition hover:border-zinc-500 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500"
            href="#contato"
          >
            Entrar em contato
          </a>
        </div>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute -inset-6 hidden rounded-3xl bg-emerald-400/10 blur-3xl lg:block" aria-hidden="true" />
<<<<<<< HEAD
        <Terminal
          sequence={SEQ_DEFAULT}
          loop
          pauseMs={30000}
          className="relative z-10"
          title="Next.js logs"
        />
=======
        <Terminal sequence={SEQ_DEFAULT} loop className="relative z-10" title="terminal" />
>>>>>>> ea7a66d (merge)
      </div>
    </section>
  );
};

export default TerminalHero;
