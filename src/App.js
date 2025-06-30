import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import EvolutionPage from './pages/EvolutionPage';
import SocialLifePage from './pages/SocialLifePage';
import PhysiologyPage from './pages/PhysiologyPage';
import FactsPage from './pages/FactsPage';
import SpeciesPage from './pages/SpeciesPage';
import HelpPage from './pages/HelpPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/evolution" element={<EvolutionPage />} />
                <Route path="/social-life" element={<SocialLifePage />} />
                <Route path="/physiology" element={<PhysiologyPage />} />
                <Route path="/facts" element={<FactsPage />} />
                <Route path="/species" element={<SpeciesPage />} />
                <Route path="/help" element={<HelpPage />} />
            </Routes>
        </Router>
    );
}

export default App;
