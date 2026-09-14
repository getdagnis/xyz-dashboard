# Implementation roadmap

This roadmap keeps the prototype deliberately focused while establishing foundations that can evolve into a larger customer portal.

Implementation follows a UI-first sequence. Static structure and interaction patterns are established before asynchronous services and application state are introduced.

## 1. Application foundation

* [x] Create the Vite, React and strict TypeScript application.
* [x] Add Sass Modules.
* [x] Add TanStack Query and the testing dependencies.
* [x] Establish the application shell and responsive content container.
* [x] Adapt the required supplied tokens into semantic CSS custom properties.
* [x] Document page, module and design-system ownership boundaries.
* [ ] Complete the reusable component foundation.

The application remains a client-rendered portal. Routing will be introduced when a second route creates a real requirement for it.

## 2. Design-system components

Create only components required by implemented portal UI:

* [ ] Button
* [ ] IconButton
* [ ] Card
* [ ] Search field
* [ ] Status indicator
* [ ] Counter badge
* [ ] Notification dialog/sheet primitives

React Aria Components provides accessible interaction behavior for controls and overlays. Native HTML remains preferred for headings, description lists, tables and other non-interactive structures.

Component styles use `.module.sass` and semantic tokens. New variants are added only when demonstrated by actual portal usage.

## 3. Static dashboard

Compose `DashboardPage` from independently owned portal modules:

* [ ] Account: customer profile and assigned organization
* [ ] Service desk: open tickets, operational status and priority
* [ ] Commerce: recent orders, totals and shipment status
* [ ] Notifications: recent read and unread activity

The static implementation establishes layout, content hierarchy, responsive behavior and component requirements before data fetching is introduced.

Customer information should use a description list. Tickets and orders should use semantic tables where the responsive implementation can preserve their relationships.

## 4. Typed mock services

Create deterministic asynchronous adapters for:

* [ ] customer information;
* [ ] service tickets;
* [ ] recent orders;
* [ ] notifications;
* [ ] product search;
* [ ] knowledge-article search;
* [ ] support-ticket search.

Each adapter should:

* return typed data;
* simulate controlled latency;
* support `AbortSignal` where applicable;
* expose deterministic success, empty and error behavior;
* avoid random failures.

Mock details remain behind module API boundaries so an HTTP implementation can replace them without changing page components.

## 5. Dashboard data integration

Add the TanStack Query provider and connect each dashboard module independently.

Each dashboard section must represent its own:

* [ ] loading state;
* [ ] populated state;
* [ ] empty state;
* [ ] error state with retry.

A failure in one service must not prevent successful sections from rendering.

## 6. Global search

The first UI slice is complete: a controlled React Aria search field retains the dashboard while empty and replaces it with a single grouped results surface while non-empty. A small synchronous fixture currently provides the VPN review state; it is deliberately separate from the results presentation.

* [x] Render grouped products, knowledge articles and support tickets in one full-width results surface.
* [x] Support per-source populated, empty, loading and error presentation states.
* [x] Restore the dashboard when the controlled field is cleared.
* [x] Cover empty, matching, cleared and non-matching search behavior with focused tests.

The mock-service iteration will replace the fixture with concurrent source queries:

* products;
* knowledge articles;
* support tickets.

Required behavior:

* [ ] debounce input by approximately 300 ms;
* [ ] disable queries for an empty search term;
* [ ] start all three searches concurrently;
* [x] display results grouped by source;
* [x] preserve independent loading, empty and error states;
* [ ] cancel or supersede obsolete requests;
* [ ] prevent stale responses from replacing newer results;
* [ ] provide a polite result-count announcement after debounced results settle.

Results expand below the search field rather than acting as autocomplete suggestions. At least one documented search term should return results from all three sources.

## 7. Notification Center

Implement the header notification trigger and full right-side Notification Center.

Required behavior:

* [ ] show a reactive unread counter;
* [ ] switch between All and Unread views;
* [ ] mark an individual notification as read;
* [ ] update the global counter immediately;
* [ ] synchronize the dashboard summary and full center;
* [ ] display notification details and timestamps when an item is opened;
* [ ] close with Escape;
* [ ] restore focus to the trigger;
* [ ] prevent interaction with background content while modal.

Unread state is communicated through text weight and a visible indicator, not colour alone. React Aria supplies dialog, focus-management and overlay behavior.

## 8. Responsive and accessibility review

Verify:

* [ ] complete keyboard operation;
* [ ] visible focus;
* [ ] logical landmarks and heading hierarchy;
* [ ] programmatic names for interactive controls;
* [ ] text alternatives for meaningful icons;
* [ ] status meaning independent of colour;
* [ ] usable layout at approximately 320 px;
* [ ] usable content at 200% zoom;
* [ ] suitable text, control and focus contrast;
* [ ] appropriate live announcements for asynchronous updates.

The target is WCAG 2.2 AA. Automated checks support but do not replace manual review.

## 9. Testing

Prioritize stable behavioral tests over broad superficial coverage.

### Unit tests

* [ ] debounce behavior using controlled fake timers;
* [ ] pure formatting and data-transformation utilities where justified.

### Integration tests

* [ ] dashboard sections remain independent when one service fails;
* [ ] search starts all three source queries;
* [ ] obsolete search results cannot replace current results;
* [ ] marking a notification read updates every subscribed view;
* [ ] Notification Center manages opening, closing and focus correctly.

Each test receives a fresh QueryClient with retries disabled. Tests interact through accessible roles and user behavior rather than implementation details.

### End-to-end

If core work is complete, add one focused Playwright flow covering dashboard loading, search and notification interaction. Include an automated accessibility scan without claiming that it proves full compliance.

## 10. Delivery

* [ ] Complete installation and command documentation.
* [ ] Record architectural decisions and deliberate trade-offs.
* [ ] Document known mock search terms.
* [ ] Add continuous integration for typecheck, lint, tests and build.
* [ ] Perform final responsive and keyboard review.
* [ ] Remove temporary content and unused dependencies.

## Deliberately deferred

The prototype does not implement:

* authentication or authorization;
* a backend or database;
* routing without a second route;
* generated API clients;
* internationalization infrastructure;
* monitoring or telemetry vendors;
* Storybook;
* a token-generation pipeline;
* a global client-state store;
* production deployment architecture.

These decisions should be revisited when corresponding product or operational requirements become concrete.
