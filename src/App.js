import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
import { GlobalStyles } from './global';
import { theme } from './theme';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import Music from './pages/music';
import Videos from './pages/videos';
import Live from './pages/live';
import { Burger } from './components';

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Navbar open={open} setOpen={setOpen} />
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/live" element={<Live />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
