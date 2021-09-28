import { serialize } from 'object-to-formdata';
import axios from './axios';
import * as actions from '../actions';

const fetchingPost = ({
  dispatch, url, formData, history, type,
}) => {
  if (type === 'UI') {
    dispatch(actions.loadingUser());
  } else if (type === 'trip') {
    dispatch();
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
        history.push('/');
      }
    } catch (error) {
      if (type === 'UI') {
        dispatch(actions.userErrors(error));
      }
    }
  };
  requestingCard();
};

export default fetchingPost;
