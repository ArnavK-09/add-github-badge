import { defineConfig } from 'tsup';

export default defineConfig({

entry: ['src/index.ts'],

format: ['iife'],

minify: true,

clean: true,

legacyOutput: true,

sourcemap: false,

treeshake: true,

splitting: false,
ignoreWatch: ['/node_modules/'],

dts: false,

});