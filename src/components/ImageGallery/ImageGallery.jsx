import propTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.css';


export const ImageGallery = ({ images, onClick }) => {
  return (
    <div>
      <ul className="ImageGallery">
        {images.map(({ id, largeImageURL, tags, webformatURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              largeImage={largeImageURL}
              tags={tags}
              preview={webformatURL}
              onClick={onClick}
            />
          );
        })}
      </ul>
    </div>
  );
};

ImageGallery.propTypes = {
  images: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      webformatURL: propTypes.string.isRequired,
      tags: propTypes.string.isRequired,
      largeImageURL: propTypes.string,
    })
  ).isRequired,
  onClick: propTypes.func,
};