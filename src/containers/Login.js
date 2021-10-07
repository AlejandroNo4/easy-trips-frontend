import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import fetchingPost from '../api/fetchingPost';
import FormLogin from '../components/FormLogin';
import fetchingGet from '../api/fetchingGet';
import { cleanupErrors } from '../actions';

const Login = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.UIReducer);
  const navigate = useNavigate();

  useEffect(() => {
    const url = 'logged_in';
    const type = 'UI';
    fetchingGet({
      dispatch,
      url,
      type,
    });
    if (userState.user.logged_in === true) navigate('/');
    return () => {
      dispatch(cleanupErrors());
    };
  }, []);

  const initialStateForm = {
    email: '',
    password: '',
  };
  const [form, updateInput] = useState(initialStateForm);

  const handleChange = (e) => {
    if (e.target.files) updateInput({ ...form, [e.target.name]: e.target.files[0] });
    else updateInput({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = form;

    const formData = {
      user: {
        email: email.toLowerCase(),
        password,
      },
    };
    const url = '/sessions';
    const type = 'UI';
    fetchingPost({
      dispatch,
      url,
      formData,
      navigate,
      type,
    });
  };

  if (userState.loading === true) {
    return (
      <div className="d-flex flex-column justify-center align-center w-100">
        <h1 className="session-title">Loading...</h1>
      </div>
    );
  }

  let errors;

  if (userState.loading === false) {
    errors = userState.errors.message;
  }
  return (
    <div className="bg-no-session d-flex justify-center flex-column align-center no-session-container">
      <p className="error-msg">{errors}</p>
      <h1 className="session-title">Login</h1>
      <p className="session-description text-center">
        Hello there! please Login and start looking for the perfect trip.
      </p>
      <FormLogin handleChange={handleChange} handleSubmit={handleSubmit} />
      <Link to="/" className="link-back">
        Go back
      </Link>
    </div>
  );
};

export default Login;
