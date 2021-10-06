import React from 'react';
import PropTypes from 'prop-types';

const NoSession = ({ loginHandler, signUpHandler }) => {
  console.log('yay');
  return (
    <div className="bg-no-session d-flex justify-center align-center no-session-container">
      <div className="session-options d-flex space-between align-center flex-column">
        <h1 className="session-title">Not logged in</h1>
        <p>Please</p>
        <button onClick={loginHandler} type="button" className="session-btn white">
          Login
        </button>
        <p>or</p>
        <button onClick={signUpHandler} type="button" className="session-btn white">
          Sign Up
        </button>
      </div>
      <div className="bg-opacity" />
    </div>
  );
};

NoSession.defaultProps = {
  loginHandler: null,
  signUpHandler: null,
};

NoSession.propTypes = {
  loginHandler: PropTypes.func,
  signUpHandler: PropTypes.func,
};

export default NoSession;
