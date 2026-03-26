import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Proyecto_1_TherianusMulticines/',
  plugins: [
    tailwindcss(),
  ],
})