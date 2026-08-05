# 05 — Design (identidade visual / design system)

> **Status:** ✅ Definido (núcleo) · Direção aprovada via mockup `mockups/hero-v2-preto-marrom.png`:
> **fundo quase preto + marrom da marca como acento, minimalista.**

## Inventário de marca (fatos — assets fornecidos)

Assets em `egocriativo-site/public/` (originais em `context/EgoBranding/`):
- **Logos:** `logos/logo.svg` (lockup, vetor puro), `logos/icone.png` (símbolo), `logos/wordmark-preto.png`, `logos/logo.jpg`.
- **Fontes da marca:** `fonts/RondaloRegular.ttf`, `fonts/MoonbeamRegular.ttf`.
- **Renders 3D:** `3d/logo-3d-*.jpg` (versão glossy premium; otimizar antes de usar).
- **Paleta do logo:** marrom `#6D3011`, preto `#000000`, branco `#FFFFFF`, cinza `#D1D1C6`.

---

## Direção visual / mood
**Escuro (quase preto), minimalista e premium**, com o **marrom** como assinatura e a **espiral**
como motivo. Editorial: tipografia grande, muito respiro, pouco ruído. Nada de "tech frio genérico"
nem de excesso de cor quente.

## Paleta (tema escuro — único mundo, sem toggle)

| Token | Hex | Uso |
|-------|-----|-----|
| `--bg` | `#0D0C0B` | fundo (quase preto, leve calor) |
| `--surface` | `#17140F` | cards / seções elevadas |
| `--border` | `#2A2620` | bordas sutis / divisores |
| `--brand` | `#6D3011` | **acento**: CTA preenchido, painéis, espiral |
| `--brand-hover` | `#5A280E` | hover do CTA |
| `--copper` | `#B06B3C` | destaques de **texto/números** no escuro (marrom claro, legível) |
| `--text` | `#F0EEEB` | texto principal (off-white) |
| `--text-muted` | `#A09A93` | texto secundário |
| `--text-dim` | `#6E6862` | terciário / legendas |

- Semânticas (estados do form) a definir na UI: sucesso/erro discretos.
- **Regra de contraste:** marrom `#6D3011` só como **preenchimento** (nunca texto pequeno no preto);
  para destaque de texto usar `--copper`.

## Tipografia
- **Display / títulos:** **Rondalo** (fonte da marca) — grande, com personalidade.
- **Corpo / UI:** **Hanken Grotesk** (sans neutra, legível, self-hosted). *(alternativa: Figtree)*.
- **Logo:** **Moonbeam** (já vetorizada no `logo.svg`).
- **Escala (base 16px):**
  - Hero H1: `clamp(2.75rem, 6vw, 4.75rem)` · Rondalo
  - Seção H2: `clamp(2rem, 4vw, 3rem)` · Rondalo
  - H3: `1.5rem`
  - Corpo: `1.125rem` / line-height `1.6`
  - Eyebrow/label: `0.8rem`, `letter-spacing .15em`, UPPERCASE, cor `--copper`

## Espaçamento e grid
- Escala base **8px**. Largura máxima de conteúdo **1200–1280px**, com padding lateral responsivo.
- Seções com respiro generoso (ex.: `padding-block: clamp(4rem, 10vw, 8rem)`).

## Componentes
- **Botão primário:** preenchido `--brand`, texto `--text`, cantos **pill**; hover `--brand-hover` + leve elevação.
- **Botão secundário:** contorno `--border`, texto `--text`.
- **Card:** fundo `--surface`, borda `--border`, radius `~16–20px`.
- **Badge/eyebrow:** texto `--copper`, uppercase, letter-spacing.
- **Stat:** número em `--copper` (Rondalo/bold) + label em `--text-muted`.

## Ícones / imagens
- **Ícones:** Lucide (traço fino, combina com o minimalismo).
- **Logo 3D glossy:** usar como peça de destaque no escuro (hero/prova) — otimizado (WebP).
- **Imagens de fundo:** escuras/quentes, com overlay para manter contraste do texto.

## Motion
- Sutil e intencional: **reveal on scroll** (fade + 8–16px), **espiral "desenhando"**
  (`stroke-dashoffset`), **hover lift** em cards/botões. 200–400ms, `ease-out`.
- **Sempre** respeitar `prefers-reduced-motion`.

## Design tokens (resumo p/ Tailwind)
```
bg #0D0C0B · surface #17140F · border #2A2620
brand #6D3011 · brand-hover #5A280E · copper #B06B3C
text #F0EEEB · text-muted #A09A93 · text-dim #6E6862
radius: pill (botões) · 16–20px (cards) · fontes: Rondalo (display) / Hanken Grotesk (corpo)
```

## Referência aprovada
- `mockups/hero-v2-preto-marrom.png` (direção). `mockups/hero-dark-concept.png` (variante âmbar, descartada).
