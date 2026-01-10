import { defineConfig } from "vite";
import { default as terser } from '@rollup/plugin-terser';
import dts from 'vite-plugin-dts';

export default defineConfig({
    server: {
        
    },
    build: {
        lib: {
            entry: ['src/test-runner.ts'],
        },
        minify: false,
        copyPublicDir: false,
        rollupOptions: {
            external: [
                '**/*tests.ts',
                '**/*tests.js',
            ],
            output: [
                {
                    dir: 'dist',
                    entryFileNames: 'test-runner.js',
                    format: 'es',
                },
                {
                    dir: 'dist',
                    entryFileNames: 'test-runner.min.js',
                    format: 'es',
                    plugins: [terser()]
                },
                {
                    dir: 'dist',
                    name: 'test-runner.umd.js',
                    entryFileNames: 'test-runner.umd.js',
                    format: 'umd',
                },
                {
                    dir: 'dist',
                    entryFileNames: 'test-runner.umd.min.js',
                    name: 'test-runner.umd.min.js',
                    format: 'umd',
                    plugins: [terser()]
                }
            ]
        }
    },
    plugins: [dts({ exclude: ["**/*.test.ts", 'src/dev'], rollupTypes: true })]
});