/*
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
*/

// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/',
    // baseurl: ''
    build: {
      assetsInclude: ['src/styles/styles.css'],
    }
  }

  if (command !== 'serve') {
    config.base = '/coughing/'
  }

  return config
})

