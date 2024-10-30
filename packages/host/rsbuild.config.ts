// @ts-nocheck
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import path from 'path';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'host',
      // remotes: {
      //   provider: 'provider@http://localhost:3099/mf-manifest.json',
      // },
      // shareStrategy: 'loaded-first',
      shared: ['react', 'react-dom'],
      // runtimePlugins: [
      //   path.resolve(__dirname, './src/runtime-plugin/retry.ts'),
      //   path.resolve(__dirname, './src/runtime-plugin/offline-remote.ts'),
      // ],
    }),
  ],
  server: {
    port: 3088,
  },
});
