const initialState = {
  logged_in: false,
  current_user: {},
  errors: '',
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, logged_in: true, current_user: action.payload.user };
    case 'LOGOUT':
      return { ...initialState };
    case 'LOGIN_ERRORS':
      return { ...state, logged_in: false, errors: action.payload.errors };
    default:
      return state;
  }
};

export default sessionReducer;
