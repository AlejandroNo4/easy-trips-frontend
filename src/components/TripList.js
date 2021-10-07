import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchingGet from '../api/fetchingGet';
import TripPreview from './TripPreview';
import { cleanupTrip } from '../actions';

const TripList = () => {
  const tripsState = useSelector((state) => state.tripsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const url = 'trips';
    const type = 'trips';
    fetchingGet({
      dispatch,
      url,
      type,
    });
    return () => {
      dispatch(cleanupTrip());
    };
  }, []);

  const allTrips = tripsState.all_trips_data;

  if (tripsState.loading === true) {
    return (
      <div className="d-flex flex-column justify-center align-center w-100">
        <h1 className="session-title">Loading...</h1>
      </div>
    );
  }

  return (
    <ul className="trips-list d-flex align-center h-100">
      {allTrips.map((trip) => (
        <TripPreview trip={trip} key={trip.id} />
      ))}
    </ul>
  );
};

export default TripList;
