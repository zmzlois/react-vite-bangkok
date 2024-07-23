import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { withZephyr } from "vite-plugin-zephyr"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), withZephyr()],
})
