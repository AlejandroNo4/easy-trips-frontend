import PropTypes from 'prop-types';

const FormLogin = ({ handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
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
    <button type="submit">Log In</button>
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
