import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import sass from 'vite-plugin-sass';

// https://vitejs.dev/config/
export default defineConfig({
  base: `/frontend-mentor-space-tourism-react/`,
  plugins: [react()],
})
