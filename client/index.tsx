import { hydrateRoot } from 'react-dom/client';

import * as React from 'react';
import { App } from '../shared/App';

const container = document.getElementById('root')!;

setTimeout(() => {
  console.log('hydrating');

  hydrateRoot(container, <App />);
}, 3000);
