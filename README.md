# XYZ Portal Foundation Dashboard

Assignment description: A lightweight customer portal prototype that aggregates account, service, commerce and notification data. It focuses on three capabilities: a composite dashboard, global search and a Notification Center.

## 1. Dashboard

The responsive dashboard currently includes:

* customer and organization information;
* open service tickets with status and priority;
* recent orders with shipment status and totals;
* recent read and unread notifications.

Reusable `Button`, `IconButton`, `Card` and `Chip` components support the interface. Non-interactive content uses semantic HTML, including description lists, tables, sections and lists.

Dashboard data is loaded through four independent typed mock services, so each dashboard section can load, fail or remain empty without blocking the others.

## 2. Global Search

The controlled search field replaces the dashboard content with grouped results from:

* Products;
* Knowledge Articles;
* Support Tickets.

The current synchronous fixture supports `VPN` as a documented review query. The results component also supports independent loading, empty and error presentation states.

The fixture will be replaced by three concurrent, debounced mock-service queries.

## 3. Notification Center

The header opens a right-side Notification Center containing:

* a reactive unread counter;
* All and Unread filters;
* individual mark-as-read actions;
* state shared with the dashboard notification summary.

The counter and subscribed views update immediately when a notification is marked as read.

## Chosen technical structure

* Vite
* React
* strict TypeScript
* Sass Modules
* React Aria Components
* TanStack Query
* Vitest and React Testing Library

The application is organized by portal modules. Shared visual components and tokens live in the `design-system` module. `Account`, `commerce`, `service-desk`, `search` and `notifications` have their own respective ones.

TanStack Query provides the shared client-side cache for the dashboard mock-service integration. Routing, authentication and backend infrastructure are deliberately outside the prototype scope.

## Accessibility

**React Aria Components** provide out-of-box accessible keyboard interaction and focus management for the used regular buttons, state toggle buttons, search, filters and the Notification Center dialog. Native semantic HTML is used for cards, headings, description lists, tables, lists and other static elements.

Icon-only controls have accessible names, focus is visibly indicated and status information is shown through text rather than color alone.

**Axe DevTools** were used during development to identify color-contrast and other accessibility issues. Token provided color usage was adjusted throughout the entire development process, as a result the accessibility tested application reports **0 automatic issues** with WCAG 2.1 AA and Best Practices settings enabled.

Automated testing does not replace complete keyboard and screen-reader testing. Reference: [Web Content Accessibility Guidelines](https://www.w3.org/TR/WCAG/)

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite

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
