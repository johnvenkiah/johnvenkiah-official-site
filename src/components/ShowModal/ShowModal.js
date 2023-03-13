import { IntroModal } from './ShowModal.styled';
import { bool, func } from 'prop-types';

const ShowModal = ({ open, setOpen }) => {
  // open
  //   ? (document.body.style.overflow = 'auto')
  //   : (document.body.style.overflow = 'hidden');
  return (
    <IntroModal open={open} onClick={() => setOpen(!open)}>
      <p>Welcome to the website of</p>
      <h1>John Venkiah</h1>
      <p>Pianist, Singer, Songwriter and Software Developer</p>
      <p>Click to Enter</p>
    </IntroModal>
  );
};

ShowModal.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default ShowModal;
