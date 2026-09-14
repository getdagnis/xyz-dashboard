# Implementation roadmap

This roadmap records the implemented portal UI and the next integration work without treating local UI capabilities as unfinished design-system abstractions.

## Foundation and UI — complete

* [x] Application shell, tokens and Sass Modules
* [x] Shared Button, IconButton, Card and Chip
* [x] Responsive dashboard
* [x] Search-results states
* [x] Accessible Notification Center

## Mock service layer

* [x] Typed deterministic services
* [x] Controlled latency and `AbortSignal`
* [x] QueryClient provider

## Dashboard integration

* [ ] Fetch customer, tickets, orders and notifications
* [ ] Independent loading, empty and error states

## Global search integration

* [ ] Approximately 300 ms debounce
* [ ] Three concurrent queries
* [ ] Cancellation and stale-result protection
* [ ] Settled-result live announcement

## Notification integration

* [ ] Move notification data behind its mock service/query
* [ ] Preserve the existing reactive counter and mark-as-read behavior

## Final delivery

* [ ] Focused behavior tests
* [ ] Keyboard, 320 px, 200% zoom and axe review
* [ ] Complete README setup and architecture notes
