const initialState = {
  loading: false,
};

const loadReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: true };
    case 'STOP_LOAD':
      return { ...initialState };
    default:
      return state;
  }
};

export default loadReducer;
