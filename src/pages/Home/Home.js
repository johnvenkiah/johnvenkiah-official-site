import {
  Spotify,
  Deezer,
  Itunes,
  Tidal,
} from '../../components/Modal/Modal.styled';
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
import albumData from '../../components/AlbumData/AlbumData';
import { useState } from 'react';

export default function Home({ modalOpen, setModalOpen }) {
  const [modalState, setModalState] = useState({ id: null });

  const deezerSvg = (
    <svg width="0" height="0">
      <linearGradient id="rainbow-gradient" x1="0%" y1="10%" x2="90%" y2="0%">
        <stop stopColor="#fc9803" offset="30%" />
        <stop stopColor="#e02f2f" offset="45%" />
        <stop stopColor="#274cc4" offset="85%" />
        <stop stopColor="#2bb80b" offset="100%" />
      </linearGradient>
    </svg>
  );

  const setModalContent = (data, i) => {
    return (
      <>
        <img src={data[i].img_url} alt={data[i].alt_attr} />
        <p>Listen to '{data[i].title}' on</p>
        <ModalWrapper>
          <p>Spotify</p>
          <Spotify />
        </ModalWrapper>
        <ModalWrapper>
          <p>Apple Music</p>
          <Itunes />
        </ModalWrapper>
        <ModalWrapper>
          <p>Tidal</p>
          <Tidal />
        </ModalWrapper>
        <ModalWrapper>
          <p>Deezer</p>
          {deezerSvg}
          <Deezer />
        </ModalWrapper>
        <HorRule />
        <ModLink to={data[i].buy_link}>Buy a Vinyl Copy</ModLink>
      </>
    );
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
                {modalOpen &&
                  setModalContent(
                    albumData,
                    albumData.findIndex((p) => p.id === modalState.id)
                  )}
              </>
            }
          />
          <AlbumImg
            onClick={() => {
              setModalOpen(!modalOpen);
              setModalState({ id: albumData[0].id });
            }}
            src={standardsCover}
            alt="Link to listen to John Venkiah and Rasmus Nyvall's new album 'Standards'"
          ></AlbumImg>
          <div>
            <h3>John Venkiah & Rasmus Nyvall - Standards (2022)</h3>
          </div>
        </AlbumWrapper>
        <AlbumWrapper>
          <AlbumImg
            onClick={() => {
              setModalOpen(!modalOpen);
              setModalState({ id: albumData[1].id });
            }}
            src={jvt3Small}
            alt="Click the album cover to listen to John Venkiah Trio's album 'On to Something Good' (opens Spotify)"
          ></AlbumImg>
          {/* </a> */}
          <div>
            <h3>John Venkiah Trio - On to Something Good (2021)</h3>
          </div>
        </AlbumWrapper>
      </SectionContainer>
    </HomeStyled>
  );
}
