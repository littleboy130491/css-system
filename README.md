# CSS Design System

This repository contains a plain CSS design system with a single stylesheet entry point: `system.css`.

## Start Here

- Rules and maintenance guide: [RULE.md](./RULE.md)
- Project structure and file placement: [STRUCTURE.md](./STRUCTURE.md)
- HTML usage and markup examples: [HTML-USAGE.md](./HTML-USAGE.md)
- Boilerplate demo page: [index.html](./index.html)

## CSS Entry Point

Use only:

```html
<link rel="stylesheet" href="./system.css">
```

Do not link individual CSS files directly in HTML.

## High-Level Structure

- `tokens.css`: design tokens
- `base.css`: reset and semantic defaults
- `typography.css`: type scale and text helpers
- `layout.css`: layout primitives
- `components/*.css`: reusable UI components
- `utility.css`: small helper utilities
- `system.css`: import order and layer mapping

## Working Rule

If you add a new component file, place it in `components/` and import it through `system.css`.
