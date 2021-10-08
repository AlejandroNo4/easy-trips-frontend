import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const TripPreview = ({ trip }) => {
  const imgSrc = trip.trip_images[0].image;
  const price = `$${trip.price}`;
  return (
    <li className="card-container">
      <Link to={`/trips/${trip.id}`}>
        <img src={imgSrc} alt={trip.destination} className="img-preview" data-testid="img-preview" />
        <div className="description-card d-flex space-between">
          <div>
            <p className="bm-5" data-testid="destination-preview">{trip.destination}</p>
            <div className="d-flex stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
          <div>
            <p className="bm-5" data-testid="price-preview">{price}</p>
            <p className="light-text">per person</p>
          </div>
        </div>
      </Link>
    </li>
  );
};

TripPreview.propTypes = {
  trip: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default TripPreview;
