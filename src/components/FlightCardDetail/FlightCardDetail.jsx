import React from 'react';
import PropTypes from 'prop-types';
import STYLES from './FlightCardDetail.scss';
const getClassName = (className) => STYLES[className] || 'UNKNOWN';
import BpkText, { TEXT_STYLES } from 'bpk-component-text';
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

const LegDetails = ({ timestamp, airport }) => (
  <BpkText tagName="p" textStyle={TEXT_STYLES.base}>
    {getFlightTimeFromDateString(timestamp)}
    <br />
    <BpkText tagName="span" textStyle={TEXT_STYLES.base} className={getClassName('FlightCardDetail__airport')}>{airport}</BpkText>
  </BpkText>
);

LegDetails.propTypes = {
  timestamp: PropTypes.string,
  airport: PropTypes.string,
};

const FlightCardDetail = ({ flight }) => {
  const getFlightDuration = (flight) => {
    const duration = flight.duration_mins;
    return `${Math.floor(duration / 60)}h ${duration % 60}`;
  };

  const getFlightStops = (flight) => {
    const stops = flight.stops;
    return stops > 0 ? `${stops} Stop${stops > 1 ? 's' : ''}` : 'Direct';
  };

  return (
    <article className={getClassName('FlightCardDetail')}>
      <div className={getClassName('FlightCardDetail__leg-container')}>
        <div className={getClassName('FlightCardDetail__left')}>
          <BpkImage
            altText={`${flight.airline_name} logo`}
            style={{ height: '32px', width: '32px', minWidth: '32px' }}
            aspectRatio={32 / 32}
            src={`https://logos.skyscnr.com/images/airlines/favicon/${flight.airline_id}.png`}
          />
          <div className={getClassName('FlightCardDetail__times-container')}>
            <LegDetails timestamp={flight.departure_time} airport={flight.departure_airport} />
            <LongArrowRightIconSm className={getClassName('abc-icon__arrow')} />
            <LegDetails timestamp={flight.arrival_time} airport={flight.arrival_airport} />
          </div>
        </div>
        <div className={getClassName('FlightCardDetail__right')}>
          <BpkText
            className={getClassName('FlightCardDetail__flight-meta')}
            tagName="p"
            textStyle={TEXT_STYLES.sm}
          >
            {getFlightDuration(flight)}
            <br />
            <BpkText
              tagName="span"
              textStyle={TEXT_STYLES.sm}
              className={getClassName(
                `FlightCardDetail__flight-stops_${flight.stops > 0 ? 'indirect' : 'direct'}`
              )}
            >
              {getFlightStops(flight)}
            </BpkText>
          </BpkText>
        </div>
      </div>
    </article>
  );
};

FlightCardDetail.propTypes = {
  flight: PropTypes.object,
};

export default FlightCardDetail;
