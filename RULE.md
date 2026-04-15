# CSS System Rules

This document defines the maintenance rules for this CSS design system.

## Purpose

This system is a plain CSS design system split into small files by responsibility:

- `tokens.css`
- `base.css`
- `typography.css`
- `layout.css`
- `components/*.css`
- `utility.css`
- `system.css`

`system.css` is the only aggregation file. It owns the import order and the layer mapping.

## Core Rules

1. Keep the file structure stable.
2. Do not move existing files unless the project intentionally changes architecture.
3. Add new component styles as new files inside `components/`.
4. Keep `@layer` declarations in `system.css` only.
5. Do not add `@layer` blocks inside feature files like `base.css`, `layout.css`, or `components/*.css`.
6. Import every new CSS file through `system.css`.
7. Keep tokens in `tokens.css` only.
8. Keep resets and semantic HTML defaults in `base.css`.
9. Keep text rhythm and type-related classes in `typography.css`.
10. Keep page and section layout primitives in `layout.css`.
11. Keep reusable UI patterns in `components/`.
12. Keep small helper classes in `utility.css`.

## Naming Convention

The system uses a practical BEM-style naming approach.

- Block: `.tabs`
- Element: `.tabs__list`, `.tabs__tab`, `.tabs__panel`
- Variant or alternate block style: `.button-secondary`, `.button-ghost`
- State helper: `.is-active`, `.is-open`
- Utility: `.u-center`, `.u-gap-4`
- Text helper: `.text-muted`, `.text-soft`

Use `__` when an item is a structural part of a component block.

Examples:

- `.accordion__trigger`
- `.carousel__slide`
- `.breadcrumbs__item`

Use `-` for:

- utility-like readable names: `.nav-link`
- alternate styles: `.button-secondary`
- existing project naming patterns

## Styling Rules

1. Prefer CSS custom properties from `tokens.css` instead of hard-coded values.
2. Reuse existing spacing, radius, shadow, and color tokens before introducing new ones.
3. Prefer semantic variables like `--color-text-muted` over raw palette variables in component rules.
4. Keep selectors class-based whenever possible.
5. Avoid deep selector chains.
6. Avoid styling by tag inside component files unless there is a strong reason.
7. Keep components portable. A component should not depend on page-specific wrappers to look correct.
8. Use responsive behavior inside the same file as the component or primitive it belongs to.

## Component Rules

When adding a new component:

1. Create a new file inside `components/`.
2. Name the file after the block or component family.
3. Add its import to `system.css`.
4. Keep all classes for that component in that file.
5. Use element classes like `.component__part` for internal structure.
6. Use state classes like `.is-active` only when they describe UI state.

Examples:

- `components/tabs.css`
- `components/accordions.css`
- `components/carousels.css`

## HTML Rules

1. Use semantic HTML first.
2. Add system classes on top of semantic HTML elements.
3. Prefer composition over one-off custom classes.
4. Use layout primitives for page structure.
5. Use component classes for reusable UI patterns.
6. Use utility classes only for small local adjustments.

Read [HTML-USAGE.md](./HTML-USAGE.md) for markup guidance and examples.

## Structure Reference

Read [STRUCTURE.md](./STRUCTURE.md) for where files belong and how the project is organized.
