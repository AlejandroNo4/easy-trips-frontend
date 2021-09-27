import axios from './axios';
import * as actions from '../actions';

const fetchingGet = ({ dispatch, url, type }) => {
  if (type === 'UI') {
    dispatch(actions.loadingUser);
  }
  const requestingCard = async () => {
    try {
      const request = await axios.get(url, {
        withCredentials: true,
      });
      const { data } = request;
      if (type === 'UI') {
        console.log(data);
        dispatch(actions.loginUser(data));
      }
    } catch (error) {
      console.log(error);
      if (type === 'UI') {
        dispatch(actions.userErrors(error));
      }
    }
  };
  requestingCard();
};

export default fetchingGet;
