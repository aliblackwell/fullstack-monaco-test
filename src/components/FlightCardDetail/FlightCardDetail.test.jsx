import React from 'react';
import TestRenderer from 'react-test-renderer';
import FlightCardDetail from './FlightCardDetail';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
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
describe('FlightCardDetail', () => {
  it('should render correctly', () => {
    const tree = TestRenderer.create(<FlightCardDetail flight={flight} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should display plural stops when stops > 1', () => {
    const customFlight = { ...flight };
    customFlight.stops = 2;
    const wrapper = mount(<FlightCardDetail flight={customFlight} />);
    expect(wrapper.text().includes('Stops')).toBe(true);
  });
  it('should display singular stop when stops < 2', () => {
    const customFlight = { ...flight };
    customFlight.stops = 1;
    const wrapper = mount(<FlightCardDetail flight={customFlight} />);
    expect(wrapper.text().includes('Stops')).toBe(false);
    expect(wrapper.text().includes('Direct')).toBe(false);
  });
  it('should display time in 24hr format', () => {
    const wrapper = mount(<FlightCardDetail flight={flight} />);
    expect(wrapper.text().includes('15:35')).toBe(true);
  });
  it("should show when it's a direct flight", () => {
    const wrapper = mount(<FlightCardDetail flight={flight} />);
    expect(wrapper.text().includes('Direct')).toBe(true);
  });
});
