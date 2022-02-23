import React from 'react';
import PropTypes from 'prop-types';
import STYLES from './FlightCardDetail.scss';
const getClassName = (className) => STYLES[className] || 'UNKNOWN';

import LongArrowRightIconSm from 'bpk-component-icon/sm/long-arrow-right';
import BpkImage from 'bpk-component-image';

function getFlightTimeFromDateString(dateString) {
  const date = new Date(dateString);
  const timeWithDate = date.toLocaleDateString('en-GB', {
    hour: 'numeric',
    minute: '2-digit',
  });
  return timeWithDate.split(', ')[1]; // just get the time
}

const FlightCardDetail = ({ flight }) => {
  return (
    <div className={getClassName('FlightCardDetail')}>
      <div className={getClassName('FlightCardDetail__leg-container')}>
        <BpkImage
          altText={`${flight.airline_name} logo`}
          style={{ height: '32px', width: '32px' }}
          aspectRatio={32 / 32}
          src={`https://logos.skyscnr.com/images/airlines/favicon/${flight.airline_id}.png`}
        />
        <div className={getClassName('FlightCardDetail__times-container')}>
          <p>
            {getFlightTimeFromDateString(flight.departure_time)}
            <br />
            <span>{flight.departure_airport}</span>
          </p>
          <LongArrowRightIconSm className={getClassName('abc-icon__arrow')} />
          <p>
            {getFlightTimeFromDateString(flight.arrival_time)}
            <br />
            <span>{flight.arrival_airport}</span>
          </p>
        </div>
      </div>

      <div className={getClassName('flight-meta-container')}></div>
    </div>
  );
};

FlightCardDetail.propTypes = {
  flight: PropTypes.object,
};

export default FlightCardDetail;
