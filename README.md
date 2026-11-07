# Nelly's Garden

Monorepo: npm workspaces + Turborepo.

## Getting Started

Use Node.js 20.19.4 or newer. Install dependencies with npm, then start the web app and API:

```sh
npm install
npm run dev
```

Use `npm run dev:mobile` to start the mobile app or `npm run dev:desktop` to start the desktop app.

## Project Structure

```
.env                         Secrets (gitignored), loaded via Vite's loadEnv
packages/
  web/                       Unified server (API + web frontend via Vite)
    vite.config.ts           Vite 7 config — loads .env, sets port, registers plugins
    index.html               Frontend HTML entry
    vite/plugins/
      hono-dev-plugin.ts     Intercepts /api/* in dev, forwards to Hono via SSR
    src/
      api/
        index.ts             Hono routes (.basePath('api')) + AppType export
        database/
          index.ts           Database client (Turso/LibSQL)
          schema.ts          Drizzle schema
      web/
        main.tsx             App entry
        app.tsx              Root component + Wouter routing
        pages/               Page components
        components/          UI components
        hooks/
          use-desktop.ts     Desktop detection
        lib/
          api.ts             Typed API client (hono client)
          desktop.ts         Electron API types
          utils.ts           Shared utilities
        styles.css           Tailwind CSS entry
  mobile/                    Expo + React Native + expo-router
    app/                     File-based routing
    lib/
      api.ts                 Typed API client
  desktop/                   Electron shell (loads web app from server)
    electron/
      main.ts                Main process + IPC handlers
      preload.ts             contextBridge API
    vite.config.ts           Vite config
```

## Environment Variables

Secrets and credentials live in `.env` at the project root (gitignored). Vite's `loadEnv` loads them into `process.env` at dev/build time (configured in `packages/web/vite.config.ts`). In API code (Hono), use `process.env.YOUR_VAR`. In browser code, only `VITE_`-prefixed vars are exposed via `import.meta.env.VITE_YOUR_VAR`. The Node server and database scripts load the root `.env` file.

The mobile app connects to the API URL in `EXPO_PUBLIC_API_URL`. Copy `packages/mobile/.env.example` to `packages/mobile/.env` for local development. For a physical device, use your machine's LAN address; for the Android emulator, use `http://10.0.2.2:4200`.

## Desktop UI

The desktop app has no separate renderer by default. It loads the web app from `packages/web`; desktop-specific UI should live in `packages/web/src/web/` and be gated with `useDesktop()` / `window.electronAPI`. Keep `packages/desktop` for Electron window setup, menus/tray/shortcuts, IPC handlers, native OS APIs, and packaging. Only add a separate desktop renderer when the product intentionally needs a different desktop-only UI architecture.

## Servers

Dev servers are started and managed automatically — no need to run them manually.

## Database

```sh
npm run db:push        # Push schema to database
npm run db:generate    # Generate migration files
npm run db:migrate     # Run migrations
npm run db:studio      # Open Drizzle Studio
```
