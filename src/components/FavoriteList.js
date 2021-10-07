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
    return (
      <div className="d-flex flex-column justify-center align-center w-100">
        <h1 className="session-title">Loading...</h1>
      </div>
    );
  }

  const favTrips = userState.user.trips;
  if (!favTrips.length) {
    return (
      <div className="loading-container d-flex flex-column justify-center w-100">
        <h1 className="session-title text-center mw-300">No favorites yet :(</h1>
      </div>
    );
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
