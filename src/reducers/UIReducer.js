const initialState = {
  logged_in: false,
  user: {},
  message: '',
  errors: [],
  loading: true,
};

const UIReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING_USER':
      return { ...state, loading: true };
    case 'LOGIN_USER':
    case 'USER_CREATED':
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        logged_in: true,
      };
    case 'USER_UPDATED':
      return {
        ...state,
        loading: false,
        message: action.payload.msg,
      };
    case 'LOGOUT_USER':
    case 'USER_DELETED':
      return { ...initialState, loading: false };
    case 'USER_ERRORS':
      return {
        ...state,
        loading: false,
        errors: action.payload.errors,
      };
    default:
      return state;
  }
};

export default UIReducer;
