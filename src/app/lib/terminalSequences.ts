import type { Line } from "./useTypewriterSequence";

export const SEQ_DEFAULT: Line[] = [
  { type: "cmd", text: "npx create-next-app@latest devsouto", speed: 16, delay: 400 },
  { type: "out", text: "✔ Creating a new Next.js app in ./devsouto ..." },
  { type: "out", text: "✔ Using TypeScript, Tailwind CSS, App Router, ESLint" },
  { type: "out", text: "✔ Installing dependencies..." },
  { type: "out", text: "✨ Success! Project 'devsouto' is ready.\n" },
  { type: "cmd", text: "cd devsouto && npm run dev", speed: 18, delay: 400 },
  {
    type: "out",
    text: "ready - started server on 0.0.0.0:3000, url: http://localhost:3000",
  },
  {
    type: "out",
    text: "event - compiled client and server successfully in 912 ms (172 modules)",
  },
  { type: "out", text: "event - compiled successfully in 286 ms" },
  { type: "cmd", text: "npm run build", speed: 22, delay: 600 },
  { type: "out", text: "info  - Linting and checking validity of types..." },
  { type: "out", text: "info  - Creating an optimized production build..." },
  { type: "out", text: "✓  Build optimized • ready to deploy\n" },
  { type: "cmd", text: "npm run start", speed: 22, delay: 400 },
  { type: "out", text: "ready - started production server on http://localhost:3000" },
  { type: "out", text: "log   - GET / 200  36ms\n" },
];
