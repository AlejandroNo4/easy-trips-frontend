import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';

const FormSignUp = ({ handleChange, handleSubmit, imgSelected }) => {
  const imageTitle = imgSelected === undefined || imgSelected.name === undefined ? 'Select Image' : imgSelected.name;

  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column align-center">
      <input
        required
        type="text"
        id="username"
        name="username"
        placeholder="Username"
        onChange={handleChange}
        className="form-input"
      />
      <input
        required
        type="email"
        id="email"
        name="email"
        placeholder="Email Adress"
        onChange={handleChange}
        className="form-input"
      />
      <input
        required
        type="password"
        id="password"
        name="password"
        placeholder="password"
        onChange={handleChange}
        className="form-input"
      />
      <input
        required
        type="password"
        id="passwordConfirmation"
        name="passwordConfirmation"
        placeholder="Password Confirmation"
        onChange={handleChange}
        className="form-input"
      />
      <label htmlFor="image" className="form-input">
        {imageTitle}
        <FontAwesomeIcon icon={faFileUpload} className="lm-10" />
        <input
          type="file"
          id="image"
          name="image"
          accept="image/png, image/jpeg"
          onChange={handleChange}
          className="input-file"
        />
      </label>
      <button type="submit" className="session-btn white">
        Submit
      </button>
    </form>
  );
};

FormSignUp.defaultProps = {
  imgSelected: undefined,
};

FormSignUp.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  imgSelected: PropTypes.objectOf(PropTypes.any),
};

export default FormSignUp;
