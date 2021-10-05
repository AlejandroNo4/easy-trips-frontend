import axios from './axios';
import * as actions from '../actions';

const fetchingDelete = ({
  dispatch, url, type,
}) => {
  if (type === 'UI' || type === 'fav') {
    dispatch(actions.loadingUser());
  } else if (type === 'trip') {
    dispatch(actions.loadingTrip());
  }
  const fetchDelete = async () => {
    try {
      await axios.delete(url, {
        withCredentials: true,
      });
      if (type === 'UI') {
        dispatch(actions.logoutUser());
      } else if (type === 'fav' || type === 'trip') {
        window.location.reload();
      }
    } catch (error) {
      if (type === 'UI') {
        dispatch(actions.userErrors(error));
      }
    }
  };
  fetchDelete();
};

export default fetchingDelete;
