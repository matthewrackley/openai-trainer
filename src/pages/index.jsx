import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home.jsx';

export default function Pages () {
    return (
        <Routes>
            <Route path="/" element={ <Home /> } />
        </Routes>
    );
};
