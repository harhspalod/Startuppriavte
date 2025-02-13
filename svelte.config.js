import adapter from "@sveltejs/adapter-vercel"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    inlineStyleThreshold: 150000, // Allow up to 150kb of inlined styles
    prerender: {
      handleHttpError: ({ status, path }) => {
        if (status === 404) {
          console.warn(`Skipping prerender for: ${path} (404)`)
          return
        }
        throw new Error(`Prerender failed for: ${path}`)
      },
    },
  },
  preprocess: vitePreprocess(),
}

export default config
