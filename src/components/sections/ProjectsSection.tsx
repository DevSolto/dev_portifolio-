type Project = {
  title: string;
  description: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "Dashboard de Analytics",
    description:
      "Painel interativo desenvolvido em Next.js e Tailwind, com gráficos em tempo real integrados a APIs externas.",
    tags: ["Next.js", "Recharts", "Tailwind"],
  },
  {
    title: "Landing page SaaS",
    description:
      "Site institucional otimizado para conversão, com testes A/B, conteúdo gerenciável e integração com plataformas de CRM.",
    tags: ["React", "CMS", "Vercel"],
  },
  {
    title: "E-commerce headless",
    description:
      "Experiência de compra dinâmica com catálogos em tempo real e checkout customizado.",
    tags: ["Next.js", "Shopify", "TypeScript"],
  },
];

export function ProjectsSection() {
  return (
    <section id="projetos" className="bg-white py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-5xl space-y-12 px-6 sm:px-8">
        <div className="space-y-4 text-center md:text-left">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500">
            Projetos
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
            Seleção de projetos que demonstram minha atuação.
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-300 md:max-w-3xl">
            Cada projeto foi desenvolvido com foco em entregar valor, performance e uma experiência fluida para usuários finais.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-zinc-200 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-zinc-800"
            >
              <header className="space-y-2">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">{project.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{project.description}</p>
              </header>
              <footer className="mt-auto flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
