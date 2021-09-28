import axios from './axios';
import * as actions from '../actions';

const fetchingGet = ({ dispatch, url, type }) => {
  if (type === 'UI') {
    dispatch(actions.loadingUser());
  } else if (type === 'trips') {
    dispatch(actions.loadingTrip());
  }
  const requestingCard = async () => {
    try {
      const request = await axios.get(url, {
        withCredentials: true,
      });
      const { data } = request;
      if (type === 'UI') {
        dispatch(actions.loginUser(data));
      } else if (type === 'trips') {
        console.log(data);
        dispatch(actions.allTripsSuccess(data));
      }
    } catch (error) {
      if (type === 'UI') {
        dispatch(actions.userErrors(error));
      } else if (type === 'trips') {
        dispatch(actions.tripErrors(error));
      }
    }
  };
  requestingCard();
};

export default fetchingGet;
