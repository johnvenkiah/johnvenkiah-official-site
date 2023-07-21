import { useState } from 'react';
import { HomeStyled, RegularLink, SectionContainer } from './Home.styled';
import Music from './Music/Music';
import Live from '../Live/live';

export default function Home({ modalOpen, setModalOpen }) {
  [modalOpen, setModalOpen] = useState(false);

  return (
    <HomeStyled>
      <h2>Latest Releases</h2>
      <Music modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <SectionContainer>
        <h2>Coming Performances</h2>
        <Live />
        <RegularLink to="/live" rel="noreferrer">
          See All Performances
        </RegularLink>
      </SectionContainer>
    </HomeStyled>
  );
}
