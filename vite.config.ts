import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
        // ...svgr options (https://react-svgr.com/docs/options/)
      },
    }),
  ],
  publicDir: 'public',
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
});
