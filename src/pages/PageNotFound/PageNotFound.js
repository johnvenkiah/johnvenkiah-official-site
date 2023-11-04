import {
  Background,
  Container,
  RedCenteredCircle,
} from './PageNotFound.styled';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  document.body.style.overflow = 'hidden';
  return (
    <>
      <Background />
      <RedCenteredCircle />
      <Container>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          The requested URL was not found on this server. If you entered the URL
          manually please check your spelling and try again.
        </p>
        <Link to="/">Go back Home</Link>
      </Container>
    </>
  );
}
