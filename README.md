# XYZ Portal Foundation Dashboard

A lightweight customer portal prototype that aggregates account, service, commerce and notification data. It focuses on three capabilities: a composite dashboard, global search and a Notification Center.

## 1. Dashboard

The responsive dashboard currently includes:

* customer and organization information;
* open service tickets with status and priority;
* recent orders with shipment status and totals;
* recent read and unread notifications.

Reusable `Button`, `IconButton`, `Card` and `Chip` components support the interface. Non-interactive content uses semantic HTML, including description lists, tables, sections and lists.

Dashboard data is currently static and will be moved behind independent mock services.

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

## Technical foundation

* Vite
* React
* strict TypeScript
* Sass Modules
* React Aria Components
* TanStack Query
* Vitest and React Testing Library

The application is organized by portal modules. Shared visual components and tokens live in the design system, while account, commerce, service-desk, search and notification code remain within their respective domains.

TanStack Query is installed for the upcoming mocked server-state integration. Routing, authentication and backend infrastructure are deliberately outside the prototype scope.

## Accessibility

The UI targets WCAG 2.2 AA and currently includes:

* semantic landmarks and content structures;
* keyboard-accessible React Aria controls;
* visible focus states;
* accessible control names;
* modal focus management and dismissal;
* sufficiently large interaction targets;
* status meaning that does not depend on colour alone;
* contrast-adjusted semantic colour tokens.

Automated checks support, but do not replace, keyboard, zoom and screen-reader review.

Reference: [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/)

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Validation

```bash
npm run typecheck
npm run lint
npm run test:run
npm run build
```

Run the complete validation sequence with:

```bash
npm run check
```

## Remaining implementation

* typed deterministic mock services;
* independent dashboard queries and states;
* approximately 300 ms search debounce;
* three concurrent search queries;
* obsolete-request cancellation and stale-result protection;
* settled-result live announcements;
* final responsive, keyboard and accessibility review.
