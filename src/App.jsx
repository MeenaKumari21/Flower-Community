import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './App.css'; // Assume you have some basic styling here

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <h1>Welcome come to Flowers Website..</h1>
          <nav className="navbar">
            <Link to="/" className="nav-button">Home</Link>
            <Link to="/about" className="nav-button">About Us</Link>
            <Link to="/contact" className="nav-button">Contact</Link>
          </nav>
        </header>

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;