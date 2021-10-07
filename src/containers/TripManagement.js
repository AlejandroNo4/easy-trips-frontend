import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from 'react-router';
import fetchingPost from '../api/fetchingPost';
import FormTrip from '../components/FormTrip';
import fetchingGet from '../api/fetchingGet';
import fetchingDelete from '../api/fetchingDelete';
import fetchingPatch from '../api/fetchingPatch';

const TripManagement = () => {
  const { tripId } = useParams();
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
      destination, price, description, days, hotel, tripType, images,
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
    let url = '/trips';
    const type = 'trip';
    if (!tripId) {
      fetchingPost({
        dispatch,
        url,
        formData,
        navigate,
        type,
      });
    } else {
      url = `/trips/${tripId}`;
      fetchingPatch({
        dispatch,
        url,
        formData,
        navigate,
        type,
      });
    }
  };

  const handleDelete = () => {
    const url = `/trips/${tripId}`;
    const type = 'trip';
    fetchingDelete({
      dispatch,
      url,
      type,
    });
    navigate('/');
  };

  const title = tripId === undefined ? 'Create Trip' : 'Update Trip';

  if (tripState.loading === true) {
    return (
      <div className="d-flex flex-column justify-center align-center">
        <h1 className="session-title">Loading trip...</h1>
      </div>
    );
  }
  return (
    <div className="trip-management d-flex flex-column">
      <h1 className="session-title">{title}</h1>
      <FormTrip
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        imgSelected={form.image}
      />
      {tripId !== undefined && (
        <button type="button" className="delete-trip-btn" onClick={handleDelete}>
          Delete
        </button>
      )}
      <Link to="/" className="link-back-create-trip">
        Go back
      </Link>
    </div>
  );
};

export default TripManagement;
