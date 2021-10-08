import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import fetchingPatch from '../api/fetchingPatch';
import fetchingDelete from '../api/fetchingDelete';
import FormUpdateUser from '../components/FormUpdateUser';
import fetchingGet from '../api/fetchingGet';

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
    image: {},
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
    navigate('/');
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
    <div className="bg-no-session d-flex justify-center flex-column align-center no-session-container" data-testid="update-container">
      <p className="error-msg" data-testid="update-errs">{errors}</p>
      <h1 className="session-title">Update account</h1>
      <p className="session-description text-center">
        Please, fll out this form.
      </p>
      <FormUpdateUser
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        imgSelected={form.image}
      />
      {userState.user.admin === false && (
        <button type="button" onClick={handleDelete} className="delete-account-btn">
          Delete account
        </button>
      )}
      <Link to="/" className="link-back">
        Go back
      </Link>
    </div>
  );
};

export default UpdateAccount;
