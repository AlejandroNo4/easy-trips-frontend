import PropTypes from 'prop-types';

const FormTrip = ({ handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <input
      required
      type="text"
      id="destination"
      name="destination"
      placeholder="destination"
      onChange={handleChange}
    />
    <p>Price: </p>
    <input
      required
      type="number"
      id="price"
      name="price"
      min="1.00"
      max="10000.00"
      step="0.01"
      onChange={handleChange}
    />
    <p>Description: </p>
    <textarea
      required
      id="description"
      name="description"
      rows="10"
      cols="50"
      onChange={handleChange}
    />
    <p>Days: </p>
    <input
      required
      type="number"
      id="days"
      name="days"
      min="1"
      max="10000"
      step="1"
      onChange={handleChange}
    />
    <p>Hotel: </p>
    <input
      required
      type="text"
      id="hotel"
      name="hotel"
      placeholder="Hotel"
      onChange={handleChange}
    />
    <p>Transportation: </p>
    <select name="tripType" id="tripType">
      <option value="bus">Bus</option>
      <option value="plane">Plane</option>
      <option value="ship">Ship</option>
    </select>
    <p>Images: </p>
    <input
      type="file"
      multiple
      id="images"
      name="images"
      accept="image/png, image/jpeg"
      onChange={handleChange}
    />
    <button type="submit">Create Trip</button>
  </form>
);

FormTrip.defaultProps = {
  handleChange: null,
  handleSubmit: null,
};

FormTrip.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default FormTrip;
