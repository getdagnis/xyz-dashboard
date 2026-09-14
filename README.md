# XYZ Portal Foundation Dashboard

"XYZ" provides a comprehensive suite of IT solutions and services to digital  enterprises. Portal Foundation Application allows users to view high level account details, run global lookups, and interact with system activity alerts by  aggregating data from multiple underlying product APIs. This is a lightweight prototype focusing on three core  capabilities: a composite Dashboard, a Global Search mechanism and a Notification Center.

## 1. Dashboard

Renders a composite dashboard that presents data fetched from separate mocked API services:

• **Customer Information:** Profile details and assigned organization

• **Open Service Tickets:** Ticket IDs, operational status, and priority

• **Recent Orders:** Order numbers, totals, and shipment status

• **Notifications:** Recent unread activity flags

## 2. Global Search

A global search input field. As the user types, the system triggers concurrent search queries against three distinct mock data sources:

• Products

• Knowledge Articles

• Support Tickets

## 3. Notification Center

A notification dropdown or panel accessible from the main layout containing:

• An **unread counter badge** that updates reactively

• A quick action to **mark an individual notification as read** (which immediately  updates the global counter)

• A filter toggle to switch between viewing "All Notifications" and "Unread Only"

## Starting the project locally

Start the project by running...

## Challenges

### WCAG Compliance. The Four POUR Principles

Dashboard strives to follow WCAG 2 complicance guidelines. WCAG 2 sets the international technical standard for digital accessibility via the World Wide Web Consortium (W3C).

WCAG guidelines are organized into four core principles:

**(P)erceivable:** Information and user interface components must be presentable to users in ways they can perceive.

**(O)perable:** User interface components and navigation must be operable by all, including keyboard-only use.

**(U)nderstandable:** Information and the operation of the user interface must be easy to comprehend.

**(R)obust:** Content must be robust enough to work reliably with various assistive technologies like screen readers.

[1] (<https://www.wcag.com/resource/what-is-wcag/>)

[2] (<https://userway.org/compliance/wcag/>)

### React Aria Components

React Aria Components provides **accessible** interaction primitives for controls and overlays while leaving visual implementation to the project’s Sass Modules and semantic design tokens. Native HTML remains preferred for non-interactive content structures.
