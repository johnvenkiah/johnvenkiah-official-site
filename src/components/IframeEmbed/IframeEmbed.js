import PropTypes from 'prop-types';
import { ResponsiveVideo, VideoTextBox } from './IframeEmbed.styled';

const IframeEmbed = ({ embedId, title, text }) => (
  <>
    <ResponsiveVideo key={embedId}>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </ResponsiveVideo>
    <VideoTextBox>
      <h3>{title}</h3>
      <p>{text}</p>
    </VideoTextBox>
  </>
);

IframeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default IframeEmbed;
