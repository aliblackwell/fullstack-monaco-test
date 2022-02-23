import React from 'react';
import Header from '../Header';
import STYLES from './App.scss';
import JourneyCards from '../JourneyCards';
const getClassName = (className) => STYLES[className] || 'UNKNOWN';

const App = () => (
  <div className={getClassName('App')}>
    <Header />
    <main className={getClassName('App__main')}>
      <JourneyCards />
    </main>
  </div>
);

export default App;
