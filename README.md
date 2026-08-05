# Landing Page — Ego Criativo

Landing page institucional da **Ego Criativo**, agência de publicidade, tecnologia e eventos.
Site estático em **Astro + Tailwind v4**, com deploy contínuo na Vercel

> Site de produção: [egocriativo.com.br](https://egocriativo.com.br)

## Stack

| Camada | Escolha |
| --- | --- |
| Framework | [Astro](https://astro.build) 7 (HTML estático, zero JS por padrão) |
| Estilização | Tailwind CSS 4 via `@tailwindcss/vite` + design tokens em `@theme` |
| Tipografia | Hanken Grotesk (`@fontsource-variable`) + fontes da marca (`Moonbeam`, `Rondalo`) |
| Scroll | [Lenis](https://github.com/darkroomengineering/lenis) |
| SEO | `@astrojs/sitemap`, Open Graph, JSON-LD (Organization) |
| Analytics | Umami Cloud (cookieless — sem banner de cookies) |
| Hospedagem | Vercel |

## Estrutura

```text
.
├── .claude/agents/          # subagente ego-landing-builder (constrói a partir do contexto)
├── context/landing/         # fonte de verdade do projeto — ver seção "Contexto"
└── egocriativo-site/        # a aplicação Astro
    ├── public/              # logos, renders 3D, fontes, robots.txt
    └── src/
        ├── components/
        │   ├── layout/      # Header, Footer
        │   ├── sections/    # blocos da página (Hero, Pains, Method, Offer, Faq, ...)
        │   └── ui/          # primitivos reutilizáveis (Button, Section, Counter, ...)
        ├── content/         # todo o conteúdo textual e de dados (ver abaixo)
        ├── layouts/         # BaseLayout (head, SEO, fontes)
        ├── lib/             # analytics.ts, leads.ts
        ├── scripts/         # counters.ts, track.ts
        └── styles/          # global.css (design tokens Tailwind)
```

### Onde mexer no conteúdo

Nada de texto fica hardcoded nos componentes. Tudo vem de `egocriativo-site/src/content/`:

- **`site.ts`** — configuração central: nome, URL, contatos, redes, analytics, navegação, barra de estatísticas
- **`copy.ts`** — textos de todas as seções
- **`services.ts`** — catálogo de serviços
- **`prova.ts`** — prova social: prêmios, marcos e trajetória

Trocar o WhatsApp em `site.ts` vale para a página inteira (via helper `waLink()`).

## Rodando localmente

Requer Node 18+.

```bash
cd egocriativo-site
npm install
npm run dev        # http://localhost:4321
```

Outros comandos:

```bash
npm run build      # gera dist/
npm run preview    # serve o build local
```


## Contexto do projeto

`context/landing/` guarda as decisões técnicas e de design que orientam a construção —
é a fonte de verdade do projeto, não documentação escrita depois.

| # | Arquivo | O que define |
| --- | --- | --- |
| 01 | [01-stack.md](context/landing/01-stack.md) | Stack técnica |
| 02 | [02-arquitetura.md](context/landing/02-arquitetura.md) | Estrutura de pastas, componentes, fluxo de dados |
| 03 | [03-system-design.md](context/landing/03-system-design.md) | Hospedagem, leads, analytics, SEO, performance, LGPD |
| 04 | [04-ui-ux.md](context/landing/04-ui-ux.md) | Persona, funil, jornada, wireframe, acessibilidade |
| 05 | [05-design.md](context/landing/05-design.md) | Design system: paleta, tipografia, grid, motion, tokens |

> Regra do projeto: **não inventar dados**. Números e afirmações só entram depois de verificados.

Os diretórios `context/EgoBranding/` e `context/Contexto_Ego_Rodney/` ficam **locais, fora do
versionamento** (`.gitignore`) — são material bruto de branding e pesquisa, incluindo arquivos
`.max` que inflariam o histórico do repositório.

## Metas de performance

Lighthouse 90+ no mobile · LCP < 2,5s · INP < 200ms · CLS < 0,1.

## Pendências antes de publicar

Itens marcados com `TODO` no código:

- [ ] WhatsApp comercial real e e-mail de contato — `src/content/site.ts`
- [ ] Perfil do Instagram — `src/content/site.ts`
- [ ] Conta Umami criada: `umamiSrc` + `umamiWebsiteId` — `src/content/site.ts`
- [ ] Background do Hero: substituir o placeholder por render próprio/licenciado nas cores da marca
- [ ] Backend do formulário de leads — hoje `submitLead()` em `src/lib/leads.ts` aponta para um
      endpoint placeholder; o fallback é o link de WhatsApp
- [ ] Imagem de Open Graph e favicon set finais
- [ ] DNS: migrar nameservers para a Cloudflare **preservando os registros MX** (e-mail na HostGator)

## Licença

Código e conteúdo proprietários — EGO CRIATIVO LTDA. Uso restrito.
As fontes em `public/fonts/` são licenciadas para uso da marca e não devem ser redistribuídas.
