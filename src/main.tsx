import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { OverlayMenuProvider } from './context/OverlayMenuContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <OverlayMenuProvider>
        <App />
      </OverlayMenuProvider>
    </BrowserRouter>
  </React.StrictMode>
);
