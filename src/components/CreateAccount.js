import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import fetchingPost from '../api/fetchingPost';
import FormSignUp from './FormSignUp';
import fetchingGet from '../api/fetchingGet';

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
  }, []);

  const initialStateForm = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    image: [],
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
    return <h1>------LOADING...------</h1>;
  }
  return (
    <div>
      <FormSignUp handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
};

export default CreateAccount;
