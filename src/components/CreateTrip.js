import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import fetchingPost from '../api/fetchingPost';
import FormTrip from './FormTrip';
import fetchingGet from '../api/fetchingGet';

const CreateTrip = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.UIReducer);
  const tripState = useSelector((state) => state.tripsReducer);
  const navigate = useNavigate();

  useEffect(() => {
    const url = 'logged_in';
    const type = 'UI';
    fetchingGet({
      dispatch,
      url,
      type,
    });
    if (userState.user.logged_in === true && userState.user.admin === false) navigate('/');
  }, []);

  const initialStateForm = {
    destination: '',
    price: 0,
    description: '',
    days: 0,
    hotel: '',
    tripType: 'City',
    images: [],
  };
  const [form, updateInput] = useState(initialStateForm);

  const handleChange = (e) => {
    if (e.target.files) updateInput({ ...form, images: Object.values(e.target.files) });
    else updateInput({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
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
      navigate,
      type,
    });
  };

  if (tripState.loading === true) {
    return <h1>------CREATING TRIP...------</h1>;
  }
  return (
    <div>
      <FormTrip handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
};

export default CreateTrip;
