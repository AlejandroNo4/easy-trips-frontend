import React from 'react';
import PropTypes from 'prop-types';

const FormLogin = ({ handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit} className="d-flex flex-column align-center">
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
    <button type="submit" className="session-btn white" data-testid="login-btn">Log In</button>
  </form>
);

FormLogin.defaultProps = {
  handleChange: null,
  handleSubmit: null,
};

FormLogin.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default FormLogin;
