## Visão geral

DevSouto Portfolio é um projeto construído com **Next.js (App Router)**, **TypeScript**, **Tailwind CSS** e animações com **Framer Motion**. O objetivo é apresentar informações profissionais em uma landing page responsiva e acessível.

## Seção Hero com terminal reativo

A seção Hero (`src/app/components/Hero.tsx`) foi reescrita para reproduzir o boot de uma aplicação React moderna com um terminal animado, animações suaves via Framer Motion e CTAs utilizando o componente `Button` do shadcn/ui.

- O conteúdo textual, botões e logs do terminal são carregados a partir do arquivo `src/app/lib/hero.config.json`.
- O terminal utiliza o hook `useTypewriterSequence` para respeitar `prefers-reduced-motion` e simular digitação linha a linha.
- Os botões "Ver projetos" e "Entrar em contato" realizam `scrollIntoView` suave (ou instantâneo, caso a pessoa usuária prefira menos movimento).

### Como atualizar textos e logs da Hero

1. Abra `src/app/lib/hero.config.json`.
2. Atualize os campos `headline`, `subheadline` e `badge.label` com os novos textos.
3. Ajuste o array `buttons` para controlar o texto (`label`), o estilo (`variant`) e o destino de cada CTA (`targetId`).
4. Modifique o objeto `terminal` para customizar título (`title`), prompt (`prompt`), tempo de espera entre ciclos (`pauseMs`) e a sequência de logs (`lines`). Cada linha aceita `type` (`"cmd"` ou `"out"`), `text`, `delay` e `speed`.
5. Para alterar cores ou intensidade do brilho do terminal, edite as classes dentro de `terminal.theme` (`textClassName`, `cursorClassName` e `glowClassName`).

Ao salvar o arquivo JSON, o componente é atualizado automaticamente sem necessidade de alterar o código TypeScript. Caso seja necessário ampliar a tipagem ou reutilizar os dados em outros componentes, utilize `src/app/lib/heroConfig.ts`, que exporta tanto a configuração tipada quanto a sequência normalizada para o terminal.

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
