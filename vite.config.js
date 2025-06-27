import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for React app on Replit
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allow external access (Replit requirement)
    port: 4173,      // Used for development server
    strictPort: true,
    allowedHosts: [
      'f95f1770-9ca7-46e3-9f0c-7a4bae927a21-00-tvcq79d42rol.picard.replit.dev'
    ]
  },
  preview: {
    host: '0.0.0.0', // ✅ Allow Replit preview to bind to container IP
    port: 4175       // ✅ Use a different port since 4173 is busy
  }
});
