# Portal architecture

The portal is organized around business ownership, with pages composing independently owned capabilities. This gives future teams a place to evolve account management, service tickets, commerce, notifications and search without placing all business behavior in a dashboard or a central services folder.

Only implemented responsibilities have directories today. The structure grows when a capability gains its first real implementation.

## Ownership boundaries

| Area | Responsibility |
| --- | --- |
| `app/` | Initialization, portal layouts, and future providers and routing. |
| `pages/` | Page composition and page layout; no domain request or business rules. |
| `modules/` | Business capabilities: domain UI, behavior, API adapters and types. |
| `design-system/` | Product-independent visual primitives, global foundations and design tokens. |
| `shared/` | Infrastructure demonstrably reused across domains, such as transport and configuration. |
| `test/` | Shared test setup and utilities; capability tests stay beside their implementation. |

`main.tsx` mounts the application and imports global styles. An `app/App.tsx` entry becomes useful when application composition needs providers or routing; a forwarding wrapper is unnecessary today.

## Planned growth

```text
src/
  app/
    layout/                       # Existing header and shell
    providers/                    # When initialization needs providers
    routes/                       # When multiple routes are implemented
  pages/
    dashboard/
      DashboardPage.tsx
      DashboardPage.module.sass
  modules/
    account/
      components/CustomerOverviewCard/
    service-desk/
      components/OpenTicketsCard/
    commerce/
      components/RecentOrdersCard/
    notifications/
      components/RecentNotificationsCard/
      components/NotificationCenter/
    search/
      components/GlobalSearch/
  design-system/                  # Global Sass and current token aliases
    components/                   # Reusable primitives as they appear
  shared/
    api/                          # Shared HTTP transport when needed
  test/                           # Shared test support when needed
  main.tsx
```

This is a growth map, not a requirement to create empty folders. Each module adds `api/`, hooks and types as its implementation needs them. Types may live next to the behavior they describe rather than accumulate in one large `types.ts` file.

## Dependencies and integration

- Application composition imports pages and module capabilities. Layouts provide portal chrome; domain behavior reaches them through explicit props or composed content.
- Pages compose module UI. Modules do not import pages or application initialization.
- Domain requests and mock adapters belong to their owning module. A future `shared/api` owns common transport, authentication-header attachment and transport error normalization; domain response mapping stays in the module.
- Cross-module consumers use an intentional public entry point once a module has consumers. They do not import another module's internal hooks or adapters.
- Search is a cross-domain integration capability. It can use a dedicated search API or receive domain search contracts from application composition. It should not depend on domain cards or create a web of internal adapter imports.
- Notifications own notification state and read/unread behavior; account owns customer identity data. The current header values are temporary presentation content until those capabilities are implemented.
- Design-system primitives do not import modules. Shared infrastructure does not import modules, pages or application code. New code enters `shared` only when cross-domain reuse is demonstrated.

These are review conventions today, not automatically enforced import rules. Static boundary checks can be added when the module graph grows enough to justify them.

## Design-system evolution

Global foundations remain `.sass`; component styles remain `.module.sass`. Component colors use semantic aliases. The supplied token JSON remains the source for the available palette and scales, while portal-specific semantic choices live in Sass.

Keep `tokens.sass` in `foundations` for now. A separate `tokens/` area becomes useful when generation, multiple themes or distribution requires more than one alias file.

## Next implementation boundary

Create `modules/account/components/CustomerOverviewCard/` for the customer overview, and compose it from `pages/dashboard/DashboardPage.tsx`. Introduce the account API adapter when fetching is implemented. Other modules, routing and shared transport remain deferred until their respective steps.
