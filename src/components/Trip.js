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
    <div className="trip-container">
      <div className="trip-sub-container">
        <div className="relative">
          <Carousel
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
          >
            {images}
          </Carousel>
          <div className="trip-stats d-flex space-between align-center">
            <div className="d-flex align-center">
              <img
                alt="creator"
                src="https://alleasytrips.herokuapp.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBXdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6c02e10eeeac07ef37d83af59abb3befcb9ca54b/EasyTrips%20(2).png"
                className="thumnail rm-10"
              />
              <div>
                <p className="bold-text bm-5">Easy trips</p>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
            </div>
            <div>
              <p>{price}</p>
              <p className="light-text">per person</p>
            </div>
          </div>
        </div>
        <div className="info-trip-container">
          <p className="bold-text bm-10 text-center">{trip.destination}</p>
          <p className="bold-text">Hotel:</p>
          <p className="bm-10">{trip.hotel}</p>
          <p className="bold-text">Days:</p>
          <p className="bm-10">{trip.days}</p>
          <p className="bold-text">Type:</p>
          <p className="bm-10">{trip.trip_type}</p>
          <p className="bold-text">Description:</p>
          <p className="bm-10">{trip.description}</p>
        </div>
        <div className="w-100 d-flex justify-center">
          {userState.user.admin === true && (
            <button
              onClick={updateTripHandler}
              type="button"
              className="update-btn"
            >
              Update Trip
            </button>
          )}
        </div>
        <FavBtn id={tripId} />
      </div>
    </div>
  );
};

export default Trip;
