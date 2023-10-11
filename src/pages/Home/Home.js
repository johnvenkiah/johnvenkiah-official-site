import { useState } from 'react';
import { HomeStyled, SectionContainer } from './Home.styled';
import Music from '../Music/Music';
import Live from '../Live/Live';

export default function Home({ modalOpen, setModalOpen }) {
  [modalOpen, setModalOpen] = useState(false);

  return (
    <HomeStyled>
      <h2>Latest Releases</h2>
      <Music modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <SectionContainer>
        <Live />
      </SectionContainer>
    </HomeStyled>
  );
}
