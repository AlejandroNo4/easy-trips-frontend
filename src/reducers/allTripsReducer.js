const initialState = {
  all_trips: {},
  errors: '',
};

const allTripsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TRIPS_SUCCESS':
      return { ...state, all_trips: action.payload.trips };
    case 'TRIPS_ERRORS':
      return { ...state, errors: action.payload.errors };
    default:
      return state;
  }
};

export default allTripsReducer;
