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
import TripManagement from '../../containers/TripManagement';

afterEach(cleanup);

const renderWithRedux = (component) => ({
  ...render(
    <Provider store={store}>
      <BrowserRouter>{component}</BrowserRouter>
    </Provider>,
  ),
});

describe('TripManagement Component', () => {
  beforeEach(() => {
    renderWithRedux(<TripManagement />);
  });

  it('renders with Redux', async () => {
    const manageTitle = await screen.findByTestId('trip-manage');
    expect(manageTitle).toBeVisible();
  });

  it('matches the snapshot', async () => {
    const manageTitle = await screen.findByTestId('trip-manage');
    expect(manageTitle).toMatchSnapshot();
  });

  it('Renders destination and tranfers the value while typing', async () => {
    const destination = await screen.findByPlaceholderText('destination');
    expect(destination).toBeVisible();
    userEvent.type(destination, 'Brazil');
    expect(destination).toHaveProperty('required', true);
    expect(destination).not.toHaveProperty('required', false);
    expect(destination).toHaveValue('Brazil');
    expect(destination).not.toHaveValue('');
  });

  it('Renders price input, it must to be a number', async () => {
    const price = await screen.findByTestId('input-price');
    expect(price).toBeVisible();
    userEvent.type(price, '150.00');
    expect(price).toHaveValue(150.00);
    expect(price).toHaveProperty('required', true);
    expect(price).not.toHaveProperty('required', false);
    expect(price).not.toHaveValue('150.00');
    expect(price).not.toHaveValue('');
  });

  it('Renders description input', async () => {
    const description = await screen.findByTestId('input-description');
    expect(description).toBeVisible();
    userEvent.type(description, 'Expected description');
    expect(description).toHaveValue('Expected description');
    expect(description).toHaveProperty('required', true);
    expect(description).not.toHaveProperty('required', false);
    expect(description).not.toHaveValue('');
  });

  it('Renders days input, it must to be a number', async () => {
    const numberOfDays = await screen.findByTestId('input-days');
    expect(numberOfDays).toBeVisible();
    userEvent.type(numberOfDays, '14');
    expect(numberOfDays).toHaveValue(14);
    expect(numberOfDays).toHaveProperty('required', true);
    expect(numberOfDays).not.toHaveProperty('required', false);
    expect(numberOfDays).not.toHaveValue('14');
    expect(numberOfDays).not.toHaveValue('');
  });

  it('Renders hotel and tranfers the value while typing', async () => {
    const hotel = await screen.findByPlaceholderText('Hotel');
    expect(hotel).toBeVisible();
    userEvent.type(hotel, 'Hilton');
    expect(hotel).toHaveValue('Hilton');
    expect(hotel).toHaveProperty('required', true);
    expect(hotel).not.toHaveProperty('required', false);
    expect(hotel).not.toHaveValue('');
  });

  it('Renders trip type select input', async () => {
    const tripType = await screen.findByTestId('input-select');
    expect(tripType).toBeVisible();
    expect(tripType).toHaveValue('City');
    expect(tripType).not.toHaveValue('Beach');
  });

  it('Renders File Form input', async () => {
    const fileInput = await screen.findByTestId('input-images');
    expect(fileInput).toHaveProperty('required', true);
    expect(fileInput).not.toHaveProperty('required', false);
    expect(fileInput).toBeVisible();
  });

  it('Cannot render and cannot render data wothout input typed', async () => {
    axiosMock.post.mockResolvedValueOnce({ data: { trip: 'successfully created!' } });
    const destination = await screen.findByPlaceholderText('destination');
    const price = await screen.findByTestId('input-price');
    const description = await screen.findByTestId('input-description');
    const numberOfDays = await screen.findByTestId('input-days');
    const hotel = await screen.findByPlaceholderText('Hotel');
    const tripType = await screen.findByTestId('input-select');
    const button = await screen.findByTestId('submit-trip');
    expect(destination).toBeVisible();
    expect(price).toBeVisible();
    expect(description).toBeVisible();
    expect(numberOfDays).toBeVisible();
    expect(hotel).toBeVisible();
    expect(tripType).toBeVisible();
    userEvent.type(destination, 'Toronto');
    userEvent.type(price, '123.33');
    userEvent.type(description, 'A description');
    userEvent.type(numberOfDays, '12');
    userEvent.type(hotel, 'One');
    await act(async () => {
      fireEvent.click(button);
    });
    expect(axiosMock.post).toHaveBeenCalledTimes(1);
    expect(axiosMock.post).not.toHaveBeenCalledTimes(0);
  });
});
