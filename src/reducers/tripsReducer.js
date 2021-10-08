const initialState = {
  loading: false,
  trip_data: {},
  all_trips_data: [],
  errors: '',
};

const tripsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING_TRIP':
      return { ...state, loading: true };
    case 'TRIP_SUCCESS':
      return { ...state, trip_data: action.payload.trip, loading: false };
    case 'CLEAN_TRIP': {
      return { ...state, trip_data: {}, all_trips_data: [] };
    }
    case 'TRIP_UPDATED':
      return {
        ...state,
        loading: false,
        trip_data: action.payload.trip,
      };
    case 'ALL_TRIPS_SUCCESS':
      return {
        ...state,
        all_trips_data: action.payload.trips,
        loading: false,
      };
    case 'TRIP_DELETED':
      return { ...state, trip_data: {}, loading: false };
    case 'TRIP_ERRORS':
      return { ...state, loading: false, errors: action.payload.errors };
    default:
      return state;
  }
};

export default tripsReducer;
