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
    return (
      <>
        {albumData.map((item, i) => (
          <AlbumWrapper key={i}>
            <AlbumImg
              onClick={() => {
                setModalOpen(!modalOpen);
                setModalState({ id: item.id });
              }}
              src={item.img_url}
              alt={item.alt_attr}
            ></AlbumImg>
            <div>
              <h3>{item.title}</h3>
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
