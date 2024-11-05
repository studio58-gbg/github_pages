# Studio 58 Website

This is a web project for Studio 58.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Technologies](#technologies)
- [Deployment](#deployment)

## Features

- Built with React, Vite, and TypeScript for a fast and type-safe development experience
- Styled using TailwindCSS for utility-first and responsive design
- Deployed on GitHub Pages with a simple workflow

## Demo

[Live Demo](https://studio58-gbg.github.io/github_pages/)

## Installation

Follow these steps to set up the project locally.

1. **Clone the repository**

    ```bash
    git clone https://github.com/studio58-gbg/github_pages.git
    cd github_pages
    ```

2. **Install dependencies**

    Make sure you have [Node.js](https://nodejs.org/) installed, then run:

    ```bash
    npm install
    ```

3. **Run the development server**

    ```bash
    npm run dev
    ```

Your app should now be running on [http://localhost:5173/github_pages/](http://localhost:5173/github_pages/).

## Technologies

This project uses the following technologies:

- **React** with **TypeScript**: For building the user interface and ensuring type safety
- **Vite**: For fast development and optimized builds
- **TailwindCSS**: For styling with a utility-first approach
- **GitHub Pages**: For hosting and deployment

## Deployment

This app is deployed to GitHub Pages using Vite's `vite.config.ts` configuration. Follow these steps to deploy:

1. **Add GitHub Pages configuration in `vite.config.ts`**:
   Make sure your `vite.config.ts` includes the `base` property:

    ```typescript
    import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';

    export default defineConfig({
      plugins: [react()],
      base: '/github_pages/'
    });
    ```

2. **Add a homepage property and deployment scripts to the package.json file**

    ```json
    "name": "studio58",
    "private": true,
    "version": "0.0.0",
    "homepage": "https://studio58-gbg.github.io/github_pages",
    ```

    ```json
    "scripts": {
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build",
    }
    ```
3. **Add a "remote" that points to the GitHub repository**

    ```bash
    git remote add origin https://github.com/studio58-gbg/github_pages.git
    ```


4. **Deploy to GitHub Pages**

    ```bash
    npm run deploy
    ```

5. **Configure GitHub Pages**

    Go to your GitHub repository's **Settings > Pages**, and set the source to the `gh-pages` branch.