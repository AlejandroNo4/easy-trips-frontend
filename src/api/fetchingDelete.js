import axios from './axios';
import * as actions from '../actions';

const fetchingDelete = ({ dispatch, url, type }) => {
  if (type === 'UI') {
    dispatch(actions.loadingUser());
  }
  const requestingCard = async () => {
    try {
      await axios.delete(url, {
        withCredentials: true,
      });
      if (type === 'UI') {
        dispatch(actions.logoutUser);
        window.location.reload();
      }
    } catch (error) {
      if (type === 'UI') {
        dispatch(actions.userErrors(error));
      }
    }
  };
  requestingCard();
};

export default fetchingDelete;
