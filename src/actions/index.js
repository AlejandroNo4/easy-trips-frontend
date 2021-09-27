const loadingUser = () => ({
  type: 'LOADING_USER',
});

const userCreated = (user) => ({
  type: 'USER_CREATED',
  payload: {
    user,
  },
});

const loginUser = (user) => ({
  type: 'LOGIN_USER',
  payload: {
    user,
  },
});

const userUpdated = (msg) => ({
  type: 'USER_UPDATED',
  payload: {
    msg,
  },
});

const logoutUser = () => ({
  type: 'LOGOUT_USER',
});

const userDeleted = () => ({
  type: 'USER_DELETED',
});

const userErrors = (errors) => ({
  type: 'USER_ERRORS',
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
  userCreated,
  loadingUser,
  loginUser,
  userUpdated,
  logoutUser,
  userDeleted,
  userErrors,
  fetchedTrip,
  fetchedTripErrors,
  fetchedAllTrips,
  fetchedAllTripsErrors,
};
