import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import FormSignUp from './FormSignUp';

const CreateAccount = () => {
  const initialStateForm = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    image: [],
  };
  const [form, updateInput] = useState(initialStateForm);

  const handleChange = (e) => {
    if (e.target.files) {
      // const reader = new FileReader();
      // reader.readAsDataURL(e.target.files[0]);

      // reader.onload = () => {
      updateInput({ ...form, [e.target.name]: URL.createObjectURL(e.target.files[0]) });
      // };
    } else {
      updateInput({ ...form, [e.target.name]: e.target.value });
    }
  };

  console.log(form);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      username, email, password, passwordConfirmation, image,
    } = form;
    // const fd = new FormData();
    // fd.append("user[0]['username']", username);
    // fd.append("user[0]['email']", email);
    // fd.append("user[0]['password']", password);
    // fd.append("user[0]['password_confirmation']", passwordConfirmation);
    // fd.append("user[0]['image']", image);

    const dataUserCreate = {
      user: {
        username,
        email,
        password,
        password_confirmation: passwordConfirmation,
        image,
      },
    };

    try {
      const request = await axios({
        method: 'post',
        url: 'https://alleasytrips.herokuapp.com/api/v1/users',
        data: dataUserCreate,
        withCredentials: true,
      });
      console.log(request);
        <Redirect to="/" />;
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <FormSignUp handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
};

export default CreateAccount;
