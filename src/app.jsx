import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './Nav.jsx';
import Pages from './pages/index.jsx';
import './css/styles.css';
import './bootstrap/bootstrap.css';
import './bootstrap/bootstrap.js';
import './css/headers.css';

export default function App() {
  return (
    <Router>
      <Nav />
        <Pages />
    </Router>
  );
}
