import React from 'react';
import PropTypes from 'prop-types';

function Loading({ fullPage = false, text = 'Loading...' }) {
  const spinner = (
    <div className="flex flex-col items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      {text && <p className="mt-2 text-gray-600">{text}</p>}
    </div>
  );

  if (fullPage) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        {spinner}
      </div>
    );
  }

  return (
    <div className="py-8">
      {spinner}
    </div>
  );
}

Loading.propTypes = {
  fullPage: PropTypes.bool,
  text: PropTypes.string,
};

Loading.defaultProps = {
  fullPage: false,
  text: 'Loading...',
};

export default Loading;
