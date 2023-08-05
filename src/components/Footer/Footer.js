import { useLocation } from 'react-router-dom';
import { Footer as StyledFooter } from './Footer.styled';

export default function Footer() {
  const { pathname } = useLocation();
  let photographer = 'Stefan Isaksson';
  pathname === '/' && (photographer = 'Sascha Kajic');
  pathname === '/live' && (photographer = 'Tobias Annerfeldt');

  return (
    <StyledFooter>
      <small>Background photo: {photographer}</small>
      <p>© John Venkiah 2023</p>
    </StyledFooter>
  );
}
