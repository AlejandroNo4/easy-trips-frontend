import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import fetchingPost from '../api/fetchingPost';
import FormLogin from './FormLogin';
import fetchingGet from '../api/fetchingGet';

const Login = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.UIReducer);
  const history = useHistory();

  useEffect(() => {
    const url = 'logged_in';
    const type = 'UI';
    fetchingGet({
      dispatch,
      url,
      type,
    });
    if (userState.user.logged_in === true) history.push('/');
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
    const {
      email, password,
    } = form;

    const formData = {
      user: {
        email,
        password,
      },
    };
    const url = '/sessions';
    const type = 'UI';
    fetchingPost({
      dispatch,
      url,
      formData,
      history,
      type,
    });
  };

  console.log(form);

  if (userState.loading === true) {
    return <h1>------LOADING...------</h1>;
  }
  return (
    <div>
      <FormLogin handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
};

export default Login;
