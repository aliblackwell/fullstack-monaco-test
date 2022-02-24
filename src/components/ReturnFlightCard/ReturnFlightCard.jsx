import React from 'react';
import PropTypes from 'prop-types';
import BpkCard from 'bpk-component-card';
import STYLES from './ReturnFlightCard.scss';
import FlightCardDetail from '../FlightCardDetail';
const getClassName = (className) => STYLES[className] || 'UNKNOWN';

const ReturnFlightCard = ({ outboundFlight, inboundFlight, price, url }) => {
  return (
    <section>
      <BpkCard className={getClassName('ReturnFlightCard')}>
        <FlightCardDetail flight={outboundFlight} />
        <FlightCardDetail flight={inboundFlight} />
      </BpkCard>
    </section>
  );
};

ReturnFlightCard.propTypes = {
  outboundFlight: PropTypes.object,
  inboundFlight: PropTypes.object,
  price: PropTypes.string,
  url: PropTypes.string,
};

export default ReturnFlightCard;
