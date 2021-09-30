import { serialize } from 'object-to-formdata';
import axios from './axios';
import * as actions from '../actions';

const fetchingPatch = ({
  dispatch, url, formData, history, type,
}) => {
  if (type === 'UI') {
    dispatch(actions.loadingUser());
  } else if (type === 'trip') {
    dispatch(actions.loadingTrip);
  }
  const dataToSend = serialize(formData);
  const requestingCard = async () => {
    try {
      const request = await axios.patch(url, dataToSend, {
        withCredentials: true,
      });
      const { data } = request;
      if (type === 'UI') {
        dispatch(actions.userUpdated(data));
        history.push('/');
      } else if (type === 'trip') {
        history.push('/');
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

export default fetchingPatch;
