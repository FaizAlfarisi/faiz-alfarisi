# Fa'iz Alfarisi — Portfolio

> This repository contains the second generation of my personal portfolio.
>
> The goal is not simply to build a website, but to build a timeless engineering portfolio that accurately represents how I think, solve problems, and build intelligent systems.

---

# Before You Do Anything

If you are an AI coding agent (Opencode, Claude Code, Gemini CLI, Codex, Cursor, etc.), **do not start coding immediately.**

Read this document completely.

Then follow the required reading order below.

Only after fully understanding the project should implementation begin.

---

# Project Vision

This project is **not** a redesign of my previous portfolio.

It is a completely new product built from zero.

Do **not** reuse architecture, components, layouts, or implementation ideas from any previous portfolio.

The only reusable assets are:

- images
- screenshots
- project content
- structured JSON data
- documentation inside `reference/`

Everything else should be treated as a fresh implementation.

---

# Required Reading Order

Read every document in the following order.

```
reference/
│
├── README.md
├── 00-project-philosophy.md
├── 01-user-personas.md
├── 02-brand-strategy.md
├── 03-information-architecture.md
├── 04-design-language.md
├── 05-copywriting-style.md
├── 06-motion-principles.md
│
├── 07-component-specification/
│
├── 08-project-storytelling.md
├── 09-content-strategy.md
├── 10-technical-architecture.md
├── 11-refactor-strategy.md
├── 12-definition-of-done.md
│
├── principles/
│
└── data/
```

Do not skip documents.

Each document builds upon the previous one.

---

# Mandatory Workflow

The implementation must follow these phases.

## Phase 0 — Understanding

- Read the entire `reference/` directory.
- Read every JSON file inside `reference/data/`.
- Understand the project vision.
- Summarize your understanding.
- Identify potential implementation risks.
- Propose an implementation roadmap.

**Wait for approval before writing code.**

---

## Phase 1 — Foundation

Initialize the project.

Recommended stack:

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React
- next/image
- MDX
- Zod
- clsx
- tailwind-merge

During this phase:

- establish folder architecture
- setup fonts
- setup design tokens
- setup global layout
- setup metadata
- setup linting & formatting

No feature implementation yet.

Wait for approval.

---

## Phase 2 — Design System

Build reusable UI foundations.

Examples:

- Typography
- Buttons
- Container
- Section
- Grid
- Card
- Badge
- Link
- Motion primitives

These components should strictly follow the Design Language.

Wait for approval.

---

## Phase 3 — Core Experience

Build the homepage.

Recommended order:

Navigation

↓

Hero

↓

Featured Work

↓

Engineering Philosophy

↓

Journey

↓

Engineering Notes

↓

Contact

↓

Footer

Wait for approval.

---

## Phase 4 — Project Experience

Build:

- Project listing
- Project detail pages
- Case study layout
- Gallery
- Architecture diagrams
- Metrics
- Navigation between projects

Wait for approval.

---

## Phase 5 — Supporting Pages

Build:

Journey

Engineering Notes

Contact

404

Future pages

---

## Phase 6 — Polish

Accessibility

SEO

Performance

Responsive behavior

Motion

Loading states

Empty states

Error states

Final QA

---

# Technical Requirements

The implementation should follow these principles.

- Feature-first architecture.
- Strong TypeScript typing.
- Reusable components.
- Accessible by default.
- Responsive by default.
- Content-driven architecture.
- JSON as the source of truth.
- MDX for long-form content.
- Minimal client-side JavaScript whenever possible.

---

# Non-Negotiable Rules

Never hardcode portfolio content.

Never duplicate data.

Never redesign because something "looks cooler."

Never violate the philosophy documents.

Never introduce unnecessary complexity.

Never add libraries without clear justification.

Never sacrifice readability for visual effects.

---

# Expected Folder Structure

```
app/

components/

features/

content/

lib/

hooks/

types/

styles/

public/

reference/
```

The implementation may evolve,

but the overall architecture should remain modular and maintainable.

---

# AI Agent Responsibilities

Before making any engineering decision, ask:

Does this improve clarity?

Does this improve maintainability?

Does this improve accessibility?

Does this improve trust?

Does this follow the reference documents?

If the answer is "No",

do not implement it.

---

# Success Criteria

The project is successful when visitors leave with the impression:

> "This engineer understands how to build intelligent systems."

They should remember:

- engineering thinking
- technical decisions
- clarity
- professionalism

They should **not** remember:

- animations
- visual effects
- frameworks
- trendy UI

The engineering should always be the main product.

---

# Final Reminder

This repository is not a playground for experimentation.

It is the implementation of a carefully designed product specification.

Every design decision,

every line of code,

every interaction,

and every animation

should exist for a reason.