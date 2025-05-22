import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Behavior from './pages/Behavior';
import Conservation from './pages/Conservation';
import Ecology from './pages/Ecology';

/**
 * Main container component for Elephant Insights blog
 * Serves as the primary entry point and layout for the blog
 * @returns {JSX.Element} The rendered App component
 */
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/behavior" element={<Behavior />} />
            <Route path="/conservation" element={<Conservation />} />
            <Route path="/ecology" element={<Ecology />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
