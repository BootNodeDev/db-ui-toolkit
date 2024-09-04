import { defineConfig } from 'tsup'

export default defineConfig({
  clean: true,
  dts: true,
  entry: ['src/index.ts'],
  format: ['esm'],
  keepNames: false,
  loader: {
    '.svg': 'base64',
  },
  minify: 'terser',
  outDir: 'dist',
  splitting: false,
  target: 'esnext',
  treeshake: true,
})
