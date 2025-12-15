import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  // base: '/NatureGame/',
  resolve: {
    alias: {
      '@': '/src',
    },
    extensions: ['.css', '.js', '.vue', '.json', '.ts'],
  },
});
