import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
import App from './App.tsx';
import ErrorBoundaryWithLocation from '../shared/ui/ErrorBoundary';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundaryWithLocation>
          <App />
        </ErrorBoundaryWithLocation>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
