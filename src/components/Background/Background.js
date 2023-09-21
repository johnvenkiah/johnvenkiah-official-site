import { useEffect, useState } from 'react';
import { BackgroundImg } from './Background.styled';
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
  const [currentBackground, setCurrentBackground] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = backgroundImages[pathname];
    img.onload = () => {
      setIsLoaded(true);
      setCurrentBackground(backgroundImages[pathname]);
    };
  }, [pathname]);

  const backgroundImages = {
    '/': johnMopa,
    '/music': hands,
    '/videos': playingRearShirt,
    '/live': johnFolkRock,
    '/developer': blackClav,
    '/about': soloRear,
    '/contact': soloProfile,
  };

  const loadedBGStyle = {
    backgroundImage: `linear-gradient(transparent, black 95%), url(${currentBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    opacity: isLoaded ? 1 : 0,
    transition: 'opacity 0.8s ease',
  };

  return (
    <motion.div
      style={loadedBGStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.17, 0.67, 0.83, 0.67] }}
      key={pathname}
    >
      <BackgroundImg style={loadedBGStyle} key={pathname} />
    </motion.div>
  );
};

export default Background;
