import axios from './axios';
import * as actions from '../actions';

const fetchingDelete = ({
  dispatch, url, type, history,
}) => {
  if (type === 'UI') {
    dispatch(actions.loadingUser);
  }
  const requestingCard = async () => {
    try {
      const request = await axios.delete(url, {
        withCredentials: true,
      });
      const { data } = request;
      if (type === 'UI') {
        console.log(data);
        dispatch(actions.logoutUser);
        history.push('/');
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

export default fetchingDelete;
