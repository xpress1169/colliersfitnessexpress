# Colliers Fitness Express LLC

A modern, professional, and high-energy business website for **Colliers Fitness Express LLC**, a premium personal training and gym company. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Project Overview

Colliers Fitness Express LLC is designed to showcase elite fitness services, training programs, and performance gear. The website features a dark gym-inspired aesthetic with high-contrast red accents, bold typography, and smooth animations to motivate and engage users.

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **State Management & Persistence:** Local Browser Storage (`localStorage`)
- **Deployment:** Netlify

## 📁 Folder Structure

- `app/`: Next.js App Router pages and layouts.
- `components/`: Reusable UI components (buttons, cards, modals, etc.).
- `hooks/`: Custom React hooks for cart logic and local storage persistence.
- `lib/`: Utility functions and shared constants.
- `public/`: Static assets (logos, images).
- `styles/`: Global CSS and Tailwind configurations.

## 💻 Setup Instructions

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/colliers-fitness-express.git
    cd colliers-fitness-express
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open the application:**
    Navigate to `http://localhost:3000` in your browser.

## ☁️ Netlify Deployment Instructions

This project is optimized for deployment on **Netlify**.

1.  Push your code to a GitHub repository.
2.  Log in to [Netlify](https://www.netlify.com/).
3.  Select "Add new site" > "Import from existing project".
4.  Choose your GitHub repository.
5.  Netlify will automatically detect Next.js settings:
    - **Build command:** `npm run build`
    - **Publish directory:** `.next`
6.  Click "Deploy site".

*Note: A `netlify.toml` file is included in the root directory to ensure optimal build settings.*

## 🛒 Shopping Cart & Local Storage

The website implements a fully functional shopping cart on the **Gallery Page** using `localStorage` for data persistence.

- **Persistence:** Items added to the cart remain saved even after a page refresh or browser restart.
- **Functionality:** Users can add items, view the cart in a modal, clear the cart, or process orders.
- **Alerts:** Displays "Item added." when adding products and "Thank you for your order." when processing.

## 📝 Form Storage & Persistence

The **About Us** page includes a comprehensive feedback and custom order form.

- **Draft Recovery:** As users type, their input is saved to `localStorage`. If the page is accidentally refreshed, the data is preserved.
- **Submission:** On successful submission, a success message is displayed, and the local form draft is cleared.

## 🎨 CSS Styling Rationale

The project follows a **Global-First Utility Styling** approach:

- **Tailwind CSS:** Used for 95% of the styling to ensure rapid development, consistency, and responsive design.
- **Global Theme:** A `styles/globals.css` file defines the core color palette (Brand Red, Charcoal, Black) and typography.
- **Responsive Design:** Every section uses mobile-first Tailwind utilities (e.g., `grid-cols-1 md:grid-cols-2`) to ensure a seamless experience across phones, tablets, and desktops.
- **Animations:** Framer Motion is used for entry animations and hover effects, providing a premium "app-like" feel.

## ♿ Accessibility Explanation

We adhere to accessibility best practices:

- **Semantic HTML:** Use of `<header>`, `<main>`, `<footer>`, `<section>`, and `<nav>` tags.
- **Contrast:** High-contrast color combinations (White/Red on Black) for readability.
- **ARIA:** Proper ARIA labels on buttons, icons, and modals.
- **Keyboard Navigation:** Fully navigable via keyboard, with visible focus states.
- **Alt Text:** Every image, including Next.js optimized images, includes descriptive alt text.

## 🧪 Testing and Debugging Notes

- **Manual Testing:** Verified all navigation links, cart operations (add/remove/clear), and form persistence across Chrome and Firefox.
- **Automated Verification:** A Playwright-based script was used during development to verify that `localStorage` correctly stores cart items and form data.
- **Performance:** Leveraged Next.js `Image` components for automatic lazy loading and format optimization.
