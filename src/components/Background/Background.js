import { useEffect, useState } from 'react';
import { BackgroundImg, Footer } from './Background.styled';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import johnMopaSinging from '../../images/background/mopa_singing_portrait.png';
import johnMopaSingingLs from '../../images/background/mopa_singing.jpeg';
import hands from '../../images/background/hands.jpg';
import playingRearShirt from '../../images/background/playing_rear_shirt.jpg';
import soloProfile from '../../images/background/solo_profile.jpg';
import soloRear from '../../images/background/solo_rear.jpg';
import blackClav from '../../images/background/john_black_clav.png';
import johnFolkRockPtrt from '../../images/background/john_folk_rock_portrait.png';
import johnFolkRockLscp from '../../images/background/john_folk_rock.jpeg';

const Background = () => {
  const { pathname } = useLocation();
  let johnMopa;
  let johnFolkRock;
  if (window.innerWidth / window.innerHeight > 1) {
    johnMopa = johnMopaSingingLs;
    johnFolkRock = johnFolkRockLscp;
  } else {
    johnMopa = johnMopaSinging;
    johnFolkRock = johnFolkRockPtrt;
  }

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const backgroundImages = {
    '/': johnMopa,
    '/music': hands,
    '/videos': playingRearShirt,
    '/live': johnFolkRock,
    '/developer': blackClav,
    '/about': soloRear,
    '/contact': soloProfile,
  };

  let photographer;
  if (pathname === '/') {
    photographer = 'Sascha Kajic';
  } else if (pathname === '/live') {
    photographer = 'Tobias Annerfeldt';
  } else {
    photographer = 'Stefan Isaksson';
  }

  const style = {
    boxShadow: 'inset 0 0 50px #000',
  };

  const loadingBGStyle = {
    background: `linear-gradient(transparent, black 95%)
  no-repeat center center/cover`,
  };
  const loadedBGStyle = {
    background: `linear-gradient(transparent, black 95%), url(${backgroundImages[pathname]})
  no-repeat center center/cover`,
  };

  return (
    <>
      <motion.div
        style={style}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.17, 0.67, 0.83, 0.67] }}
        key={pathname}
      >
        <BackgroundImg
          style={!isLoaded ? loadingBGStyle : loadedBGStyle}
          key={pathname}
        />
      </motion.div>
      <Footer>
        <small>Photo: {photographer}</small>
        <p>© John Venkiah 2023</p>
      </Footer>
    </>
  );
};

export default Background;
