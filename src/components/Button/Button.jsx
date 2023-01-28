import propTypes from 'prop-types';
import './Button.css';


export const Button = ({ onClick }) => {
  return (
    <button type="button" className="Button" onClick={onClick}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: propTypes.func.isRequired,
};