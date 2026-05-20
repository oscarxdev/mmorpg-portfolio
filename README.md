# OscarDev Portfolio

Portfolio personal de Oscar (OscarDev), desarrollador frontend expandiéndose al backend con Go.

## Stack

- **Framework**: Astro v5 (SSR) con TypeScript
- **Estilos**: TailwindCSS v4
- **Animaciones**: GSAP + ScrollTrigger
- **Despliegue**: Cloudflare Pages
- **Package manager**: pnpm

## Características

- Internacionalización nativa con Astro (es / en)
- Listado de proyectos auto-actualizado desde la API de GitHub
- Theme toggle (claro / oscuro)
- SEO (Open Graph, Twitter Card, JSON-LD)
- Sitemap automático
- Optimizado para Cloudflare Pages (SSR)

## Instalación

```bash
git clone https://github.com/oscarcodedev/mmorpg-portfolio.git
cd mmorpg-portfolio
pnpm install
```

Copia `.env.example` a `.env` y rellena tu `GITHUB_TOKEN` (Personal Access Token con scope `public_repo`). Sin token la API de GitHub limita a 60 peticiones por hora.

```bash
cp .env.example .env
```

## Scripts

```bash
pnpm dev              # servidor de desarrollo
pnpm build            # build de producción
pnpm preview          # preview del build
pnpm deploy           # build + deploy a Cloudflare Pages
```

## Estructura

- `src/pages/` — páginas (es) y `src/pages/en/` (en)
- `src/components/` — Navbar, ThemeToggle, LanguageSwitcher
- `src/layouts/Layout.astro` — layout base + SEO
- `src/i18n/translations.ts` — copy bilingüe
- `src/lib/github.ts` — integración con la API de GitHub
- `src/lib/icons.ts` — biblioteca de iconos SVG

## i18n

- Español: ruta raíz (`/`)
- Inglés: ruta prefijada (`/en/`)

Las traducciones viven en [src/i18n/translations.ts](src/i18n/translations.ts) y se consumen con el helper `useTranslation(lang)`.

## Contacto

- **Web**: [kiridev.dev](https://kiridev.dev)
- **GitHub**: [github.com/oscarcodedev](https://github.com/oscarcodedev)
- **Email**: [kiridev.contact@gmail.com](mailto:kiridev.contact@gmail.com)
- **LinkedIn**: [linkedin.com/in/kiridev](https://linkedin.com/in/kiridev)
