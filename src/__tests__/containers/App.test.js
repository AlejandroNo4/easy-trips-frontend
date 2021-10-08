import React from 'react';
import { Provider } from 'react-redux';
import {
  render,
  screen,
  cleanup,
  fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import axiosMock from 'axios';
import { BrowserRouter } from 'react-router-dom';
import store from '../../store';
import App from '../../containers/App';

afterEach(cleanup);

const renderWithRedux = (component) => ({
  ...render(
    <Provider store={store}>
      <BrowserRouter>{component}</BrowserRouter>
    </Provider>,
  ),
});

describe('App Component', () => {
  beforeEach(() => {
    axiosMock.get.mockResolvedValueOnce({
      data: {
        favorites: [],
        logged_in: true,
        username: 'Test Expected Name',
        admin: true,
        email: 'test@mail.com',
        user_thumnail: [''],
        id: 1,
      },
    });
    renderWithRedux(<App />);
  });

  it('renders with Redux', async () => {
    const appComponent = await screen.findByTestId('app');
    expect(appComponent).toBeVisible();
  });

  it('matches the snapshot', async () => {
    const appComponent = await screen.findByTestId('app');
    expect(appComponent).toMatchSnapshot();
  });

  it('has the expected username', async () => {
    const appComponent = await screen.findByTestId('username');
    expect(appComponent).toHaveTextContent('Test Expected Name');
    expect(appComponent).not.toHaveTextContent('');
  });

  it('has the expected email', async () => {
    const appComponent = await screen.findByTestId('user-email');
    expect(appComponent).toHaveTextContent('test@mail.com');
    expect(appComponent).not.toHaveTextContent('');
  });

  it('has the expected thumnail when there is no url on the fetched data', async () => {
    const appComponent = await screen.findByTestId('user-thumnail');
    const noImg = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';
    expect(appComponent).toHaveProperty('src', noImg);
  });

  it('Renders email and tranfers the value while typing', async () => {
    const button = await screen.findByTestId('fav-btn');
    expect(button).toBeVisible();
    fireEvent.click(button);
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).not.toHaveBeenCalledTimes(0);
  });

  it('Renders email and tranfers the value while typing', async () => {
    const button = await screen.findByTestId('logout');
    expect(button).toBeVisible();
    fireEvent.click(button);
    axiosMock.delete.mockResolvedValueOnce({ data: { message: 'logged out' } });
    expect(axiosMock.delete).toHaveBeenCalledTimes(1);
    expect(axiosMock.delete).not.toHaveBeenCalledTimes(0);
  });
});
