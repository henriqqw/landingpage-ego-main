# 02 — Arquitetura

> **Status:** ✅ Definido · Princípio: **clean code, SOLID, minimal** — claro, objetivo, sem excesso.

## Princípios
- **Minimalismo:** simples e objetivo; sem abstração prematura. Menos peças, mais clareza.
- **Responsabilidade única:** cada componente faz uma coisa — **1 seção = 1 componente**.
- **Conteúdo separado da apresentação:** textos/dados em `content/`; componentes só renderizam.
- **DRY com parcimônia:** primitivos reutilizáveis (`Button`, `Section`, `Container`) sem over-engineering.
- **Estado só onde precisa:** site estático; JS apenas em interação real (menu mobile, formulário).
- **Semântico e acessível por padrão.**

> SOLID traduzido pro contexto estático:
> **S** componentes de responsabilidade única · **O/L** primitivos extensíveis por `props`/`slots`
> (sem reescrever) · **I** props enxutas por componente · **D** integrações (leads, analytics) atrás
> de uma camada fina em `src/lib/`, nunca espalhadas pelo markup.

## Estrutura de pastas
```
egocriativo-site/
├── public/                     # servidos como estão (sem processamento)
│   ├── logos/  fonts/          # SVG do logo + fontes .woff2
│   ├── favicon.ico  og-image.*  robots.txt
├── src/
│   ├── assets/                 # imagens processadas pelo <Image> (renders 3D migram p/ cá)
│   ├── components/
│   │   ├── ui/                 # primitivos: Button, Container, Section, Badge, Card
│   │   ├── sections/           # Hero, Stats, Dores, Solucoes, Metodo, Diferenciais,
│   │   │                       #   Autoridade, ProvaSocial, FAQ, CTAFinal
│   │   └── layout/             # Header, Nav, Footer
│   ├── content/                # dados/copy: site.ts (config), services.ts, awards.ts, faq.ts
│   ├── layouts/                # BaseLayout.astro (head, SEO, fontes, analytics)
│   ├── lib/                    # leads.ts (submitLead placeholder), analytics.ts (Umami), seo.ts
│   ├── styles/                 # tokens da marca + global.css (Tailwind)
│   └── pages/
│       └── index.astro         # monta as seções na ordem do funil
├── astro.config.mjs · tailwind.config.* · tsconfig.json · package.json
```

## Cada seção = um componente
- Os blocos do funil (copy) viram componentes em `components/sections/`.
- **Dados fora do markup:** serviços, prêmios e FAQ vivem em `src/content/*` (arrays tipados); a
  seção só itera e renderiza. Trocar um texto = editar dado, não mexer no componente.

## Fluxo do formulário
- `LeadForm` (com ilha JS mínima) → **valida no front** → chama `submitLead()` em `lib/leads.ts`
  (**endpoint `TODO`/placeholder**) → estados de **sucesso/erro**. **Fallback:** botão WhatsApp.

## Integrações (isoladas em `src/lib/`)
- **Analytics:** `lib/analytics.ts` centraliza os eventos do Umami (`trackCtaClick`, `trackWhatsapp`,
  `trackFormSubmit`).
- **WhatsApp / contato:** `src/content/site.ts` guarda número, URLs e IDs (placeholders) — nada
  hardcoded espalhado.
- **21st.dev:** ferramenta de **desenvolvimento** (referência/geração), **não** entra em runtime.

## Convenções
- `.astro` para tudo estático; **React só em ilha** quando um componente do 21st exigir interação rica.
- Um componente por arquivo; nomes claros (PascalCase p/ componentes); **props tipadas**.
- **Config central** em `src/content/site.ts` (nome, contato, URLs, IDs de analytics).
- Estilo via **tokens Tailwind da marca**; sem CSS duplicado solto.
