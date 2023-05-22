import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import viteCompression from 'vite-plugin-compression'
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  build: {
    outDir: 'build'
  },
  plugins: [
    react(),
    viteTsconfigPaths(),
    viteCompression({ algorithm: 'brotliCompress' }),
    legacy({
      targets: ['chrome >= 40', 'edge >= 12', 'firefox >= 38', 'ios >= 8'],
    }),
  ]
})