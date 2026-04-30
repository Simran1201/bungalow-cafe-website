// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // Keep Miniflare state outside dist/ (Cloudflare Vite plugin).
  cloudflare: {
    viteEnvironment: { name: "ssr" },
    persistState: { path: path.join(rootDir, ".wrangler", "vite-plugin") },
  },
  // Do not rimraf dist/server before SSR build: Wrangler/Miniflare can leave locked SQLite
  // under dist/server/.wrangler on Windows. Rollup still overwrites outputs.
  vite: {
    environments: {
      ssr: {
        build: {
          emptyOutDir: false,
        },
      },
    },
  },
});
