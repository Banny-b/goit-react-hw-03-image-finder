import propTypes from 'prop-types';
import './ImageGalleryItem.css';


export const ImageGalleryItem = ({ tags, preview, largeImage, onClick }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        src={preview}
        alt={tags}
        onClick={() => {
          onClick(largeImage);
        }}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  largeImage: propTypes.string.isRequired,
  tags: propTypes.string.isRequired,
  preview: propTypes.string.isRequired,
  onClick: propTypes.func,
};