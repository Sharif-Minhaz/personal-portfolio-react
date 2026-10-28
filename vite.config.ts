import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // bundle deps into the prerender build: several are CommonJS or import CSS, which Node can't load directly
  ssr: { noExternal: /^(?!(react|react-dom|react-router|react-router-dom)(\/|$))/ },
})
