import React from 'react';
import TestRenderer from 'react-test-renderer';
import FlightCardDetail from './FlightCardDetail';

describe('FlightCardDetail', () => {
  it('should render correctly', () => {
    const flight = {
      id: 'leg_1',
      departure_airport: 'BUD',
      arrival_airport: 'LTN',
      departure_time: '2020-10-31T15:35',
      arrival_time: '2020-10-31T17:00',
      stops: 0,
      airline_name: 'Wizz Air',
      airline_id: 'WZ',
      duration_mins: 145,
    };
    const tree = TestRenderer.create(<FlightCardDetail flight={flight} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
