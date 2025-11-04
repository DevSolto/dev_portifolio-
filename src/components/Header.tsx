import Image from "next/image";
import Link from "next/link";

const menuItems = [
  { label: "Início", href: "#home" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/50 bg-white/70 backdrop-blur-md dark:border-zinc-800/60 dark:bg-zinc-900/40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <Link href="#home" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Logo pessoal" width={70} height={40} priority />
        </Link>
        <div className="flex items-center gap-6">
          <nav className="flex flex-wrap items-center justify-end gap-4 text-sm font-medium text-zinc-600 transition-colors dark:text-zinc-300">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative transition hover:text-zinc-900 dark:hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/curriculo.pdf"
            download
            className="rounded-full border border-zinc-300 bg-white/80 px-5 py-2 text-sm font-semibold text-zinc-700 shadow-sm transition hover:border-zinc-500 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-200 dark:hover:border-zinc-500 dark:hover:text-white"
          >
            Baixar currículo
          </Link>
        </div>
      </div>
    </header>
  );
}
