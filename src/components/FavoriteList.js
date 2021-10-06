import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TripPreview from './TripPreview';
import { cleanupTrip } from '../actions';

function FavoriteList() {
  const userState = useSelector((state) => state.UIReducer);
  const dispatch = useDispatch();

  useEffect(() => () => {
    dispatch(cleanupTrip());
  }, []);

  if (userState.loading === true || userState.user.trips === undefined) {
    return <h1>✈️🚌🛳----LOADING TRIPS</h1>;
  }

  const favTrips = userState.user.trips;
  if (!favTrips.length) {
    return <h1>No favorites</h1>;
  }

  return (
    <ul className="trips-list d-flex align-center h-100">
      {favTrips.map((trip) => (
        <TripPreview trip={trip} key={trip.id} />
      ))}
    </ul>
  );
}

export default FavoriteList;
