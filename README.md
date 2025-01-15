<!-- [Api Url ]: https://movie-api-assignment-79bu.vercel.app/ -->

# Movie App Assignment

This is a simple movie API application built using modern web development technologies. The app allows users to browse movies by interacting with an external movie API, providing a clean and responsive user interface.
[Live Demo](https://movie-api-assignment-79bu.vercel.app/)

## Tech Stack

### Frontend

- **React**: The core library used to build the user interface and manage the state of the app. React 18 is used for creating dynamic, reusable components.
- **React Router DOM**: Handles routing and navigation within the application, allowing multiple pages to be rendered without full page reloads.
- **@tanstack/react-query**: A data-fetching library that simplifies handling server-state, such as retrieving movie data from an API.
- **Axios**: A promise-based HTTP client for making API requests to fetch movie data.
- **Lucide React**: A set of open-source icons used to enhance the user interface with icons for buttons, headers, and other UI elements.
- **Shadcn**: A UI component library designed to build flexible and accessible components.

### Styling & Design

- **Tailwind CSS**: A utility-first CSS framework that allows for rapid development of custom designs using utility classes for spacing, layout, colors, etc.
- **Tailwind CSS Animate**: A plugin for adding animations to elements, making the UI more interactive.

### Development Tools

- **Vite**: A fast build tool that provides an optimized development experience with hot module replacement (HMR) and fast bundling for production.
- **TypeScript**: A superset of JavaScript that adds static typing to the project, providing better tooling and error-checking during development.
- **ESLint**: A static code analysis tool that helps maintain code quality by enforcing best practices and identifying issues early.
- **Prettier**: An opinionated code formatter that ensures a consistent code style throughout the project.
- **PostCSS & Autoprefixer**: Tools used to process and optimize CSS, ensuring compatibility with multiple browsers by adding necessary vendor prefixes.

## Available Scripts

In the project directory, you can run the following commands:

- **`pnpm run dev`**: Starts the development server using Vite.
- **`pnpm run build`**: Builds the app for production by compiling TypeScript and bundling the project using Vite.
- **`pnpm run lint`**: Runs ESLint to check the codebase for quality and best practices.
- **`pnpm run preview`**: Previews the production build locally before deployment.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone <https://github.com/developerdev2007/movie-api-assignment.git>
   cd movie-app-assignment
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm run dev
   ```

Now, you can open the app in your browser at `http://localhost:3000`.

## Live Demo

You can view the live demo of the application here:

[Live Demo](https://movie-api-assignment-79bu.vercel.app/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
