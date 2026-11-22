import { useState, useEffect } from 'react';
import { LinkBold, HomeStyled, SectionContainer } from './Home.styled';
import Music from '../Music/Music';
import Live from '../Live/Live';
import LandingModal from './LandingModal';
import efawCover from '../../images/efawCover.jpg'; // Import the cover art image

// Assuming modalOpen for the Music component is handled by a parent component
export default function Home({ modalOpen, setModalOpen }) {
  // 1. Manage landing modal state locally
  const [landingModalOpen, setLandingModalOpen] = useState(false);

  // 2. State to hold the dynamic link information
  const [linkData, setLinkData] = useState({
    url: '',
    text: '',
  });

  useEffect(() => {
    // --- SESSION LOGIC ---
    // Check if the user has already seen the modal during this browser session
    const hasSeenModal = sessionStorage.getItem('hasSeenLandingModal');

    if (!hasSeenModal) {
      setLandingModalOpen(true);
      sessionStorage.setItem('hasSeenLandingModal', 'true');
    }

    setLinkData({
      url: 'https://distrokid.com/hyperfollow/venkiah/eden-for-a-week',
      text: 'Presave "Eden For A Week"',
    });
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <HomeStyled>
      <h2>Latest Releases</h2>

      {/* Conditionally render the modal so it isn't in the DOM when closed */}
      <LandingModal
        landingModalOpen={landingModalOpen}
        setLandingModalOpen={setLandingModalOpen}
        linkData={linkData}
        // Import your cover art at the top of the file and pass it here
        coverArt={efawCover}
      />

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
