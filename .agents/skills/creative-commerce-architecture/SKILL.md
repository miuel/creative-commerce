---
name: creative-commerce-architecture
description: Apply the project's Next.js, TypeScript, SCSS, Sanity and Shopify frontend architecture conventions when implementing or refactoring features in Born of Nature or similar creative-commerce storefronts.
---

# Creative Commerce Architecture

Use this skill when building, modifying, or reviewing storefront features. First inspect the existing repository and preserve established conventions; do not rewrite working architecture just to match examples here.

## Principles

- Favor feature/domain boundaries over folders grouped solely by technical file type.
- Separate data fetching and third-party integrations from UI components.
- Keep React Server Components as the default; use Client Components only when browser interactivity or animation is necessary.
- Validate untrusted CMS/API responses at their boundary with Zod, then map into stable UI-friendly types.
- TypeScript: prefer explicit, inferred-safe types; avoid `any`, unnecessary assertions, and duplicate representations.
- Use SCSS modules or existing SCSS conventions and design tokens; do not introduce Tailwind unless explicitly asked.
- Make components accessible, responsive, composable, and predictable.
- For motion, prefer CSS for simple effects; use GSAP for complex sequencing/scroll effects. Support `prefers-reduced-motion`; favor transform and opacity.
- Keep Shopify Storefront API and Sanity integrations decoupled from presentational components.
- Handle loading, error, empty and missing-content states as appropriate.

## Suggested organization, not a forced migration

```text
/web
  /app                     # Next.js routes, layouts, metadata
  /domains
    /product
      /application         # Use cases and orchestration
      /dto                 # External -> internal data mapping
      /infrastructure      # API integration implementations
      /repository          # Data access contract/adapters
      /schema              # Zod schemas
    /cart
  /infrastructure
    /sanity
    /shopify
  /ui
    /components            # Shared presentation primitives
    /features              # Feature-specific UI and behavior
    /hooks
    /styles
    /utils
```

If BON uses a different structure, follow its actual structure and propose changes only with a concrete reason.

## Workflow for every change

1. Inspect relevant existing files, dependencies and patterns before coding.
2. State briefly which domain and layer own the feature, when this decision is non-obvious.
3. Make the smallest coherent change, avoiding unnecessary abstractions or dependencies.
4. Keep CMS shape, DTO mapping, business logic and UI responsibilities distinct.
5. Run available typechecks, lint and relevant tests; report what was run and any failures.
6. Summarize modified files and architectural trade-offs succinctly.

## Specific integrations

- **Sanity:** Query only required fields in GROQ; map Sanity images including source, dimensions and alt text; validate nullable editorial fields; avoid leaking raw Sanity documents into generic UI.
- **Shopify:** Encapsulate GraphQL Storefront requests, normalize products/variants, and keep price, currency, availability and cart rules out of generic components.
- **SEO:** Use Next.js metadata patterns, canonical paths and content-driven metadata when appropriate.

## Avoid

- Adding Client Components by default.
- Fetching Sanity or Shopify data directly inside reusable presentational components.
- Inventing folders, packages, conventions, or APIs without checking the repo.
- Overengineering: no repository abstraction or use-case class unless it adds value to this feature.
- Implementing decorative motion without reduced-motion support.
