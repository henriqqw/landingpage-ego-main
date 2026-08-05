# 03 — System design

> **Status:** ✅ Definido (backend de leads propositalmente adiado → placeholder).

## Diagrama de alto nível
```
Visitante ──▶ Cloudflare (DNS + CDN + HTTPS) ──▶ Cloudflare Pages (HTML estático / Astro)
                                                     │
       Analytics (Umami Cloud, cookieless) ◀────────┤  eventos: cta_click, whatsapp_click, form_submit
                                                     │
       Formulário ──▶ submitLead()  ──▶ [ENDPOINT PLACEHOLDER — definir no fim]
                       (src/lib/leads.ts)            (Pages Functions / Formspree / Debian via Tunnel)
       Fallback de contato ──▶ WhatsApp (link)
E-mail @egocriativo.com.br permanece na HostGator (registros MX preservados).
```

## Hospedagem / infraestrutura
- **Cloudflare Pages** (estático, CDN global). Sem servidor, sem Docker.

## Deploy / publicação
- **GitHub → Cloudflare Pages**: deploy automático a cada push, preview deploys em PR.
- Build: `astro build` → `dist/` (a Cloudflare roda o build).

## Captação de leads (backend do formulário) — ADIADO
- **Decisão no fim; desenvolver com placeholder.** O form chama uma função abstraída
  `submitLead()` em `src/lib/leads.ts` apontando para um endpoint marcado `TODO`.
- Opções futuras (plugar sem retrabalho): **Cloudflare Pages Functions** (`functions/api/lead.ts`),
  serviço (**Formspree/Getform**), ou o **Debian via Tunnel**.
- Enquanto isso: validação no front + estados de sucesso/erro + **fallback WhatsApp**.

## Analytics
- **Umami Cloud (grátis)** — script **cookieless** (~2KB) no `<head>`. Sem banner de cookies.
- **Eventos de funil** centralizados em `src/lib/analytics.ts`: `cta_click`, `whatsapp_click`,
  `form_submit` (e scroll/seção se útil).
- **Meta Pixel:** só quando houver anúncios no Meta (adicionar depois).

## SEO técnico
- `<title>` + **meta description**.
- **Open Graph + Twitter Card** (title, description, imagem de compartilhamento da marca).
- **Favicon set** gerado do `icone.png` (favicon.ico, apple-touch-icon, 16/32, `site.webmanifest`).
- **`sitemap.xml`** (`@astrojs/sitemap`) + **`robots.txt`**.
- **schema.org (JSON-LD)**: Organization/LocalBusiness — nome, logo, CNPJ, contato, `sameAs` (redes).
- HTML semântico, hierarquia de headings, `alt` nas imagens, `lang="pt-BR"`.

## Performance
- **Metas:** Lighthouse **90+** (mobile) · **LCP < 2,5s · INP < 200ms · CLS < 0,1**.
- **Táticas:** estático + CDN; imagens WebP/AVIF via `<Image>`; fontes `.woff2` com `preload` +
  `font-display: swap`; JS mínimo (ilhas só onde há interação); CSS crítico inline (Astro);
  lazy-load abaixo da dobra.

## Segurança / LGPD
- **Sem banner de cookies / sem política obrigatória** (decisão do cliente) — viável porque o
  analytics é **cookieless** e não há rastreamento com dado pessoal.
- Quando o **backend de leads** for definido, tratar os dados do formulário com cuidado (rever no fim).
- HTTPS forçado + headers de segurança básicos via Cloudflare.

## Domínio / DNS / HTTPS / CDN
- `egocriativo.com.br`: trocar **nameservers** na HostGator pelos da **Cloudflare**.
- **Preservar MX** (e-mail continua na HostGator).
- HTTPS + CDN automáticos.

## Monitoramento
- Status de build/deploy no painel do Cloudflare Pages. (Opcional: alerta simples de uptime.)

## Pendências
- [ ] Backend de leads (decidir no fim) — placeholder até lá.
- [ ] ID do site no Umami (após criar a conta) → entra em `src/content/site.ts`.
- [ ] Imagem de OG + favicon final.
