## Visão geral

DevSouto Portfolio é um projeto construído com **Next.js (App Router)**, **TypeScript**, **Tailwind CSS** e animações com **Framer Motion**. O objetivo é apresentar informações profissionais em uma landing page responsiva e acessível.

## Executando localmente

```bash
pnpm install
pnpm dev
```

A aplicação ficará disponível em `http://localhost:3000`.

## Seção "Sobre mim"

A seção "Sobre mim" fica em `src/app/components/AboutSection.tsx` e é importada na página principal (`src/app/page.tsx`). Ela possui dois elementos principais:

- Lista de tópicos clicáveis à esquerda (mobile-first) que controla o estado interno do componente.
- Card descritivo animado à direita que exibe os detalhes do tópico selecionado.

### Como adicionar novos tópicos

1. Abra `src/app/components/AboutSection.tsx`.
2. Edite o array `DEFAULT_TOPICS` ou envie uma propriedade `topics` ao componente com os novos itens. Cada tópico deve seguir a interface `{ id: string; title: string; description: string; }`.
3. Novos tópicos aparecerão automaticamente na lista e no card dinâmico.

### Ajustando animações

- As animações utilizam `framer-motion` com `AnimatePresence` e `motion.div`.
- Para alterar duração ou easing, atualize o objeto `transition` passado ao `motion.div` do card.
- O componente respeita preferências de movimento reduzido via `useReducedMotion`.

## Integração na página principal

O componente é utilizado diretamente na página inicial:

```tsx
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main>
      <AboutSection />
    </main>
  );
}
```

Outras seções continuam disponíveis através de `src/components/sections`.
