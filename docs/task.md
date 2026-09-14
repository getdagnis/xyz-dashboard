# Task: Portal Foundation Dashboard

"XYZ" provides a comprehensive suite of IT solutions and services to digital enterprises. We need a Portal Foundation Application that allows users to view high level account details, run global lookups, and interact with system activity alerts by aggregating data from multiple underlying product APIs. The task is designed to evaluate senior-level frontend engineering skills, and web accessibility compliance rather than aesthetic visual polish.

## Your Task

Design and implement the frontend foundation using **Angular** (v17+ preferred) or **React** and **TypeScript**. You will build a lightweight prototype focusing on three core capabilities: a composite Dashboard and a Global Search mechanism.

Structure your project with enterprise-grade engineering practices, demonstrating how you manage distinct data streams, handle asynchronous orchestration, and ensure absolute accessibility.

## Functional Requirements

### 1. Dashboard

Render a composite dashboard that presents data fetched from separate mocked API services:

• **Customer Information:** Profile details and assigned organization. • **Open Service Tickets:** Ticket IDs, operational status, and priority. • **Recent Orders:** Order numbers, totals, and shipment status.

• **Notifications:** Recent unread activity flags.

### 2. Global Search

Provide a single, global search input field. As the user types, the system must trigger concurrent search queries against three distinct mock data sources:

• Products

• Knowledge Articles

• Support Tickets

### 3. Notification Center

Implement a notification dropdown or panel accessible from the main layout containing:

• An **unread counter badge** that updates reactively.

• A quick action to **mark an individual notification as read** (which immediately updates the global counter).

• A filter toggle to switch between viewing "All Notifications" and "Unread Only".

## Bonus Task (Optional)

A sample JSON Token Package containing primitive and semantic tokens is provided alongside this task to mimic our architecture conventions. This inspired by the design philosophy and component variables found on our Design System portal. The bonus task is to apply this package inside your developed solution and adapting the tokens into your SCSS stylesheets.

## Submission Guidelines

• Provide a GitHub repository link with your solution.

• Include detailed instructions to run the solution easily.

• The task should be completable in 3–5 hours; focus on correct architectural decisions, clean code quality, design token adherence, and accessibility rather than complex UI polish.

## Include a README.md

• Clear steps to install dependencies and run the application locally (e.g., npm install && npm start).

• Design Tokens & Brand Adherence: Explain how you structured your styles/variables to match the layout grids, color parameters, and conventions found in the design system guidelines.
