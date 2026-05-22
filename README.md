# struktered-vite-react-tailwind-template

Starting template for sites built by the **Struktered Website Builder** agent pipeline (planner → architect → coder → media-director → reviewer).

## Stack

- **Vite 6** — build tool
- **React 19** — UI runtime
- **Tailwind v4** — styling (CSS-first config in `src/index.css`)
- **TypeScript 5.6** — strict mode, ES2022 target
- **Node 22** — required runtime

## Scripts

```bash
npm install      # install deps
npm run dev      # vite dev server
npm run build    # tsc check + production build to dist/
npm run preview  # preview dist/ locally
npm run typecheck
```

## How the coding agent uses this template

1. `gh repo create <new-site-repo> --template=Struktered/struktered-vite-react-tailwind-template --private`
2. Coding agent receives `{repo, brief, plan, task_list}` from upstream Architect agent
3. Agent calls `cms_builder_helper` actions: `create_file` / `edit_file` / `list_files` / `get_build_status` / `get_preview_url` / `run_lighthouse`
4. Each section of the site = one or more `edit_file` calls against `src/App.tsx` or new component files in `src/components/`
5. Final commit + push triggers `.github/workflows/deploy.yml` → Cloudflare Pages deploy

## Config

- `cms.config.json` — declarative metadata read by the agent pipeline + the brain-ui dashboard
- `vite.config.ts` — build target ES2022, sourcemaps off, manual chunking off (let Rollup decide)
- `tsconfig.app.json` — strict mode, no-unused-locals/params, no-fallthrough

## Required secrets when forked

GitHub repo secrets:
- `CLOUDFLARE_API_TOKEN` — scoped to Pages deploy on the target account
- `CLOUDFLARE_ACCOUNT_ID`

GitHub repo variables:
- `CF_PAGES_PROJECT_NAME` — target Pages project slug

## Banned defaults (auto-rejected by Reviewer agent)

- Inter / Roboto / Arial / Space Grotesk as body font
- Purple-pink gradient hero
- Dark + purple-orbs hero composition
- Em-dashes (use en-dash, comma, or period)
- Generic CTAs ("Get Started", "Learn More")
- 3x3 feature-card grid as default
- Glassmorphism as default decoration
- Hero-metric template ("Trusted by 500+ teams")
- Nested cards

See `.claude/skills/struktered_design/` in the main brain-ui repo for the full doctrine.

## License

Proprietary — Struktered LLC.
