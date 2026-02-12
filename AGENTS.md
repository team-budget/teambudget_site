# AGENTS.md - Team Budget Site

## Project Context
- Site: `Team Budget` (first product: Hockey Team Budget Management)
- Platform: Jekyll static site (GitHub Pages deploy)
- Primary message: practical, trustworthy finance workflow for volunteer hockey treasurers
- Tagline: `For hockey parents by a hockey parent`

## Source of Truth (Priority Order)
1. `../hockey_treasurer/WEBSITE.md` - canonical content strategy and product-aligned messaging
2. `./AGENTS.md` - execution rules, architecture rules, and active task log
3. Existing site implementation in this folder

If guidance conflicts, follow this order.

## Architecture Rules
- Keep shared navigation + modal behavior in includes:
  - `_includes/nav.html`
  - `_includes/demo-modal.html`
  - `_includes/footer.html`
- Keep reusable content-area top sections in:
  - `_includes/page-hero.html`
- Keep homepage sections modular in:
  - `_includes/home/*.html`
  - `index.markdown` should only orchestrate include order
- Keep author rendering logic in one include:
  - `_includes/author-badge.html`
- Keep design tokens centralized in:
  - `assets/css/styles.css`
- Keep environment-specific deploy overrides in separate config files:
  - `_config.yml` for development-safe defaults
  - `_config.production.yml` for production overrides

## Content Areas and Routing
- Blog index: `/blog/` (`blog/index.markdown`)
- Blog posts: `/blog/:title/` (`_posts/*.markdown`)
- Docs index: `/docs/` (`docs/index.markdown`)
- Docs items: `/docs/:name/` (`_docs/*.md`)
- Articles index: `/articles/` (`articles/index.markdown`)
- Articles items: `/articles/:name/` (`_articles/*.md`)

## Homepage Component Map
- `home/hero.html`
- `home/trust.html`
- `home/problems.html`
- `home/features.html`
- `home/how-it-works.html`
- `home/product-tour.html`
- `home/testimonials.html`
- `home/pricing.html`
- `home/faq.html`
- `home/docs-cta.html`
- `home/about.html`
- `home/final-cta.html`

## Design Direction (Helio-Inspired, Not Cloned)
- Use dark, high-contrast, cloud-tech visual language
- Keep luminous blue + warm highlight accents for CTA and visual hierarchy
- Prefer bold hero typography and clean card-based information blocks
- Maintain clear readability and accessibility over visual novelty
- Reuse classes and tokens before adding new one-off styles

## Author and Metadata Rules
### Required front matter for posts and articles
```yaml
created: 2026-02-11 09:30:00 -0500
updated: 2026-02-11 10:15:00 -0500
author: author_name
```

### Author registry
- File: `config/authors.yml`
- Format:
```yaml
author_name:
  name: "Alex Bevilacqua"
  email: alex@alexbevi.com
```

### Author images
- Path: `assets/images/author_name.png`
- If image missing, UI must show circular initials fallback (first + last initial)

## Prompt-Driven Evolution Workflow
When changing design/content from prompts:
1. Confirm requested direction and impacted pages/components.
2. Update shared primitives first (tokens, includes, layouts).
3. Update content pages after shared structure is stable.
4. Check for product-message alignment against `../hockey_treasurer/WEBSITE.md`.
5. Record changes in Task Log below.

## Best Practices
- Keep outcomes-first copy, avoid jargon, keep sentences short.
- Keep CTAs consistent (`Request Demo`, `See How It Works`).
- Avoid duplicating behavior across layouts; prefer includes.
- Do not hardcode environment-only values in templates.
- Prefer additive, reversible edits over large untracked rewrites.

## Task Log
### In Progress
- [ ] Add sample second author entry and verify fallback avatar behavior.

### Next Up
- [ ] Add docs page templates for invite workflow, feedback moderation, and demo cloning.
- [ ] Add visual regression checklist for homepage + content area templates.

### Done
- [x] Established dark, helio-inspired design system in `assets/css/styles.css`.
- [x] Added reusable content-area hero include across Blog/Docs/Articles layouts (`_includes/page-hero.html`).
- [x] Centralized author metadata and rendering (`config/authors.yml`, `_includes/author-badge.html`).
- [x] Added post/article metadata support for created/updated/author.
- [x] Aligned homepage content with `../hockey_treasurer/WEBSITE.md`.
