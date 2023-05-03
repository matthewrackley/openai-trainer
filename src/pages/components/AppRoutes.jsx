import React from 'react';
import { Routes, Route } from 'react-router-dom';
export const AppRoutes = () => (
    <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/mission" element={ <Mission /> } />
        <Route path="/values" element={ <Values /> } />
        <Route path="/support" element={ <Support /> } />
        <Route path="/creators" element={ <Creators /> } />
        <Route path="/profile" element={ <Profile /> } />
        <Route path="/forums" element={ <Forums /> } />
        <Route path="/modeling" element={ <Modeling /> } />
        <Route path="/settings" element={ <Settings /> } />
    </Routes>
);
