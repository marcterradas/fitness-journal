import { loadEnv } from 'vite'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['**/test/*.{js,tsx,ts}'],
    // Load .env file without any mode.
    env: loadEnv('', process.cwd(), '')
  }
})
