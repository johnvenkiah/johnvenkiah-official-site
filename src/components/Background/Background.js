import { useEffect, useMemo, useState } from 'react';
import { BackgroundImg } from './Background.styled';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import johnMopaSinging from '../../images/background/mopa_singing_portrait.jpg';
import johnMopaSingingLs from '../../images/background/mopa_singing.jpeg';
import hands from '../../images/background/hands.jpg';
import playingRearShirt from '../../images/background/playing_rear_shirt.jpeg';
import soloProfile from '../../images/background/solo_profile.jpeg';
import soloRear from '../../images/background/solo_rear.jpeg';
import blackClav from '../../images/background/john_black_clav.png';
import johnFolkRockPtrt from '../../images/background/john_folk_rock_portrait.jpeg';
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

  const backgroundImages = useMemo(() => {
    return {
      '/': johnMopa,
      '/music': hands,
      '/videos': playingRearShirt,
      '/live': johnFolkRock,
      '/developer': blackClav,
      '/about': soloRear,
      '/contact': soloProfile,
    };
  }, [johnMopa, johnFolkRock]);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    // Clear isLoaded when pathname changes to trigger a delay when loading a new image
    setIsLoaded(false);

    const image = new Image();
    image.src = backgroundImages[pathname];
    // image.src = `${backgroundImages[pathname]}?${Math.random()}`;
    image.onload = () => {
      // Use setTimeout test the loading animation
      // setTimeout(() => {
      //   console.log('Setting isLoaded to true');
      //   setIsLoaded(true);
      // }, 2000);
      setIsLoaded(true);
    };

    return () => {
      // Clean up the image load event listener if the component unmounts
      image.onload = null;
    };
  }, [pathname, backgroundImages]);

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

  const motionDivProps = {
    initial: { opacity: 0, scale: 1.01 },
    animate: isLoaded ? { opacity: 1, scale: 1.005 } : {},
    exit: { opacity: 0, scale: 1.1 },
    transition: { duration: 0.8, ease: [0.73, 0.26, 0.39, 0.82] },
    key: pathname,
  };

  return (
    <>
      <motion.div {...motionDivProps} style={style}>
        <BackgroundImg
          style={!isLoaded ? loadingBGStyle : loadedBGStyle}
          key={pathname}
          onLoad={handleImageLoad}
        />
      </motion.div>
    </>
  );
};

export default Background;
