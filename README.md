# Gadget Heaven - E-Commerce Platform

## Live Website Link

[Visit Gadget Heaven](#)

## Requirement Document Link

[View Requirement Document]("docs/requirements.pdf")

## React Fundamental Concepts Used in the Project

1. **Components**: Modular and reusable components were created for the site, such as `Product Details`, `Navbar`, `Cart`, and `Wishlist`.
2. **Props and State**: Data was passed to child components through props, and state was managed locally for individual component interactivity.
3. **Context API**: Used for global state management to avoid prop drilling, especially for managing the cart and wishlist.
4. **Hooks (useState, useEffect)**: Managed component state, lifecycle events, and side effects throughout the application.
5. **React Router**: Implemented to navigate between different pages, including dynamic routing for product details.

## Data Handling and Management

Data is managed through the **Context API** and **LocalStorage**:

- **Context API**: Used to manage global states like the shopping cart and wishlist across the application.
- **LocalStorage**: Data persistence was achieved by storing the cart and wishlist in LocalStorage, allowing users to retain selections even after reloading the page.

## Features of the Website/Project

1. **Responsive Navigation Bar**: A user-friendly navigation bar providing quick access to product categories, cart, and wishlist.
2. **Product Categories and Filters**: Browse gadgets by category with filtering options to refine product search by price.
3. **Shopping Cart and Wishlist**: Users can add items to their cart or wishlist, and view or manage these items on dedicated pages.
4. **Data Persistence**: Cart and wishlist data are stored in LocalStorage, ensuring items remain saved even after a page refresh.
5. **Error Handling and Edge Cases**: The site handles various edge cases, such as price limits and reload functionality, to provide a smooth user experience.
