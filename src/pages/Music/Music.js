import { useState } from 'react';
import {
  Spotify,
  Deezer,
  Itunes,
  Tidal,
  ListenLink,
  ModalHeadingWrapper,
  BuyLinkContainer,
} from '../../components/Modal/Modal.styled';
import {
  AlbumImg,
  AlbumWrapper,
  MusicStyled,
  SectionContainer,
} from './Music.styled';
import standardsCover from '../../images/venkiah_nyvall_standards.jpg';
import jvt3Small from '../../images/jvt3-small.jpeg';
import laMia from '../../images/faela-la-mia.jpg';
import shirin22 from '../../images/shirin-22.png';
import iJustCant from '../../images/venkiah-i-just-cant.jpeg';
import kaalm from '../../images/kaalm.jpg';
import jvt2_small from '../../images/jvt2-small.png';
import Modal from '../../components/Modal';
import {
  HorRule,
  ModalWrapper,
  BuyLink,
} from '../../components/Modal/Modal.styled';
import albumData from '../../components/AlbumData/AlbumData';

export default function Music({ modalOpen, setModalOpen }) {
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

  const setMusicPageContent = () => {
    const listenData = [
      {
        src: laMia,
        alt: "Listen to Faela's new single 'La Mia'",
        h3: 'Single: Faela - La Mia (2023)',
      },
      {
        src: standardsCover,
        alt: "Listen to John Venkiah and Rasmus Nyvall's new album 'Standards'",
        h3: 'John Venkiah & Rasmus Nyvall - Standards (2022)',
      },
      {
        src: jvt3Small,
        alt: "Listen to John Venkiah Trio's album 'On to Something Good'",
        h3: 'John Venkiah Trio - On to Something Good (2021)',
      },
      {
        src: iJustCant,
        alt: "Listen to Venkiah's single '22'",
        h3: "Single: Venkiah - I Just Can't (2019)",
      },
      {
        src: shirin22,
        alt: "Listen to Shirins single '22'",
        h3: 'Single: Shirin - 22 (2019)',
      },
      {
        src: jvt2_small,
        alt: "Listen to John Venkiah Trio's album 'Elevation'",
        h3: 'John Venkiah Trio - Elevation (2017)',
      },
      {
        src: kaalm,
        alt: "Listen to Kaalms EP 'Everything'",
        h3: 'EP: Kaalm - Everything (2017)',
      },
    ];

    return (
      <>
        {listenData.map((item, i) => (
          <AlbumWrapper key={i}>
            <AlbumImg
              onClick={() => {
                setModalOpen(!modalOpen);
                setModalState({ id: albumData[i].id });
              }}
              src={item.src}
              alt={item.alt}
            ></AlbumImg>
            <div>
              <h3>{item.h3}</h3>
            </div>
          </AlbumWrapper>
        ))}
      </>
    );
  };

  const setModalContent = (data, i) => {
    const albumLinks = [
      {
        title: 'Spotify',
        iconElement: <Spotify />,
        link: data[i].spotify_url,
      },
      {
        title: 'Apple Music',
        iconElement: <Itunes />,
        link: data[i].apple_url,
      },
      {
        title: 'Tidal',
        iconElement: <Tidal />,
        link: data[i].tidal_url,
      },
      {
        title: 'Deezer',
        iconElement: <Deezer />,
        link: data[i].deezer_url,
      },
    ];

    return (
      <>
        <ModalHeadingWrapper>
          <img src={data[i].img_url} alt={data[i].alt_attr} />
          <div>
            <small>Listen to</small>
            <p>'{data[i].title}'</p>
            <small>on</small>
          </div>
        </ModalHeadingWrapper>
        {albumLinks.map((item, i) => (
          <ModalWrapper key={i}>
            <ListenLink to={item.link} target="_blank" rel="noreferrer">
              <p>{item.title}</p>
              {item.iconElement}
              {item.title === 'Deezer' && deezerSvg}
            </ListenLink>
          </ModalWrapper>
        ))}
        <HorRule />
        <BuyLinkContainer>
          <BuyLink to={data[i].buy_link} target="_blank" rel="noreferrer">
            Buy a Copy
          </BuyLink>
        </BuyLinkContainer>
      </>
    );
  };

  return (
    <MusicStyled>
      <h2>Releases Featuring John</h2>
      <SectionContainer>
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
        {setMusicPageContent()}
      </SectionContainer>
    </MusicStyled>
  );
}
