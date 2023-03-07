import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
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
import johnMopaSinging from './images/mopa_singing_portrait.png';
import ScrollToTop from './components/ScrollToTop';
import ShowModal from './components/ShowModal';
import Heading from './components/Heading';

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

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <ScrollToTop />
        <ShowModal open={open} setOpen={setOpen} />
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Navbar open={open} setOpen={setOpen} />
        </div>
        <img src={johnMopaSinging} alt="" className="background-image" />
        <div className="mainContainer">
          <div>
            <MiddleFadeBar>
              <ScrollElement
                onClick={() => ScrollHandler(window.innerHeight - 75)}
              >
                <Heading />
                <IoIosArrowDown />
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
