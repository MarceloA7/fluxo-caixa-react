import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Caixa from './pages/Caixa';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Caixa />
  </React.StrictMode>
);

