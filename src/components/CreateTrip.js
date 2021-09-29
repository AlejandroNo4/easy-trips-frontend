import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import fetchingPost from '../api/fetchingPost';
import FormTrip from './FormTrip';
import fetchingGet from '../api/fetchingGet';

const CreateTrip = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.UIReducer);
  const history = useHistory();

  useEffect(() => {
    const url = 'logged_in';
    const type = 'UI';
    fetchingGet({
      dispatch,
      url,
      type,
    });
    if (userState.user.logged_in === true && userState.user.admin === false) history.push('/');
  }, []);

  const initialStateForm = {
    destination: '',
    price: 0,
    description: '',
    days: 0,
    hotel: '',
    tripType: '',
    images: [],
  };
  const [form, updateInput] = useState(initialStateForm);

  const handleChange = (e) => {
    if (e.target.files) updateInput({ ...form, images: Object.values(e.target.files) });
    else updateInput({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      destination,
      price,
      description,
      days,
      hotel,
      tripType,
      images,
    } = form;

    const formData = {
      trip: {
        destination,
        price,
        description,
        days,
        hotel,
        trip_type: tripType,
        images,
      },
    };
    const url = '/trips';
    const type = 'trip';
    fetchingPost({
      dispatch,
      url,
      formData,
      history,
      type,
    });
  };

  if (userState.loading === true) {
    return <h1>------LOADING...------</h1>;
  }
  return (
    <div>
      <FormTrip handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
};

export default CreateTrip;
