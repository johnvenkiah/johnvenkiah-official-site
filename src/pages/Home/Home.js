// import React, { useState } from 'react';
import { FaSpotify, FaDeezer, FaItunesNote } from 'react-icons/fa';
import { SiTidal } from 'react-icons/si';
import {} from 'react-icons/fa';
import {
  AlbumImg,
  AlbumWrapper,
  HomeStyled,
  SectionContainer,
} from './Home.styled';
import standardsCover from '../../images/venkiah_nyvall_standards.jpg';
import jvt3Small from '../../images/jvt3-small.jpeg';
import Modal from '../../components/Modal';
import {
  HorRule,
  ModalWrapper,
  ModLink,
} from '../../components/Modal/Modal.styled';

export default function Home({ modalOpen, setModalOpen }) {
  const tidalStyle = {
    color: '#78f3f3',
  };

  return (
    <HomeStyled>
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
                      // filter: 'drop-shadow(0px 0px 2px #000)',
                      color: '#1ed760',
                    }}
                  />
                </ModalWrapper>
                <ModalWrapper>
                  <p>Apple Music</p>
                  <FaItunesNote
                    style={{
                      // filter: 'drop-shadow(0px 0px 2px #000)',
                      color: '#fa243c',
                    }}
                  />
                </ModalWrapper>
                <ModalWrapper>
                  <p>Tidal</p>
                  <SiTidal style={tidalStyle} />
                </ModalWrapper>
                <ModalWrapper>
                  <p>Deezer</p>
                  <svg width="0" height="0">
                    <linearGradient
                      id="rainbow-gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop stopColor="#f7b825" offset="30%" />
                      <stop stopColor="#f72525" offset="45%" />
                      <stop stopColor="#2f25f7" offset="75%" />
                      <stop stopColor="#2bb80b" offset="100%" />
                    </linearGradient>
                  </svg>
                  <FaDeezer style={{ fill: 'url(#rainbow-gradient)' }} />
                </ModalWrapper>
                <HorRule />
                <ModLink
                  to={
                    'https://www.havtornrecords.com/store/john-venkiah-rasmus-nyvall-standards-lp'
                  }
                >
                  Buy a Vinyl Copy
                </ModLink>
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
