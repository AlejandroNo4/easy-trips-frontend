import PropTypes from 'prop-types';

const TripPreview = ({ trip }) => {
  const imgSrc = trip.trip_images[0].image;
  return (
    <li>
      <h1>{trip.destination}</h1>
      <p>{trip.price}</p>
      <p>{trip.description}</p>
      <img src={imgSrc} alt={trip.destination} />
    </li>
  );
};

TripPreview.propTypes = {
  trip: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default TripPreview;
