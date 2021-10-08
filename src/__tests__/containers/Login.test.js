import React from 'react';
import { Provider } from 'react-redux';
import {
  render, screen, cleanup, fireEvent, act,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import axiosMock from 'axios';
import { BrowserRouter } from 'react-router-dom';
import store from '../../store';
import Login from '../../containers/Login';

afterEach(cleanup);

const renderWithRedux = (component) => ({
  ...render(
    <Provider store={store}>
      <BrowserRouter>{component}</BrowserRouter>
    </Provider>,
  ),
});

describe('Login Component', () => {
  beforeEach(()=> {
    renderWithRedux(<Login />);
  });

  // const login = () => {
  //   axiosMock.post.mockResolvedValueOnce({
  //     data: {
  //       favorites: [],
  //       logged_in: true,
  //       status: "created",
  //       user: {
  //         admin: true,
  //         created_at: "2021-09-29T17:59:36.049Z",
  //         email: "admin@mail.com",
  //         id: 1,
  //         password_digest:
  //           "$2a$12$fqSV1w456/Z9SPxF8Nba.uClBy3IDmoYlF60/JKqrDgx547PqOlxC",
  //         updated_at: "2021-10-01T22:11:34.121Z",
  //       },
  //     },
  //   });
  // };

  it('renders with Redux', async () => {
    const loginTitle = await screen.findByTestId('login-text');
    expect(loginTitle).toBeVisible();
  });

  it('matches the snapshot', async () => {
    const loginTitle = await screen.findByTestId('login-text');
    expect(loginTitle).toMatchSnapshot();
  });

  it('Renders email input', async () => {
    const email = await screen.findByPlaceholderText('Email Adress');
    expect(email).toBeVisible();
    userEvent.type(email, 'anemail@mail.com')
    expect(email).toHaveValue('anemail@mail.com')
    expect(email).not.toHaveValue('')
  });

  it('Renders password input', async () => {
    const password = await screen.findByPlaceholderText('password');
    expect(password).toBeVisible();
    userEvent.type(password, '123456')
    expect(password).toHaveValue('123456')
    expect(password).not.toHaveValue('')
  });

  it('Cannot render and cannot render data wothout input typed', async () => {
    axiosMock.post.mockResolvedValueOnce({data: {}})
    const password = await screen.findByPlaceholderText('password');
    const email = await screen.findByPlaceholderText('Email Adress');
    const button = await screen.findByTestId('login-btn');
    expect(password).toBeVisible();
    expect(email).toBeVisible();
    expect(button).toBeVisible();
    await act( async () => {
      fireEvent.click(button);
    });
    const message = await screen.findByTestId('errors-msg')
    expect(message).toBeVisible();
  });

  it('Makes a call to fetching action when filling the fields', async () => {
    axiosMock.post.mockResolvedValueOnce({data: {logged_in: false}})
    const password = await screen.findByPlaceholderText('password');
    const email = await screen.findByPlaceholderText('Email Adress');
    const button = await screen.findByTestId('login-btn');
    expect(password).toBeVisible();
    expect(email).toBeVisible();
    expect(button).toBeVisible();
    userEvent.type(email, 'anemail@mail.com')
    userEvent.type(password, '123456')
    fireEvent.click(button)
    expect(axiosMock.post).toHaveBeenCalledTimes(1)
    expect(axiosMock.post).not.toHaveBeenCalledTimes(0)
    await screen.findByTestId('login-btn');
  });
});

