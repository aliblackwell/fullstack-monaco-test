import React from 'react';
import TestRenderer from 'react-test-renderer';
import ReturnFlightCard from './ReturnFlightCard';

describe('ReturnFlightCard', () => {
  it('should render correctly', () => {
    const props = {
      outboundFlight: {
        id: 'leg_1',
        departure_airport: 'BUD',
        arrival_airport: 'LTN',
        departure_time: '2020-10-31T15:35',
        arrival_time: '2020-10-31T17:00',
        stops: 0,
        airline_name: 'Wizz Air',
        airline_id: 'WZ',
        duration_mins: 145,
      },
      inboundFlight: {
        id: 'leg_6',
        departure_airport: 'LGW',
        arrival_airport: 'BUD',
        departure_time: '2020-11-11T08:10',
        arrival_time: '2020-11-11T11:40',
        stops: 0,
        airline_name: 'Lufthansa',
        airline_id: 'LH',
        duration_mins: 150,
      },
      price: '£150',
      agent: 'Some agent',
    };

    const tree = TestRenderer.create(<ReturnFlightCard {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
