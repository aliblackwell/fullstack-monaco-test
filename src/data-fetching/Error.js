import PropTypes from 'prop-types';
import React from 'react';

const Error = ({ error }) => {
  return <p>{error.message}</p>;
};

Error.propTypes = {
  error: PropTypes.object,
};

export default Error;
