export function AboutSection() {
  return (
    <section id="sobre" className="bg-white py-24 dark:bg-zinc-950">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 sm:px-8 md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500">
            Sobre mim
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
            Criando interfaces intuitivas com foco em performance e acessibilidade.
          </h2>
          <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
            Tenho experiência na construção de aplicações web responsivas utilizando React, Next.js e as melhores práticas de
            desenvolvimento frontend. Busco constantemente aprimorar minhas habilidades e entregar soluções que geram resultados
            reais para empresas e usuários.
          </p>
          <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
            Além de desenvolvimento, colaboro em processos de design, documentação técnica e otimização contínua de produtos
            digitais, trabalhando em equipe com foco em impacto e qualidade.
          </p>
        </div>
        <div className="space-y-4 rounded-3xl border border-zinc-200 p-8 shadow-sm dark:border-zinc-800">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Habilidades principais</h3>
          <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
            <li>Componentização e design systems</li>
            <li>Boas práticas de performance web</li>
            <li>Integração com APIs REST e GraphQL</li>
            <li>Testes automatizados e qualidade de código</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
