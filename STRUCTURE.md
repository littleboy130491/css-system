# Project Structure

This document shows where files belong in the CSS system.

## Table Of Contents

```text
css-system/
├── RULE.md
├── STRUCTURE.md
├── HTML-USAGE.md
├── index.html
├── system.css
├── tokens.css
├── base.css
├── typography.css
├── layout.css
├── utility.css
└── components/
    ├── components.css
    ├── cards.css
    ├── hero.css
    ├── tabs.css
    ├── accordions.css
    └── carousels.css
```

## File Responsibilities

### Root Files

- `system.css`
  Imports all CSS files in the correct order.
  Owns the layer mapping.

- `tokens.css`
  Design tokens only.
  Colors, spacing, radius, shadows, typography scale, transitions, container sizes.

- `base.css`
  Reset and semantic HTML defaults.
  Examples: `body`, `a`, `table`, `figure`, `header`, `footer`.

- `typography.css`
  Headings, text helpers, prose, lead copy, type rhythm.

- `layout.css`
  Layout primitives.
  Examples: `.container`, `.section`, `.grid-3`, `.split`, `.cluster`, `.stack`.

- `utility.css`
  Small helper utilities.
  Examples: `.u-center`, `.u-gap-4`, `.u-p-6`.

- `index.html`
  Boilerplate demonstration page for the design system.

### Components Folder

Use `components/` for reusable UI patterns.

- `components.css`
  Shared common components and small UI building blocks.
  Examples: buttons, inputs, panels, nav, breadcrumbs.

- `cards.css`
  Card families and card-based patterns.

- `hero.css`
  Hero section patterns.

- `tabs.css`
  Tabs UI.

- `accordions.css`
  Accordion UI.

- `carousels.css`
  Carousel UI.

## Where To Put New Files

- Add new global tokens to `tokens.css`.
- Add new element defaults to `base.css`.
- Add new type helpers to `typography.css`.
- Add new layout primitives to `layout.css`.
- Add new helper classes to `utility.css`.
- Add new reusable components to `components/`.

If a new component is large enough to stand on its own, create a new file in `components/`.

Example:

- `components/modal.css`
- `components/pricing.css`
- `components/sidebar.css`

Then import it in `system.css`.

## Import Order

The import order must remain:

1. `tokens.css`
2. `base.css`
3. `typography.css`
4. `layout.css`
5. `components/*.css`
6. `utility.css`

This keeps low-level primitives first and helpers last.
