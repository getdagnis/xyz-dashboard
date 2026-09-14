# XYZ Portal Foundation Dashboard

A lightweight React and TypeScript customer portal prototype demonstrating a composite dashboard, concurrent global search and a reactive Notification Center.

## Features

### Dashboard

Data is fetched from four separate typed mock API services:

- customer and organization information;
- open service tickets with status and priority;
- recent orders with totals and shipment status;
- recent read and unread notifications.

Each section handles its own loading, empty and error states.

### Global Search

The search input is debounced by approximately 300 ms before concurrently querying three independent mock data sources:

- Products;
- Knowledge Articles;
- Support Tickets.

Each source has independent loading, empty, error and result states. TanStack Query handles caching, cancellation and stale-result protection.

Search for `VPN` to see results from all three sources.

### Notification Center

The Notification Center provides:

- a reactive unread counter;
- All and Unread filters;
- an individual mark-as-read action;
- notification state shared with the dashboard summary.

Marking a notification as read immediately updates the unread counter and both notification views.

## Technical Structure

- Vite
- React
- strict TypeScript
- Sass Modules
- React Aria Components
- TanStack Query
- Vitest and React Testing Library

Application code is organized by portal modules. Shared UI components and tokens live in `src/design-system`, while mocked API services are separated in `src/services`.

React Aria Components provide accessible interaction primitives for buttons, search controls, filters and the Notification Center dialog. Native semantic HTML is used for static content such as headings, description lists, tables and result lists.

## Design Tokens and Brand Adherence

The supplied JSON token package is the source for the application’s color, spacing, typography and border-radius values.

Its primitive values are mapped to semantic CSS custom properties in `src/design-system/tokens.sass`. Components consume semantic tokens rather than directly using brand values, keeping presentation consistent and allowing the visual system to evolve independently from component code.

The supplied layout, color and typography conventions informed the responsive grid, surfaces, controls and content hierarchy.

## Accessibility

The interface includes keyboard-accessible controls, visible focus states, accessible names for icon-only buttons, dialog focus management and status information that does not depend on color alone.

A manual Axe DevTools scan of the completed dashboard view reported **0 automatic issues** with WCAG 2.1 AA and Best Practices enabled.

Automated checks do not replace complete keyboard, zoom and screen-reader testing.

## Run Locally

```bash
npm install
npm start
```

Open the local URL printed by Vite.

## Validation

```bash
npm run typecheck
npm run lint
npm run test:run
npm run build
```

Run all validation checks with one command:

```bash
npm run check
```

This runs TypeScript checking, ESLint, Vitest and the production build.

## Not implemented

Deliberately omitted optional expansion:

- Storybook or broader design-system documentation;
- retry UI and simulated random failures;
- routing and multiple pages;
- global client-state library;
- notification persistence, timestamps and deep links;
- authentication and authorization;
- profile menu behavior;
- autocomplete or result navigation;
- behavior behind supplementary dashboard buttons.
