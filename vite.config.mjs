// vite.config.js
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-dts'

export default defineConfig({
  plugins: [
    vue()
  ],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: './src/index.ts',
      name: 'VueJsGridZoom',
      // the proper extensions will be added
      fileName: 'vuejs-grid-zoom'
    },
    rollupOptions: {
      plugins: [
        dts()
      ],
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
