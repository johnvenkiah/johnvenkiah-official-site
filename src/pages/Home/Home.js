import React, { useState } from 'react';
import { FaSpotify, FaDeezer, FaItunesNote } from 'react-icons/fa';
import { SiTidal } from 'react-icons/si';
import {} from 'react-icons/fa';
import { motion } from 'framer-motion';
import {
  AlbumImg,
  AlbumWrapper,
  HomeStyled,
  SectionContainer,
} from './Home.styled';
import standardsCover from '../../images/venkiah_nyvall_standards.jpg';
import jvt3Small from '../../images/jvt3-small.jpeg';
import Modal from '../../components/Modal';
import { ModalWrapper } from '../../components/Modal/Modal.styled';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const style = {
    filter: 'drop-shadow(0px 0px 2px #000)',
  };

  return (
    <HomeStyled>
      <motion.p
        initial={{ opacity: 1, scale: 0.9 }}
        animate={{ opacity: 0, scale: 1 }}
        transition={{ duration: 1.5, delay: 1.5 }}
        delay={1.5}
      >
        Pianist, Singer, Songwriter and Software Developer
      </motion.p>
      <h2>Latest Releases</h2>
      <SectionContainer>
        <AlbumWrapper>
          <Modal
            ariaHidden={modalOpen && 'true'}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            children={
              <>
                <img src={standardsCover} alt="Album Cover - Standards" />
                <p>Listen to Standards on</p>
                <ModalWrapper>
                  <p>Spotify</p>
                  <FaSpotify
                    style={{
                      filter: 'drop-shadow(0px 0px 2px #000)',
                      color: '#1ed760',
                    }}
                  />
                </ModalWrapper>
                <ModalWrapper>
                  <p>Apple Music</p>
                  <FaItunesNote
                    style={{
                      filter: 'drop-shadow(0px 0px 2px #000)',
                      color: '#fa243c',
                    }}
                  />
                </ModalWrapper>
                <ModalWrapper>
                  <p>Tidal</p>
                  <SiTidal style={style} />
                </ModalWrapper>
                <ModalWrapper>
                  <p>Deezer</p>
                  <FaDeezer style={style} />
                </ModalWrapper>
              </>
            }
          />
          <AlbumImg
            onClick={() => setModalOpen(!modalOpen)}
            src={standardsCover}
            alt="Click the album cover to listen to John Venkiah and Rasmus Nyvall's new album 'Standards' (opens Spotify)"
          ></AlbumImg>
          <div>
            <h3>John Venkiah & Rasmus Nyvall - Standards</h3>
          </div>
        </AlbumWrapper>
        <AlbumWrapper>
          <a
            href="https://open.spotify.com/album/45nFMsq34mgAppXfaP9FJl?si=0ow9UCgeSrO9bGrIWbdVHA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AlbumImg
              src={jvt3Small}
              alt="Click the album cover to listen to John Venkiah Trio's album 'On to Something Good' (opens Spotify)"
            ></AlbumImg>
          </a>
          <div>
            <h3>John Venkiah Trio - On to Something Good</h3>
          </div>
        </AlbumWrapper>
      </SectionContainer>
    </HomeStyled>
  );
}
