import React from 'react';
import PropTypes from 'prop-types';

const FormSignUp = ({ handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <input
      required
      type="text"
      id="username"
      name="username"
      placeholder="Username"
      onChange={handleChange}
    />
    <input
      required
      type="email"
      id="email"
      name="email"
      placeholder="Email Adress"
      onChange={handleChange}
    />
    <input
      required
      type="password"
      id="password"
      name="password"
      placeholder="password"
      onChange={handleChange}
    />
    <input
      required
      type="password"
      id="passwordConfirmation"
      name="passwordConfirmation"
      placeholder="Password Confirmation"
      onChange={handleChange}
    />
    <input
      type="file"
      id="image"
      name="image"
      accept="image/png, image/jpeg"
      onChange={handleChange}
    />
    <button type="submit">Create Account</button>
  </form>
);

FormSignUp.defaultProps = {
  handleChange: null,
  handleSubmit: null,
};

FormSignUp.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default FormSignUp;
