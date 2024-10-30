import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { init, preloadRemote } from '@module-federation/enhanced/runtime';
import retryPlugin from './runtime-plugin/retry';
import offLineRemotePlugin from './runtime-plugin/offline-remote';

init({
  name: 'host',
  remotes: [
    { name: 'provider', entry: 'http://localhost:3099/mf-manifest.json', alias: 'provider' }
  ],
  shareStrategy: 'loaded-first',
  shared: {
    'react': {},
    'react-dom': {}
  },
  plugins: [
    // retryPlugin(), 
    offLineRemotePlugin()
  ]
});

preloadRemote([{
  nameOrAlias: 'provider',
  exposes: ['Button']
}]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
