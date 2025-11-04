const services = [
  {
    title: "Desenvolvimento de interfaces",
    description:
      "Construção de interfaces responsivas com foco em usabilidade, acessibilidade e performance para web.",
  },
  {
    title: "Aplicações Next.js",
    description:
      "Implementação de aplicações completas com SSR, SSG e integrações com APIs, otimizando SEO e experiência.",
  },
  {
    title: "Design systems",
    description:
      "Criação de bibliotecas de componentes reutilizáveis alinhadas à identidade visual do produto.",
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-zinc-50 py-24 dark:bg-zinc-900">
      <div className="mx-auto max-w-5xl space-y-12 px-6 sm:px-8">
        <div className="space-y-4 text-center md:text-left">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500">
            Serviços
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
            Como posso ajudar no seu próximo projeto.
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-300 md:max-w-3xl">
            Atuo desde o planejamento até a entrega, garantindo que cada etapa seja pensada para potencializar a experiência do
            usuário e atingir objetivos de negócio.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex h-full flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">{service.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
