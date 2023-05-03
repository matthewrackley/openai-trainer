import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Nav } from './Nav.jsx';
import Pages from './pages/index.jsx';

export default function App() {
  return (
    <Router>
      <Nav />
        <Pages />
    </Router>
  );
}
