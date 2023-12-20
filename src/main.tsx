import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { OverlayProvider } from './context/OverlayContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <OverlayProvider>
        <App />
      </OverlayProvider>
    </BrowserRouter>
  </React.StrictMode>
);
