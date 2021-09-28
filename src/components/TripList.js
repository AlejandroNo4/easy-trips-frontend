import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchingGet from '../api/fetchingGet';
import TripPreview from './TripPreview';

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
  }, []);

  console.log(tripsState);
  const allTrips = tripsState.all_trips_data;

  if (tripsState.loading === true) {
    return (
      <h1>✈️🚌🛳----LOADING TRIPS</h1>
    );
  }

  return (
    <ul>
      {allTrips.map((trip) => (
        <TripPreview trip={trip} key={trip.id} />
      ))}
    </ul>
  );
};

export default TripList;
