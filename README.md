Portfolio (Next.js + TypeScript)
================================

Overview
--------
Personal portfolio website built with Next.js (Pages Router) and TypeScript. It showcases projects, skills, and an about page. The app uses Redux Toolkit with redux-persist to store UI state (e.g., theme), Ant Design components, and animated particles via tsparticles.

- Language: TypeScript (React)
- Framework: Next.js 16 (Pages Router)
- State: Redux Toolkit + redux-persist
- UI: Ant Design
- Graphics/Particles: tsparticles
- Styles: CSS/SASS/SCSS

Requirements
------------
- Node.js: 18+ (recommended 18 LTS or 20). TODO: Confirm the exact supported Node range for this project.
- npm is the default package manager (repository contains `package-lock.json`).

Getting Started (Local Development)
-----------------------------------
1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open http://localhost:3000 in your browser.

Build and Run (Production)
--------------------------
- Build:

```bash
npm run build
```

- Start the production server (after building):

```bash
npm start
```

Available Scripts
-----------------
- `npm run dev` — Start Next.js in development mode.
- `npm run build` — Build the app for production.
- `npm start` — Start the production server.
- `npm run lint` — Run ESLint using Next.js config.

Environment Variables
---------------------
No environment variables are required for local development by default. TODO: If future features (analytics, API keys, etc.) are added, document them here in a table with names, defaults, and descriptions.

Project Structure
-----------------
A non-exhaustive outline of the main folders/files:

```
.
├── CNAME
├── LICENSE.md
├── README.md
├── next.config.js              # Next.js configuration
├── package.json                # Scripts and dependencies
├── package-lock.json           # npm lockfile
├── public/                     # Static assets (images, icons, etc.)
├── src/
│   ├── Layout/
│   │   └── Layout.tsx          # Shared page layout (Head, Header, Footer)
│   ├── components/             # UI components (Header, Footer, Main, ProjectItem, etc.)
│   ├── hooks/
│   │   └── hooks.ts            # Typed Redux hooks
│   ├── redux/
│   │   ├── slices/             # Redux Toolkit slices (theme, animations)
│   │   └── store.tsx           # Store configuration + redux-persist
│   ├── pages/                  # Next.js Pages Router
│   │   ├── _app.tsx            # App entry: wraps pages with Providers
│   │   ├── index.tsx           # Home page (Main component)
│   │   ├── about.tsx           # About page
│   │   └── projects.tsx        # Projects page (carousel)
│   ├── pages/styles/           # SCSS modules for pages
│   ├── data.ts                 # Skills and projects data
│   ├── types.ts                # Shared TypeScript types
│   └── styles/                 # Global styles (e.g., globals.css)
├── tsconfig.json
└── particlesjs-config.json     # Particles configuration
```

Entry Points
------------
- Application wrapper: `src/pages/_app.tsx` (provides Redux store and persistence gate).
- Pages: `src/pages/index.tsx`, `src/pages/about.tsx`, `src/pages/projects.tsx`.
- Layout: `src/Layout/Layout.tsx` (sets `<Head>`, header, footer, and main content area).

Testing
-------
There are currently no automated tests in this repository. TODO: Add unit/component tests (e.g., Jest + React Testing Library) and/or E2E tests (e.g., Cypress or Playwright). When tests exist, document how to run them here.

Linting/Formatting
------------------
- Run ESLint:

```bash
npm run lint
```

Deployment
----------
This project can be deployed to any Node-capable host. The simplest path is Vercel:
- Vercel: https://vercel.com — connect the repo, set framework to Next.js, and deploy. See Next.js deployment docs: https://nextjs.org/docs/deployment

Notes
-----
- This project uses the Next.js Pages Router (folder `src/pages`).
- Redux state (e.g., theme) is persisted across sessions using `redux-persist`.
- Ant Design components and tsparticles are used for UI/visual effects.

License
-------
See `LICENSE.md` (MIT). The license file currently credits Vincent Garreau; ensure this reflects your intended licensing for the whole repository. TODO: Confirm or update license attribution if needed.

Changelog / Roadmap
-------------------
TODO: Maintain a CHANGELOG and outline planned enhancements (e.g., add tests, CI, analytics, SEO improvements, dark/light themes tuning).
