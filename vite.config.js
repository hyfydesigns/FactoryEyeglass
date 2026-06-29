import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Sanity Studio requires this
    'process.env': {},
  },
  server: {
    // Allow /studio route to fall through to index.html
    historyApiFallback: true,
  },
});
