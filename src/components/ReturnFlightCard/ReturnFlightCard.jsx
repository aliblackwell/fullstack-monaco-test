import React from 'react';
import PropTypes from 'prop-types';
import BpkCard from 'bpk-component-card';
import STYLES from './ReturnFlightCard.scss';
import FlightCardDetail from '../FlightCardDetail';
import BpkText from 'bpk-component-text/src/BpkText';
const getClassName = (className) => STYLES[className] || 'UNKNOWN';

import BpkButton from 'bpk-component-button';

import { withDefaultProps } from 'bpk-react-utils';
const LargeParagraph = withDefaultProps(BpkText, { textStyle: 'xl', tagName: 'p' });
const MutedUrl = withDefaultProps(BpkText, {
  textStyle: 'l',
  tagName: 'p',
  style: { color: 'rgb(118,112,132)' },
});

const ReturnFlightCard = ({ outboundFlight, inboundFlight, price, agent }) => {
  return (
    <section>
      <BpkCard className={getClassName('ReturnFlightCard')}>
        <FlightCardDetail flight={outboundFlight} />
        <FlightCardDetail flight={inboundFlight} />
        <div className={getClassName('ReturnFlightCard__layout-container')}>
          <div>
            <LargeParagraph>{price}</LargeParagraph>
            <MutedUrl>{agent}</MutedUrl>
          </div>
          <BpkButton large={false} className={getClassName('ReturnFlightCard__button')}>Select</BpkButton>
        </div>
      </BpkCard>
    </section>
  );
};

ReturnFlightCard.propTypes = {
  outboundFlight: PropTypes.object,
  inboundFlight: PropTypes.object,
  price: PropTypes.string,
  agent: PropTypes.string,
};

export default ReturnFlightCard;
