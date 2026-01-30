import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './App.css'; // index.css o'rniga App.css import qilindi

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
