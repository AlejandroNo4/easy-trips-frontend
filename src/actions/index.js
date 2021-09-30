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

const userDeleted = () => ({
  type: 'USER_DELETED',
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

const tripDeleted = (errors) => ({
  type: 'TRIP_DELETED',
  payload: {
    errors,
  },
});

export {
  loadingUser,
  loginUser,
  userUpdated,
  logoutUser,
  userDeleted,
  userErrors,
  loadingTrip,
  tripSuccess,
  allTripsSuccess,
  tripUpdated,
  tripErrors,
  tripDeleted,
};
