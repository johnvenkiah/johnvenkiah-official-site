import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import Music from './pages/music';
import Videos from './pages/videos';
import Live from './pages/live';
import { theme } from './components/theme';
import { GlobalStyles } from './components/global';
import { Burger } from './components';
import { useOnClickOutside } from './hooks';

function App() {
  const [open, setOpen] = useState(false);
  const node = React.useRef();
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
