import React from 'react';
import ReactDOM, { hydrateRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const root = document.getElementById('root') as HTMLElement;

hydrateRoot(
  root,
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
