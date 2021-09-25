const initialState = {
  trip_data: {},
  errors: '',
};

const tripReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TRIP_SUCCESS':
      return { ...state, trip_data: action.payload.trip };
    case 'TRIP_ERRORS':
      return { ...state, errors: action.payload.errors };
    default:
      return state;
  }
};

export default tripReducer;
