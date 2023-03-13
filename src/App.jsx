import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { IoIosArrowUp } from 'react-icons/io';
import { useOnClickOutside } from './hooks';
import { GlobalStyles } from './global';
import { theme } from './theme';
import './App.css';
import { ContentsWrapper, MiddleFadeBar, ScrollElement } from './App.styled';
import { Navbar, Burger } from './components';
import Home from './pages/Home/Home';
import About from './pages/about';
import Contact from './pages/contact';
import Music from './pages/music';
import Videos from './pages/videos';
import Live from './pages/live';
import Developer from './pages/developer';
import ScrollToTop from './components/ScrollToTop';
import Heading from './components/Heading';
import Background from './components/Background';

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  const ScrollHandler = (pix) => {
    window.scrollTo({
      top: pix,
      behavior: 'smooth',
    });
  };

  function setDocHeight() {
    document.documentElement.style.setProperty(
      '--vh',
      `${window.innerHeight / 100}px`
    );
  }

  window.addEventListener('resize', setDocHeight());
  window.addEventListener('orientationchange', setDocHeight());

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <ScrollToTop />
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Navbar open={open} setOpen={setOpen} />
        </div>
        <Background />
        <div className="mainContainer">
          <div>
            <MiddleFadeBar>
              <ScrollElement
                onClick={() => ScrollHandler(window.innerHeight - 75)}
              >
                <Heading />
              </ScrollElement>
            </MiddleFadeBar>
            <ContentsWrapper>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/music" element={<Music />} />
                <Route path="/videos" element={<Videos />} />
                <Route path="/live" element={<Live />} />
                <Route path="/developer" element={<Developer />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
              <ScrollElement onClick={() => ScrollHandler(0)}>
                <IoIosArrowUp />
                <p>To top</p>
              </ScrollElement>
            </ContentsWrapper>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
