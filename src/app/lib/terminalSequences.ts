import type { Line } from "./useTypewriterSequence";

export const SEQ_DEFAULT: Line[] = [
  { type: "cmd", text: "npx create-next-app@latest devsouto", speed: 32, delay: 400 },
  { type: "out", text: "✔ Creating a new Next.js app in ./devsouto ..." },
  { type: "out", text: "✔ Using TypeScript, Tailwind CSS, App Router, ESLint" },
  { type: "out", text: "✔ Installing dependencies..." },
  { type: "out", text: "✨ Success! Project 'devsouto' is ready.\n" },
  { type: "cmd", text: "cd devsouto && npm run dev", speed: 34, delay: 400 },
  {
    type: "out",
    text: "ready - started server on 0.0.0.0:3000, url: http://localhost:3000",
  },
  {
    type: "out",
    text: "event - compiled client and server successfully in 912 ms (172 modules)",
  },
  { type: "out", text: "event - compiled successfully in 286 ms" },
  { type: "cmd", text: "npm run lint", speed: 40, delay: 450 },
  {
    type: "out",
    text: "✔ No ESLint warnings or errors\n",
  },
  { type: "cmd", text: "npm run build", speed: 42, delay: 600 },
  { type: "out", text: "info  - Linting and checking validity of types..." },
  { type: "out", text: "info  - Creating an optimized production build..." },
  { type: "out", text: "✓  Build optimized • ready to deploy\n" },
  { type: "cmd", text: "npm run test", speed: 42, delay: 500 },
  {
    type: "out",
    text: "Test Suites: 12 passed, 12 total",
  },
  {
    type: "out",
    text: "Tests:       48 passed, 48 total",
  },
  {
    type: "out",
    text: "Snapshots:   6 passed, 6 total",
  },
  {
    type: "out",
    text: "Time:        4.123 s\n",
  },
  { type: "cmd", text: "npm run start", speed: 42, delay: 400 },
  { type: "out", text: "ready - started production server on http://localhost:3000" },
  { type: "out", text: "log   - GET / 200  36ms\n" },
  { type: "cmd", text: "npx vercel deploy", speed: 44, delay: 550 },
  {
    type: "out",
    text: "▲  Vercel CLI 32.2.1",
  },
  {
    type: "out",
    text: "✔  Production deployment complete",
  },
  {
    type: "out",
    text: "🌍  Live: https://devsouto.vercel.app\n",
  },
];
