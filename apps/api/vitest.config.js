import { loadEnv } from 'vite'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: [
      '**/test/domain/*.{js,tsx,ts}',
      '**/test/domain/handlers/*.{js,tsx,ts}',
      '**/test/domain/models/*.{js,tsx,ts}',
      '**/test/infrastructure/*.{js,tsx,ts}'
    ],
    // Load .env file without any mode.
    env: loadEnv('', process.cwd(), '')
  }
})
