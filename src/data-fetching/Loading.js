import PropTypes from 'prop-types';
import React from 'react';

const Loading = ({ message }) => {
  return <p>{message}</p>;
};

Loading.propTypes = {
  message: PropTypes.string,
};

export default Loading;
