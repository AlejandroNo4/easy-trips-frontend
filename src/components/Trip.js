import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
import fetchingGet from '../api/fetchingGet';
import { cleanupTrip } from '../actions';
import FavBtn from './FavBtn';

const Trip = () => {
  const { tripId } = useParams();
  const tripsState = useSelector((state) => state.tripsReducer);
  const userState = useSelector((state) => state.UIReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const trip = tripsState.trip_data;

  useEffect(() => {
    const url = `trips/${tripId}`;
    const type = 'trip';
    fetchingGet({
      dispatch,
      url,
      type,
    });
    return () => {
      dispatch(cleanupTrip());
    };
  }, []);

  const updateTripHandler = () => {
    navigate(`/update-trip/${tripId}`);
  };

  if (tripsState.loading === true || trip.trip_images === undefined) {
    return <h1>✈️🚌🛳----LOADING TRIPS</h1>;
  }

  const images = trip.trip_images.map((i) => (
    <div key={trip.id}>
      <img src={i.image} alt={trip.destination} className="image-trip" />
    </div>
  ));

  const price = `$${trip.price}`;

  return (
    <div className="trip">
      <div className="trip-info">
        <Carousel showThumbs={false} showIndicators={false} showStatus={false}>
          {images}
        </Carousel>
        <div className="trip-creator d-flex align-center space-between">
          <div className="d-flex align-center">
            <img
              alt="creator"
              src="https://alleasytrips.herokuapp.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBXdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6c02e10eeeac07ef37d83af59abb3befcb9ca54b/EasyTrips%20(2).png"
              className="thumnail"
            />
            <div className="l-15">
              <p className="bold-white">Easy trips</p>
              <div className="d-flex stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
          </div>
          <div>
            <p className="bold-white">{price}</p>
            <p className="small-gray-text">per person</p>
          </div>
        </div>
      </div>
      <div className="details">
        <p className="bold text-center b-15">{trip.destination}</p>
        <p className="bold">Hotel:</p>
        <p className="b-15">{trip.hotel}</p>
        <p className="bold">Days:</p>
        <p className="b-15">{trip.days}</p>
        <p className="bold">Type:</p>
        <p className="b-15">{trip.trip_type}</p>
        <p className="bold">Description:</p>
        <p className="b-15">{trip.description}</p>
      </div>
      {userState.user.admin === true && (
      <button
        onClick={updateTripHandler}
        type="button"
        className="user-info-btn"
      >
        Update Trip
      </button>
      )}
      <FavBtn id={tripId} />
    </div>
  );
};

export default Trip;
