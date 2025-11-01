import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import netlify from "@netlify/vite-plugin";
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

export default defineConfig({
  plugins: [react(), netlify(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
