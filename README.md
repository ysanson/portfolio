# Portfolio

My personal portfolio site, styled after Windows XP — complete with a taskbar, start menu, and draggable-looking windows. Built with [Nuxt](https://nuxt.com) and [Nuxt UI](https://ui.nuxt.com).

## Pages

- **Home** — profile, presentation, links, and languages
- **Experience** — work history, skills, and education
- **Projects** — a curated list of personal projects hosted on GitHub and GitLab, with live stats (language breakdown, stars, last activity) fetched client-side from each platform's public API

The site is fully client-rendered (`ssr: false`) and available in English, French, and Japanese via `@nuxtjs/i18n`.

## Setup

Install dependencies:

```bash
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview the production build:

```bash
pnpm preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
