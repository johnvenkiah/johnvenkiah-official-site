import { BackgroundImg } from './Background.styled';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import johnMopaSinging from '../../images/background/mopa_singing_portrait.png';
import hands from '../../images/background/hands.jpg';
import playingRearShirt from '../../images/background/playing_rear_shirt.jpg';
import soloProfile from '../../images/background/solo_profile.jpg';
// import soloRear from '../../images/background/solo_rear.jpg';
import blackClav from '../../images/background/john_black_clav.png';
import johnPalladium from '../../images/background/john_palladium.jpeg';
import johnFolkRock from '../../images/background/john_folk_rock_portrait.png';

const Background = () => {
  const { pathname } = useLocation();
  const backgroundImages = {
    '/': johnMopaSinging,
    '/music': hands,
    '/videos': playingRearShirt,
    '/live': johnFolkRock,
    '/developer': blackClav,
    '/about': johnPalladium,
    '/contact': soloProfile,
  };
  const style = {
    boxShadow: 'inset 0 0 50px #000',
  };

  return (
    <motion.div
      style={style}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.17, 0.67, 0.83, 0.67] }}
      key={pathname}
    >
      <BackgroundImg
        // src={backgroundImages[pathname]}
        style={{
          background: `linear-gradient(transparent, black 95%), url(${backgroundImages[pathname]})
        no-repeat center center/cover fixed`,
        }}
        alt="background"
        key={pathname}
      />
    </motion.div>
  );
};

export default Background;
