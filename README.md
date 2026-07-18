# Flora&Co

🇷🇺 Русская версия: [README.ru.md](README.ru.md)

Online store for garden plants built with React, TypeScript and Tailwind CSS.

Flora&Co is a responsive e-commerce application that allows users to browse plants, manage favorites, add products to cart and complete the checkout process.

This project is a complete TypeScript migration of the original JavaScript version of Flora&Co. The application was fully converted to TypeScript with strict typing while preserving all existing functionality and improving maintainability and type safety.

## Previous Version

This project is a refactored TypeScript version of the original JavaScript implementation.

JavaScript version:
https://github.com//Alevtina-work/Flora_co-react-js

## Screenshots

### Catalog

![Catalog](screenshots/catalog.png)

### Favorites

![Favorites](screenshots/favorites.png)

### Checkout

![Checkout](screenshots/checkout.png)

## Features

- Product catalog
- Product search
- Favorites management
- Shopping cart
- Checkout process
- Responsive layout for desktop and mobile

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Context API


## Installation

1. Install dependencies:
```bash
npm install
```
2. Start the development server:
```bash
npm run start
```
3. Open in your browser:

```
http://localhost:4028
```

## Build

Create a production build:

```bash
npm run build
```

## Project Structure

```
src
├── components
│   ├── common
│   └── ui
├── context
├── pages
│   ├── CatalogPage
│   ├── CheckoutPage
│   └── FavoritesPage
├── types
├── styles
├── App.tsx
├── Routes.tsx
└── main.tsx
```

## Styling

The application uses Tailwind CSS with a custom design system.

- custom color palette
- responsive layout
- reusable UI components
- tailwind-merge for class composition

## Development Process

- UI designed in Figma.
- Initial React component structure was generated from the design using Rocket.new.
- The application architecture, business logic, state management, routing, reusable components, styling refinements, and additional functionality were implemented and refactored manually.

## TypeScript Version
- This project is based on the original JavaScript version of Flora&Co.
- The application was fully migrated to TypeScript using strict typing.
- React components, Context API, pages and reusable UI components were refactored to use TypeScript interfaces and shared type definitions.
- During the migration, the project structure was improved, duplicated types were consolidated, and component APIs became more predictable and maintainable.