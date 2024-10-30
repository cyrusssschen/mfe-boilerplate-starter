import { loadRemote } from '@module-federation/enhanced/runtime';
import React, { lazy } from 'react';
import './App.css';
import Button from 'provider/button';

const RemoteButton = lazy(() => loadRemote<{default: typeof Button}>(
  'provider/button', 
  {
    from: 'runtime'
  }
) as Promise<{default: typeof Button}>);

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <React.Suspense fallback={<div>"Loading..."</div>}>
        <RemoteButton />
      </React.Suspense>
    </div>
  );
};

export default App;
