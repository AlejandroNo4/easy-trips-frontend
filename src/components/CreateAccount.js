import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router";
import { serialize } from "object-to-formdata";
import FormSignUp from "./FormSignUp";

const CreateAccount = () => {
  const initialStateForm = {
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    image: [],
  };
  const [form, updateInput] = useState(initialStateForm);

  const handleChange = (e) => {
    if (e.target.files)
      updateInput({ ...form, [e.target.name]: e.target.files[0] });
    else updateInput({ ...form, [e.target.name]: e.target.value });
  };

  console.log(form);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, passwordConfirmation, image } = form;

    const dataUserCreate = {
      user: {
        username,
        email,
        password,
        password_confirmation: passwordConfirmation,
        image,
      },
    };

    const formData = serialize(dataUserCreate);

    try {
      console.log(formData);
      const request = await axios.post(
        "https://alleasytrips.herokuapp.com/api/v1/users",
        formData,
        { withCredentials: true }
      );
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
