import React from 'react';
import { Provider } from 'react-redux';
import {
  render, screen, cleanup, fireEvent, act,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import axiosMock from 'axios';
import { BrowserRouter } from 'react-router-dom';
import store from '../../store';
import CreateAccount from '../../containers/CreateAccount';

afterEach(cleanup);

const renderWithRedux = (component) => ({
  ...render(
    <Provider store={store}>
      <BrowserRouter>{component}</BrowserRouter>
    </Provider>,
  ),
});

describe('CreateAccount Component', () => {
  beforeEach(() => {
    renderWithRedux(<CreateAccount />);
  });

  it('renders with Redux', async () => {
    const signUpTitle = await screen.findByTestId('sign-up-container');
    expect(signUpTitle).toBeVisible();
  });

  it('matches the snapshot', async () => {
    const signUpTitle = await screen.findByTestId('sign-up-container');
    expect(signUpTitle).toMatchSnapshot();
  });

  it('Renders username and tranfers the value while typing', async () => {
    const username = await screen.findByPlaceholderText('Username');
    expect(username).toBeVisible();
    userEvent.type(username, 'Mario');
    expect(username).toHaveProperty('required', true);
    expect(username).not.toHaveProperty('required', false);
    expect(username).toHaveValue('Mario');
    expect(username).not.toHaveValue('');
  });

  it('Renders email and tranfers the value while typing', async () => {
    const email = await screen.findByPlaceholderText('Email Adress');
    expect(email).toBeVisible();
    userEvent.type(email, 'anemail@mail.com');
    expect(email).toHaveValue('anemail@mail.com');
    expect(email).toHaveProperty('required', true);
    expect(email).not.toHaveProperty('required', false);
    expect(email).not.toHaveValue('');
  });

  it('Renders Password input', async () => {
    const password = await screen.findByPlaceholderText('password');
    expect(password).toBeVisible();
    userEvent.type(password, '123456');
    expect(password).toHaveValue('123456');
    expect(password).toHaveProperty('required', true);
    expect(password).not.toHaveProperty('required', false);
    expect(password).not.toHaveValue('');
  });

  it('Renders Password Confirmation input', async () => {
    const passwordConfirmation = await screen.findByPlaceholderText('Password Confirmation');
    expect(passwordConfirmation).toBeVisible();
    userEvent.type(passwordConfirmation, '123456');
    expect(passwordConfirmation).toHaveValue('123456');
    expect(passwordConfirmation).toHaveProperty('required', true);
    expect(passwordConfirmation).not.toHaveProperty('required', false);
    expect(passwordConfirmation).not.toHaveValue('');
  });

  it('Renders File Form input', async () => {
    const fileInput = await screen.findByTestId('sign-up-container');
    expect(fileInput).toBeVisible();
  });

  it('Cannot render and cannot render data wothout input typed', async () => {
    axiosMock.post.mockResolvedValueOnce({ data: {} });
    const username = await screen.findByPlaceholderText('Username');
    const passwordConfirmation = await screen.findByPlaceholderText('Password Confirmation');
    const password = await screen.findByPlaceholderText('password');
    const email = await screen.findByPlaceholderText('Email Adress');
    const button = await screen.findByTestId('sign-up-btn');
    expect(username).toBeVisible();
    expect(password).toBeVisible();
    expect(passwordConfirmation).toBeVisible();
    expect(email).toBeVisible();
    expect(button).toBeVisible();
    await act(async () => {
      fireEvent.click(button);
    });
    const message = await screen.findByTestId('sign-up-errs');
    expect(message).toBeVisible();
  });

  it('Makes a call to fetching action when filling the fields', async () => {
    axiosMock.post.mockResolvedValueOnce({ data: { logged_in: false } });
    const username = await screen.findByPlaceholderText('Username');
    const passwordConfirmation = await screen.findByPlaceholderText('Password Confirmation');
    const password = await screen.findByPlaceholderText('password');
    const email = await screen.findByPlaceholderText('Email Adress');
    const button = await screen.findByTestId('sign-up-btn');
    expect(username).toBeVisible();
    expect(password).toBeVisible();
    expect(passwordConfirmation).toBeVisible();
    expect(email).toBeVisible();
    expect(button).toBeVisible();
    userEvent.type(username, 'Mario');
    userEvent.type(email, 'anemail@mail.com');
    userEvent.type(password, '123456');
    userEvent.type(passwordConfirmation, '123456');
    await act(async () => {
      fireEvent.click(button);
    });
    expect(axiosMock.post).toHaveBeenCalledTimes(1);
    expect(axiosMock.post).not.toHaveBeenCalledTimes(0);
  });
});
