import React from 'react';
import PropTypes from 'prop-types';

const ReturnFlightCard = ({ outboundFlight, inboundFlight, price, url }) => {
  return <div>hello</div>;
};

ReturnFlightCard.propTypes = {
  outboundFlight: PropTypes.object,
  inboundFlight: PropTypes.object,
  price: PropTypes.string,
  url: PropTypes.string,
};

export default ReturnFlightCard;
