/*
 * @Author: DZZ
 * @Date: 2022-09-27 13:57:16
 * @LastEditTime: 2022-09-27 15:41:03
 * @LastEditors: DZZ
 * @Description: 
 */
import { fileURLToPath,URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [ vue() ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src',import.meta.url))
    }
  }
})
