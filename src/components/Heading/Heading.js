import { H2Div } from './Heading.styled';
import { useLocation } from 'react-router-dom';

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
    <H2Div>
      <h2>{PAGE_TITLES[pathname]}</h2>
    </H2Div>
  );
}

export default Heading;
