const loadingStart = () => ({
  type: 'LOADING',
});

const loadingStop = () => ({
  type: 'STOP_LOAD',
});

const sessionStart = (user) => ({
  type: 'LOGIN',
  payload: {
    user,
  },
});

const sessionEnd = () => ({
  type: 'LOGOUT',
});

const sessionErrors = (errors) => ({
  type: 'LOGIN_ERRORS',
  payload: {
    errors,
  },
});

const fetchedTrip = (trip) => ({
  type: 'TRIP_SUCCESS',
  payload: {
    trip,
  },
});

const fetchedTripErrors = (errors) => ({
  type: 'TRIP_ERRORS',
  payload: {
    errors,
  },
});

const fetchedAllTrips = (trips) => ({
  type: 'TRIPS_SUCCESS',
  payload: {
    trips,
  },
});

const fetchedAllTripsErrors = (errors) => ({
  type: 'TRIPS_ERRORS',
  payload: {
    errors,
  },
});

export {
  loadingStart,
  loadingStop,
  sessionStart,
  sessionEnd,
  sessionErrors,
  fetchedTrip,
  fetchedTripErrors,
  fetchedAllTrips,
  fetchedAllTripsErrors,
};
