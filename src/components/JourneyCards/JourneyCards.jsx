import React from 'react';
import PropTypes from 'prop-types';
import WithFlights from '../../data-fetching/WithFlights';
import ReturnFlightCard from '../ReturnFlightCard';

const JourneyCards = ({ flights }) => {
  const pluckLegById = (id) => {
    return flights.legs.filter((leg) => leg.id === id)[0];
  };

  const getJourneyCardProps = (itinerary) => ({
    outboundFlight: pluckLegById(itinerary.legs[0]),
    inboundFlight: pluckLegById(itinerary.legs[1]),
    price: itinerary.price,
    agent: itinerary.agent,
  });

  return (
    <>
      {flights.itineraries.map((itinerary, i) => {
        const jcProps = getJourneyCardProps(itinerary);
        return <ReturnFlightCard key={`journey-${i}`} {...jcProps} />;
      })}
    </>
  );
};

JourneyCards.propTypes = {
  flights: PropTypes.object,
};

export default WithFlights(JourneyCards);
