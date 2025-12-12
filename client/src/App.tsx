import type { JSX } from 'react';
import { useState } from 'react';
import reactLogo from '@/assets/react.svg';
import elbrusLogo from '@/assets/elbrus.svg';
import viteLogo from '/vite.svg';
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';

function App(): JSX.Element {
  return (
    <BrowserRouter>
    <Provider store={store}
      </Router>
    </BrowserRouter>
  );
}

export default App;
