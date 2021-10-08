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
import UpdateAccount from '../../containers/UpdateAccount';

afterEach(cleanup);

const renderWithRedux = (component) => ({
  ...render(
    <Provider store={store}>
      <BrowserRouter>{component}</BrowserRouter>
    </Provider>,
  ),
});

describe('UpdateAccount Component', () => {
  beforeEach(() => {
    axiosMock.get.mockResolvedValueOnce({ data: { logged_in: true } });
    renderWithRedux(<UpdateAccount />);
  });

  it('renders with Redux', async () => {
    const update = await screen.findByTestId('update-container');
    expect(update).toBeVisible();
  });

  it('matches the snapshot', async () => {
    const update = await screen.findByTestId('update-container');
    expect(update).toMatchSnapshot();
  });

  it('Renders username and tranfers the value while typing', async () => {
    const username = await screen.findByPlaceholderText('Username');
    expect(username).toBeVisible();
    userEvent.type(username, 'Mario');
    expect(username).toHaveValue('Mario');
    expect(username).not.toHaveValue('');
  });

  it('Renders email and tranfers the value while typing', async () => {
    const email = await screen.findByPlaceholderText('Email Adress');
    expect(email).toBeVisible();
    userEvent.type(email, 'anemail@mail.com');
    expect(email).toHaveValue('anemail@mail.com');
    expect(email).not.toHaveValue('');
  });

  it('Renders File Form input', async () => {
    const fileInput = await screen.findByTestId('image-update');
    expect(fileInput).toBeVisible();
  });

  it('Cannot render and cannot render data wothout input typed', async () => {
    axiosMock.patch.mockResolvedValueOnce({ data: {} });
    const username = await screen.findByPlaceholderText('Username');
    const email = await screen.findByPlaceholderText('Email Adress');
    const button = await screen.findByTestId('btn-update');
    expect(username).toBeVisible();
    expect(email).toBeVisible();
    expect(button).toBeVisible();
    await act(async () => {
      fireEvent.click(button);
    });
    const message = await screen.findByTestId('update-errs');
    expect(message).toBeVisible();
  });

  it('Makes a call to fetching action when filling the fields', async () => {
    axiosMock.patch.mockResolvedValueOnce({ data: { message: 'succesfully updated' } });
    const username = await screen.findByPlaceholderText('Username');
    const email = await screen.findByPlaceholderText('Email Adress');
    const button = await screen.findByTestId('btn-update');
    expect(username).toBeVisible();
    expect(email).toBeVisible();
    expect(button).toBeVisible();
    userEvent.type(username, 'Mario');
    userEvent.type(email, 'anemail@mail.com');
    await act(async () => {
      fireEvent.click(button);
    });
    expect(axiosMock.patch).toHaveBeenCalledTimes(1);
    expect(axiosMock.patch).not.toHaveBeenCalledTimes(0);
  });
});
