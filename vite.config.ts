import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Automatically makes 'test' and 'expect' available globally
    environment: 'jsdom', // Simulates browser environment for RTL
    setupFiles: './src/tests/setup.ts', // Optional: import jest-dom
  },
})
