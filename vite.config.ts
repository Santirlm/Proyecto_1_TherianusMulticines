import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
    base: '/Proyecto_1_TherianusMulticines/',
    plugins: [
        tailwindcss(),
    ],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                clubDeLaLucha: resolve(__dirname, 'peliculas/club-de-la-lucha.html'),
                karate: resolve(__dirname, 'peliculas/karate-a-muerte-en-torremolinos.html'),
                torrente: resolve(__dirname, 'peliculas/torrente-presidente.html'),
                cars: resolve(__dirname, 'peliculas/cars.html'),
                sesiones: resolve(__dirname, 'sesiones/sesiones.html'),
            }
        }
    }
})