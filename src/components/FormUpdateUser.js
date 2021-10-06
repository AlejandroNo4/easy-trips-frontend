import React from 'react';
import PropTypes from 'prop-types';

const FormUpdateUser = ({ handleChange, handleSubmit }) => (
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
      type="file"
      id="image"
      name="image"
      accept="image/png, image/jpeg"
      onChange={handleChange}
    />
    <button type="submit">Update Account</button>
  </form>
);

FormUpdateUser.defaultProps = {
  handleChange: null,
  handleSubmit: null,
};

FormUpdateUser.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default FormUpdateUser;
