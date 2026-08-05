# 01 — Stack técnica

> **Status:** ✍️ Em definição · Núcleo decidido; itens menores marcados como *recomendação (confirmar)*.

## Decisões de base (transversais)
- **Tipo de site:** Landing **estática**, **one-page** com âncoras. ✅
- **Hospedagem:** **Cloudflare Pages** (build e publish automáticos a cada push). ✅
- **Domínio:** `egocriativo.com.br` — **registrado/gerenciado na HostGator**; o DNS será apontado
  para a Cloudflare. **E-mail (@egocriativo.com.br) permanece na HostGator** (preservar registros MX). ✅
- **Sem Docker.** (Constraint do ambiente.) ✅
- Servidor Debian + Cloudflare Tunnel: **reservado para backend**, se necessário (ex.: leads). A decidir no `03-system-design`.

## Framework / linguagem
- **Astro** (saída 100% estática; Vite por baixo). ✅
- Componentes `.astro` (HTML + pouca lógica) para cada seção; ilhas React só onde necessário.

## Estilização
- **Tailwind CSS**. ✅
- Tokens de design (cores, tipografia, espaçamento) via config do Tailwind + variáveis CSS — detalhes no `05-design`.

## Build / bundler
- `astro build` → `dist/` (estático). O **Cloudflare Pages roda o build no deploy**. ✅

## Gerenciador de pacotes
> **Recomendado (confirmar):** `npm` (simples e padrão). Alternativa: `pnpm` (mais rápido).

## Runtime / Node
> **Recomendado (confirmar):** Node LTS (20+), fixado no Pages via variável de ambiente/`.nvmrc`.

## Integração com o 21st.dev
- **Referência (grátis):** `search` para padrões de cada seção; `search_logo` para logos SVG.
- **Geração:** `generate` modo `sketch` (HTML/Tailwind) → adaptar para `.astro`.
- **Componentes React (pago):** `get_component` **só quando** um componente do 21st for usado como
  **ilha React** — nesse caso, adicionar a integração `@astrojs/react`. Fora isso, não instalar React.

## Bibliotecas (recomendações a confirmar)
> - **Ícones:** `astro-icon` + set **Lucide** (combina com a estética shadcn/21st).
> - **Fontes:** **self-hosted**. As **fontes da marca** (Rondalo, Moonbeam) são servidas direto dos
>   arquivos em `public/fonts/` (converter `.ttf` → `.woff2` para peso/perf). `@fontsource` só se
>   adicionarmos alguma fonte open-source extra. Escolha final de tipografia no `05-design`.
> - **Imagens:** componente `<Image>` do Astro (otimização automática, WebP/AVIF).
> - **Animações:** CSS-first; se precisar, uma lib leve de scroll-reveal. Manter mínimo e respeitar
>   `prefers-reduced-motion`.
> - **Formulário/validação:** definido junto do backend de leads no `03-system-design`.

## Deploy / repositório
> **Recomendado (confirmar):** repositório **Git no GitHub** conectado ao **Cloudflare Pages**
> (deploy automático a cada push; preview deploys em PRs). Alternativa: upload manual via `wrangler`.

## Pendências desta camada (para fechar)
- [ ] Confirmar gerenciador de pacotes (npm) e Node LTS.
- [ ] Confirmar GitHub + deploy automático no Pages.
- [ ] Confirmar libs (ícones Lucide, fontes @fontsource, imagens `<Image>`).
- [ ] Backend do formulário/leads → decidir em `03-system-design`.
