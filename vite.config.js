import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            ssr: 'resources/js/ssr.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    server: {
        host: '0.0.0.0', // Allow network access
        port: 5173, // default vite port
        strictPort: true, // ensure it does not change
        hmr: {
            host: '192.168.1.72' // vm ip
        },
        proxy: {
            "/api": {
                target: "http://192.168.1.72:8000",
                changeOrigin: true,
                secure: false,

            }
        }
    }
});
