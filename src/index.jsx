import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app.jsx'
import './css/styles.css';
import './bootstrap/bootstrap.css';
import './bootstrap/bootstrap.js';
import './css/headers.css';

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});



document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('head')).render(
    <title>OpenAI ChatApp!</title>,
  );
});
