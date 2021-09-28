import PropTypes from 'prop-types';

const TripPreview = ({ trip }) => (
  <li>
    <h1>{trip.destination}</h1>
    <p>{trip.price}</p>
    <p>{trip.description}</p>
  </li>
);

TripPreview.propTypes = {
  trip: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default TripPreview;
