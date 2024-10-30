// @ts-nocheck
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import path from 'path';

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    port: 3088,
  },
});
