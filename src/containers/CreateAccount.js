import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import fetchingPost from '../api/fetchingPost';
import FormSignUp from '../components/FormSignUp';
import fetchingGet from '../api/fetchingGet';
import { cleanupErrors } from '../actions';

const CreateAccount = () => {
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
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    image: {},
  };
  const [form, updateInput] = useState(initialStateForm);

  const handleChange = (e) => {
    if (e.target.files) updateInput({ ...form, [e.target.name]: e.target.files[0] });
    else updateInput({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      username, email, password, passwordConfirmation, image,
    } = form;

    const formData = {
      user: {
        username,
        email: email.toLowerCase(),
        password,
        password_confirmation: passwordConfirmation,
        image,
      },
    };
    const url = '/users';
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
    const keys = Object.keys(userState.errors);
    errors = keys.map((key) => `${key}: ${userState.errors[key]}`).join('\n');
  }

  return (
    <div className="bg-no-session d-flex justify-center flex-column align-center no-session-container" data-testid="sign-up-container">
      <p className="error-msg" data-testid="sign-up-errs">{errors}</p>
      <h1 className="session-title">Sign up</h1>
      <p className="session-description text-center">
        Please, create an account.
      </p>
      <FormSignUp
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        imgSelected={form.image}
      />
      <Link to="/" className="link-back">
        Go back
      </Link>
    </div>
  );
};

export default CreateAccount;
