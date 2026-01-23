import { useState } from 'react';
import { LinkBold } from './Home.styled';
import { HomeStyled, SectionContainer } from './Home.styled';
import Music from '../Music/Music';
import Live from '../Live/Live';

export default function Home({ modalOpen, setModalOpen }) {
  [modalOpen, setModalOpen] = useState(false);

  return (
    <HomeStyled>
      <h2>Latest Releases</h2>
      <Music modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <h2>
        <LinkBold to="/music">More Music</LinkBold>
      </h2>
      <SectionContainer>
        <Live />
      </SectionContainer>
    </HomeStyled>
  );
}
