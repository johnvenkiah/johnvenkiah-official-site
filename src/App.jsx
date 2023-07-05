import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { IoIosArrowUp } from 'react-icons/io';
import { useOnClickOutside } from './hooks';
import { GlobalStyles } from './global';
import { theme } from './theme';
import {
  ContentsWrapper,
  MiddleFadeBar,
  ScrollElement,
  MainContainer,
} from './App.styled';
import { Navbar, Burger, Heading, ScrollToTop, Background } from './components';
import Home from './pages/Home/Home';
import Music from './pages/Music/music';
import Videos from './pages/Videos/Videos';
import Live from './pages/Live/live';
import About from './pages/About/about.js';
import Contact from './pages/contact';
import Developer from './pages/developer';

function App() {
  const [open, setOpen] = useState(false);
  const [logoPIsVisible, setLogoPIsVisible] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

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

  useEffect(() => {
    // Listen to the resize event to update the layout when the address bar height changes
    window.addEventListener('resize', setDocHeight);
    window.addEventListener('orientationchange', setDocHeight);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', setDocHeight);
      window.removeEventListener('orientationchange', setDocHeight);
    };
  }, []);

  useEffect(() => {
    // Update the layout on initial load
    setDocHeight();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Background />
        <ScrollToTop />
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Navbar
            open={open}
            setOpen={setOpen}
            logoPIsVisible={!modalOpen && logoPIsVisible}
            setLogoPIsVisible={setLogoPIsVisible}
          />
        </div>
        <MainContainer>
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
                <Route
                  exact
                  path="/"
                  element={
                    <Home modalOpen={modalOpen} setModalOpen={setModalOpen} />
                  }
                />
                <Route
                  path="/music"
                  element={
                    <Music modalOpen={modalOpen} setModalOpen={setModalOpen} />
                  }
                />
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
        </MainContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
