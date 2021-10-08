const loadingUser = () => ({
  type: 'LOADING_USER',
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

const favDeleted = () => ({
  type: 'FAV_DELETED',
});

const userErrors = (errors) => ({
  type: 'USER_ERRORS',
  payload: {
    errors,
  },
});

const loadingTrip = () => ({
  type: 'LOADING_TRIP',
});

const tripSuccess = (trip) => ({
  type: 'TRIP_SUCCESS',
  payload: {
    trip,
  },
});

const allTripsSuccess = (trips) => ({
  type: 'ALL_TRIPS_SUCCESS',
  payload: {
    trips,
  },
});

const tripUpdated = (trip) => ({
  type: 'TRIP_UPDATED',
  payload: {
    trip,
  },
});

const tripErrors = (errors) => ({
  type: 'TRIP_ERRORS',
  payload: {
    errors,
  },
});

const tripDeleted = () => ({
  type: 'TRIP_DELETED',
});

const cleanupTrip = () => ({
  type: 'CLEAN_TRIP',
});

const cleanupErrors = () => ({
  type: 'CLEAN_ERRORS',
});

export {
  loadingUser,
  loginUser,
  userUpdated,
  logoutUser,
  favDeleted,
  userErrors,
  loadingTrip,
  tripSuccess,
  allTripsSuccess,
  tripUpdated,
  tripErrors,
  tripDeleted,
  cleanupTrip,
  cleanupErrors,
};
