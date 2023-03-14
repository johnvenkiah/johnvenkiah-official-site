import React, { useState } from 'react';
import {
  AlbumImg,
  AlbumWrapper,
  HomeStyled,
  SectionContainer,
} from './Home.styled';
import standardsCover from '../../images/venkiah_nyvall_standards.jpg';
import jvt3Small from '../../images/jvt3-small.jpeg';
import Modal from '../../components/Modal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <HomeStyled>
      <h2>Latest Releases</h2>
      <SectionContainer>
        <AlbumWrapper>
          <Modal
            isOpen={isModalOpen}
            toggleModal={toggleModal}
            closeOnOutsideClick={true}
          />
          <p>This is inside the Modal!</p>
          <Modal />
          <button onClick={toggleModal}>
            {/* <a
          href="https://open.spotify.com/album/7xzKnB8eRTmfu47DzCMB1t?si=f1fPYP6fRaKGL5CC0hp1yg"
          target="_blank"
          rel="noopener noreferrer"
          >
            <AlbumImg
              src={standardsCover}
              class="album-cover"
              alt="Click the album cover to listen to John Venkiah and Rasmus Nyvall's new album 'Standards' (opens Spotify)"
            ></AlbumImg>
          </a> */}
            <AlbumImg
              src={standardsCover}
              class="album-cover"
              alt="Click the album cover to listen to John Venkiah and Rasmus Nyvall's new album 'Standards' (opens Spotify)"
            ></AlbumImg>
          </button>
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
              class="album-cover"
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
