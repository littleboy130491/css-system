# HTML Usage

This document explains how to use the CSS system in HTML.

## Basic Setup

Use `system.css` as the single stylesheet entry point.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="./system.css">
    <title>Page Title</title>
  </head>
  <body>
    <!-- content -->
  </body>
</html>
```

## General Usage Pattern

Build pages in this order:

1. Use semantic HTML.
2. Add layout primitives for structure.
3. Add spacing and sizing primitives from `layout.css` when needed.
4. Add component classes for UI patterns.
5. Add utilities only for small behavioral or presentation adjustments.

## ID Recommendation

Prefer giving stable IDs to each main section.

Do not add IDs to every wrapper by default.
Add an ID to an inner wrapper only when that wrapper groups an essential content block that may need linking, targeting, scripting, or testing.

Why:

- easier anchor linking from nav and breadcrumbs
- clearer section targeting for scripts
- simpler in-page navigation and scrolling
- more predictable testing hooks

Recommended pattern:

```html
<section id="features" class="section">
  <div class="container">
    <div class="section-heading">
      <span class="eyebrow">Features</span>
      <h2>Section title</h2>
      <p class="lead">Section description.</p>
    </div>

    <div id="card-wrapper" class="card-grid">
      <!-- cards -->
    </div>
  </div>
</section>
```

In this pattern:

- `features` belongs on the section
- `card-wrapper` belongs on the inner wrapper because it groups the essential card collection
- the generic `.container` does not need an ID unless it has a real targeting purpose

Use readable IDs that match the actual content block.

Examples:

- `hero`
- `features`
- `pricing`
- `contact`
- `card-wrapper`
- `pricing-cards`
- `faq-items`

## Layout Example

```html
<section id="overview" class="section">
  <div class="container">
    <div class="section-heading">
      <span class="eyebrow">Overview</span>
      <h2>Section title</h2>
      <p class="lead">Support text for this section.</p>
    </div>

    <div id="card-wrapper" class="grid-3">
      <article class="card">
        <div class="card__body">
          <h3 class="card__title">Card one</h3>
          <p class="text-muted">Description</p>
        </div>
      </article>
    </div>
  </div>
</section>
```

## Navigation Example

```html
<header class="section-tight">
  <div class="container-lg">
    <nav class="primary-nav">
      <a class="eyebrow" href="/">Brand</a>

      <div id="primary-nav-links" class="primary-nav__links">
        <a class="primary-nav__link" href="/features">Features</a>
        <a class="primary-nav__link" href="/pricing">Pricing</a>
        <a class="button-secondary" href="/contact">Contact</a>
      </div>
    </nav>
  </div>
</header>
```

## Breadcrumbs Example

```html
<nav class="breadcrumbs" aria-label="Breadcrumb">
  <ol class="breadcrumbs__list">
    <li class="breadcrumbs__item">
      <a class="breadcrumbs__link" href="/">Home</a>
    </li>
    <li class="breadcrumbs__item">
      <a class="breadcrumbs__link" href="/components">Components</a>
    </li>
    <li class="breadcrumbs__item">
      <span class="breadcrumbs__current" aria-current="page">Tabs</span>
    </li>
  </ol>
</nav>
```

## Tabs Example

```html
<section class="tabs">
  <div class="tabs__list" role="tablist" aria-label="Example tabs">
    <button class="tabs__tab is-active" role="tab" aria-selected="true">Overview</button>
    <button class="tabs__tab" role="tab" aria-selected="false">Details</button>
    <button class="tabs__tab" role="tab" aria-selected="false">Specs</button>
  </div>

  <div class="tabs__panels">
    <div class="tabs__panel is-active" aria-hidden="false">
      <p>Visible panel content.</p>
    </div>
  </div>
</section>
```

## Accordion Example

```html
<section class="accordion">
  <article class="accordion__item is-open">
    <button class="accordion__trigger" type="button" aria-expanded="true">
      What is included?
    </button>

    <div class="accordion__content" data-open="true">
      <div class="accordion__content-inner">
        <div class="accordion__content-body">
          <p>Tokens, layout primitives, utilities, and reusable UI patterns.</p>
        </div>
      </div>
    </div>
  </article>
</section>
```

## Carousel Example

```html
<section class="carousel" aria-label="Featured items">
  <div class="carousel__viewport">
    <div class="carousel__track">
      <article class="carousel__slide">
        <h3>Slide one</h3>
        <p class="text-muted">Carousel content.</p>
      </article>
      <article class="carousel__slide">
        <h3>Slide two</h3>
        <p class="text-muted">Carousel content.</p>
      </article>
    </div>
  </div>

  <div class="carousel__controls">
    <div class="carousel__buttons">
      <button class="carousel__button" type="button" aria-label="Previous slide">←</button>
      <button class="carousel__button" type="button" aria-label="Next slide">→</button>
    </div>

    <div class="carousel__pagination" aria-label="Slide pagination">
      <span class="carousel__dot is-active"></span>
      <span class="carousel__dot"></span>
    </div>
  </div>
</section>
```

## Form Example

```html
<form class="panel">
  <div class="panel-body stack">
    <div class="form-row">
      <label class="field">
        <span class="field-label">Name</span>
        <input class="input" type="text" placeholder="Jane">
      </label>

      <label class="field">
        <span class="field-label">Email</span>
        <input class="input" type="email" placeholder="jane@example.com">
      </label>
    </div>

    <label class="field">
      <span class="field-label">Message</span>
      <textarea class="textarea" placeholder="Write your message"></textarea>
    </label>

    <button class="button" type="submit">Submit</button>
  </div>
</form>
```

## Practical Rules

- Use `system.css` only. Do not link individual CSS files in HTML.
- Prefer existing classes before creating new ones.
- Prefer stable IDs for major sections and for wrappers that group essential content blocks.
- Use `.container`, `.section`, `.grid-*`, `.stack`, `.cluster`, and spacing or sizing primitives from `layout.css` for structure.
- Use component classes for reusable UI.
- Use utilities for small behavioral or presentation adjustments, not for spacing or sizing.
- Keep HTML semantic even when adding many classes.

## Reference

- Rules: [RULE.md](./RULE.md)
- Structure: [STRUCTURE.md](./STRUCTURE.md)
- Boilerplate example: [index.html](./index.html)
