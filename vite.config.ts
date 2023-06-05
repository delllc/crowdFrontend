import {defineConfig} from 'vite';
import babel from '@rollup/plugin-babel';
import svgr from 'vite-plugin-svgr';
import stylelint from 'vite-plugin-stylelint';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    babel({extensions: ['.ts', '.tsx'], babelHelpers: 'bundled', skipPreflightCheck: true}),
    svgr({
      exportAsDefault: true,
    }),
    stylelint({
      fix: true,
    }),
    react(),
  ],
  resolve: {
    alias: [
      {find: '~', replacement: '/src'},
    ],
  },
});
