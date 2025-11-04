export function HeroSection() {
  return (
    <section
      id="home"
      className="bg-gradient-to-b from-zinc-50 via-white to-zinc-100 py-24 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 text-center sm:px-8 md:flex-row md:items-end md:justify-between md:text-left">
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
        <div className="flex flex-col items-center gap-3 text-left md:items-end">
          <span className="text-sm uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500">Stack Atual</span>
          <ul className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-zinc-600 dark:text-zinc-300">
            <li className="rounded-full border border-zinc-200 px-4 py-2 dark:border-zinc-700">React</li>
            <li className="rounded-full border border-zinc-200 px-4 py-2 dark:border-zinc-700">Next.js</li>
            <li className="rounded-full border border-zinc-200 px-4 py-2 dark:border-zinc-700">TypeScript</li>
            <li className="rounded-full border border-zinc-200 px-4 py-2 dark:border-zinc-700">Tailwind CSS</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
