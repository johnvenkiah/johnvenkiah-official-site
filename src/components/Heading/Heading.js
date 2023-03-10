import { H2Div } from './Heading.styled';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoIosArrowDown } from 'react-icons/io';

const PAGE_TITLES = {
  '/': 'Home',
  '/music': 'Music',
  '/videos': 'Videos',
  '/live': 'Live',
  '/developer': 'Developer',
  '/about': 'About',
  '/contact': 'Contact/Press',
};

function Heading() {
  const { pathname } = useLocation();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      key={pathname}
    >
      <H2Div>
        <h2>{PAGE_TITLES[pathname]}</h2>
      </H2Div>
      <IoIosArrowDown />
    </motion.div>
  );
}

export default Heading;
