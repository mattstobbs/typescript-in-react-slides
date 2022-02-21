import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, isLoading, loadingText, size, onClick }) {
  const handleClick = () => {
    onClick();
  };

  return (
    <button
      className={`btn btn-${size}`}
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? loadingText : children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
  loadingText: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  isLoading: false,
  loadingText: undefined,
  size: 'md',
};

export default Button;
