export function ContactSection() {
  return (
    <section id="contato" className="bg-white py-24 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-5xl flex-col gap-12 px-6 sm:px-8 md:flex-row md:items-start">
        <div className="space-y-4 md:w-1/2">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500">Contato</span>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
            Vamos conversar sobre o seu próximo projeto.
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-300">
            Preencha o formulário ou envie um e-mail para
            <a className="ml-2 font-medium text-zinc-900 underline dark:text-zinc-100" href="mailto:contato@seudominio.com">
              contato@seudominio.com
            </a>
          </p>
        </div>
        <form className="grid flex-1 gap-4 rounded-3xl border border-zinc-200 bg-zinc-50 p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <label className="space-y-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Nome
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500/40 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
            />
          </label>
          <label className="space-y-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            E-mail
            <input
              type="email"
              placeholder="seuemail@email.com"
              className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500/40 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
            />
          </label>
          <label className="space-y-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Mensagem
            <textarea
              rows={4}
              placeholder="Como posso ajudar?"
              className="w-full resize-none rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500/40 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
            />
          </label>
          <button
            type="submit"
            className="mt-2 w-full rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
}
