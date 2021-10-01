import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import fetchingGet from '../api/fetchingGet';

const Trip = ({ id }) => {
  const tripsState = useSelector((state) => state.tripsReducer);
  const dispatch = useDispatch();

  const trip = tripsState.trip_data;

  useEffect(() => {
    const url = `trips/${id}`;
    const type = 'trip';
    fetchingGet({
      dispatch,
      url,
      type,
    });
    // return () => {
    //   cleanup
    // }
  }, []);

  if (tripsState.loading === true) {
    return (
      <h1>✈️🚌🛳----LOADING TRIPS</h1>
    );
  }
  return (
    <div className="trip">
      <h1>{trip.id}</h1>
      <h1>{trip.destination}</h1>
    </div>
  );
};

Trip.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Trip;
