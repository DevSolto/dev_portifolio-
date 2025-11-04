type Testimonial = {
  name: string;
  role: string;
  message: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Ana Pereira",
    role: "Product Manager na StartX",
    message:
      "Colaboração excepcional! O projeto foi entregue antes do prazo e com uma preocupação incrível com detalhes e performance.",
  },
  {
    name: "Carlos Lima",
    role: "CEO na DevHouse",
    message:
      "Transformou nossa ideia em um produto digital robusto, com design impecável e uma experiência de uso muito elogiada.",
  },
];

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="bg-zinc-50 py-24 dark:bg-zinc-900">
      <div className="mx-auto max-w-5xl space-y-12 px-6 sm:px-8">
        <div className="space-y-4 text-center md:text-left">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500">
            Depoimentos
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
            Clientes e parceiros falando sobre o trabalho.
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-300 md:max-w-3xl">
            Feedback real de pessoas com quem tive o prazer de construir produtos digitais relevantes.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex h-full flex-col justify-between gap-4 rounded-3xl border border-zinc-200 bg-white p-8 text-left shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
            >
              <blockquote className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                “{testimonial.message}”
              </blockquote>
              <figcaption className="space-y-1">
                <p className="text-base font-semibold text-zinc-900 dark:text-white">{testimonial.name}</p>
                <p className="text-xs uppercase tracking-wide text-zinc-400 dark:text-zinc-500">{testimonial.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
