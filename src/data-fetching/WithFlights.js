import React, { useState, useEffect } from 'react';
import Error from './Error';
import Loading from './Loading';

export default function WithFlights(WrappedComponent) {
  function WithFlights() {
    const [flights, setFlights] = useState(null);
    const [fetchError, setFetchError] = useState(null);

    useEffect(() => {
      async function getFlights() {
        try {
          const response = await fetch('./flights.json');
          const flights = await response.json();
          setFlights(flights);
        } catch (error) {
          setFetchError(error);
        }
      }
      getFlights();
    }, [setFetchError]);

    return (
      <>
        {flights && <WrappedComponent flights={flights} />}
        {fetchError && <Error error={fetchError} />}
        {!flights && <Loading message="Fetching data" />}
      </>
    );
  }
  return WithFlights;
}
