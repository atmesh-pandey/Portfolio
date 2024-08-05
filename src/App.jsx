import React from 'react';
import '../App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import LearnMore from './components/LearnMore';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <Router>
      <div className="scrollbar-hidden">
        <Routes>
          <Route path="/learnMore" element={<LearnMore />} />
          <Route path="/" element={
            <>
              <Navbar />
              <Home />
              <About />
              <Resume />
              <Skills />
              <Projects />
              <Contact />
              <Footer />
              <Toaster />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
