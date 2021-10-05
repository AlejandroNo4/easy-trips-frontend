import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import fetchingPatch from '../api/fetchingPatch';
import fetchingDelete from '../api/fetchingDelete';
import FormUpdateUser from './FormUpdateUser';
import fetchingGet from '../api/fetchingGet';
import GoHomeBtn from './GoHomeBtn';

const UpdateAccount = () => {
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
    if (userState.user.logged_in === false) navigate('/');
  }, []);

  const initialStateForm = {
    username: '',
    email: '',
    image: [],
  };
  const [form, updateInput] = useState(initialStateForm);

  const handleChange = (e) => {
    if (e.target.files) updateInput({ ...form, [e.target.name]: e.target.files[0] });
    else updateInput({ ...form, [e.target.name]: e.target.value });
  };

  const handleDelete = () => {
    const url = `/users/${userState.user.id}`;
    const type = 'UI';
    fetchingDelete({
      dispatch,
      url,
      type,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, image } = form;

    const formData = {
      user: {
        username,
        email,
        image,
      },
    };
    const url = `/users/${userState.user.id}`;
    const type = 'UI';
    fetchingPatch({
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
      <FormUpdateUser handleChange={handleChange} handleSubmit={handleSubmit} />
      <GoHomeBtn />
      {userState.user.admin === false && (
        <button type="button" onClick={handleDelete}>
          Delete account
        </button>
      )}
    </div>
  );
};

export default UpdateAccount;
