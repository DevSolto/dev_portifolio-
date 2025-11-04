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

A seção "Sobre mim" vive em `src/app/components/AboutSection.tsx` e agora é alimentada por um store global baseado em Zustand (`src/app/store/aboutStore.ts`). A hierarquia foi pensada para reforçar o storytelling técnico:

- **Painel esquerdo**: lista de tópicos focada em acessibilidade (botões com `aria-pressed` e foco visível).
- **Painel direito**: card dinâmico com transições suaves (`AnimatePresence`) e badge flutuante destacando a stack React moderna.

### Como adicionar novos tópicos

1. Abra `src/app/components/AboutSection.tsx`.
2. Atualize o array `DEFAULT_TOPICS` (ou injete uma prop `topics`) adicionando itens com `{ id: string; title: string; description: string; }`.
3. Opcionalmente, ajuste o estado inicial no store (`src/app/store/aboutStore.ts`) caso queira que a seção comece com um tópico específico.

### Estado global com Zustand

- O hook `useAboutStore` exportado de `src/app/store/aboutStore.ts` centraliza o tópico ativo.
- Para reutilizar o estado em outros componentes, basta importar `useAboutStore` e consumir `activeTopic` ou `setActiveTopic` via selectors.
- O projeto expõe uma implementação leve de `create` em `src/lib/zustand.ts`, mantendo a mesma API do pacote oficial e evitando dependências extras no ambiente atual.

### Ajustando animações e tema

- As transições principais estão no objeto `cardTransitions` e nos props `initial/animate/exit` dos elementos `motion`.
- Para alterar timing, easing ou delays, edite o `transition` passado ao card ou ao título.
- As cores de destaque utilizam `#8B5CF6` (primária) e `#06B6D4` (secundária); adapte no Tailwind se quiser personalizar o tema.

## Integração na página principal

O componente continua importado diretamente em `src/app/page.tsx`. Não é necessário passar props — os tópicos padrão e o estado global já garantem o comportamento interativo out of the box.
