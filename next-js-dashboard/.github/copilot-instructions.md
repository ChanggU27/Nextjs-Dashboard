# Engineering Standards & Guidelines

You are an expert full-stack engineer enforcing production-grade standards. Follow these principles across all code suggestions, completions, and reviews.

## 1. Type Safety & TypeScript

- Use strict TypeScript without `any`. Use `unknown`, generic types, or discriminated unions for dynamic data.
- Avoid non-null assertions (`!`). Use optional chaining (`?.`) and nullish coalescing (`??`).
- Explicitly define interfaces or type aliases for component props, API payloads, and state models.
- Always separate type imports: `import type { ... } from '...'`.

## 2. Next.js & React Conventions

- Default to React Server Components (RSC). Only add `'use client'` when using hooks (`useState`, `useEffect`), event handlers, or browser APIs.
- Prefer server-side data fetching and Server Actions over client-side REST polling.
- Optimize assets using Next.js native primitives (`next/image`, `next/font`, `next/link`).
- Keep components modular, pure, and single-purpose following SOLID principles.

## 3. Architecture & Code Quality

- Never write monolithic files; break reusable logic into utility functions or custom hooks.
- Handle edge cases explicitly: loading states, network failures, empty lists, and error boundaries.
- Favor early returns over deeply nested `if/else` conditions.
- Write self-documenting code with meaningful naming; avoid obvious comments and only comment complex business logic.

## 4. Security & Performance

- Never hardcode secrets, API keys, or credentials. Always reference environment variables via validated configs.
- Validate external and user inputs using validation libraries (e.g., Zod).
- Prevent layout shifts (CLS) by giving images and dynamic UI blocks fixed or reserved dimensions.
- Use native database indexing and parameterized queries to prevent injection attacks.

## 5. Response Style

- Provide clean, production-ready code with complete logic (avoid placeholder comments like `// TODO: implement later`).
- When refactoring, briefly explain the reasoning behind architectural improvements (e.g., maintainability, bundle size, or type safety).

## 6. Styling & UI Standards

### Modern Tailwind CSS Practices

- Avoid arbitrary values (e.g., `w-[342px]`) unless strictly necessary; use standard design tokens and theme scales (`w-80`, `gap-4`).
- Group class names logically: layout/positioning -> box model (margin/padding/size) -> typography -> visuals/colors -> interactive/states (`hover:`, `focus-visible:`).
- For dynamic class merging and conditional styling, always use a utility like `clsx` or `tailwind-merge` (e.g., `cn(...)` helper) instead of raw string interpolation.
- Ensure dark mode consistency using standard `dark:` variants when applicable.

### Accessibility (a11y) & UX

- Provide accessible color contrasts following WCAG AA standards.
- Always include explicit focus states (`focus-visible:ring-2`, `focus-visible:outline-none`) for interactive elements.
- Ensure interactive elements have accessible touch targets (minimum `44x44px` or `h-10`/`h-11` on mobile).
- Maintain semantic HTML elements (`<main>`, `<nav>`, `<aside>`, `<button>`) instead of styling generic `<div>` tags with `onClick`.

### Responsive & Layout Design

- Build mobile-first: use base classes for mobile screens and add breakpoints (`md:`, `lg:`) upward.
- Avoid fixed heights (`h-[600px]`) on content containers; prefer min-heights or flexible intrinsic sizing (`min-h-screen`, `h-auto`) to prevent content overflow.
- Prevent layout shifts (CLS) by defining aspect ratios (`aspect-video`, `aspect-square`) or fixed wrapper dimensions on loaded media.

### Reusability & Component Boundaries

- Extract repeated style patterns into small, atomic components (e.g., `<Button>`, `<Badge>`, `<Card>`) rather than copying long utility strings across files.
- If using CSS Modules (`.module.css`), use kebab-case or camelCase class names consistently and avoid deeply nested element selectors.

# GitHub Copilot Instructions

- Do not read, log, or reference secret values from `.env` or `.env.local` files.
- Follow Next.js App Router conventions and React Server Component best practices.
- Use the `cn` utility function (`clsx` + `tailwind-merge`) for conditional Tailwind CSS classes.
- Use TypeScript with strict typing where possible.
