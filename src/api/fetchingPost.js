import { serialize } from 'object-to-formdata';
import axios from './axios';
import * as actions from '../actions';

const fetchingPost = ({
  dispatch, url, formData, navigate, type,
}) => {
  if (type === 'UI' || type === 'fav') {
    dispatch(actions.loadingUser());
  } else if (type === 'trip') {
    dispatch(actions.loadingTrip());
  }
  const dataToSend = serialize(formData);
  const requestingCard = async () => {
    try {
      const request = await axios.post(url, dataToSend, {
        withCredentials: true,
      });
      const { data } = request;
      if (type === 'UI') {
        dispatch(actions.loginUser(data));
        navigate('/');
      } else if (type === 'trip') {
        navigate('/');
      } else if (type === 'fav') {
        window.location.reload();
      }
    } catch (error) {
      if (type === 'UI') {
        dispatch(actions.userErrors(error));
      } else if (type === 'trip') {
        dispatch(actions.tripErrors(error));
      }
    }
  };
  requestingCard();
};

export default fetchingPost;
