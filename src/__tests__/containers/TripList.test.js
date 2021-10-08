import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import axiosMock from 'axios';
import { BrowserRouter } from 'react-router-dom';
import store from '../../store';
import TripList from '../../components/TripList';

afterEach(cleanup);

const renderWithRedux = (component) => ({
  ...render(
    <Provider store={store}>
      <BrowserRouter>{component}</BrowserRouter>
    </Provider>,
  ),
});

describe('TripList Component', () => {
  beforeEach(() => {
    axiosMock.get.mockResolvedValueOnce({
      data: [
        {
          id: 1,
          destination: 'Paris',
          price: 123.43,
          description: 'Expected description',
          trip_type: 'City',
          hotel: 'One',
          days: 2,
          trip_images: [{ image: 'https://test-first-img-url.com' }],
        },
        {
          id: 2,
          destination: 'Los Angeles',
          price: 163.32,
          description: 'Expected second description',
          trip_type: 'City',
          hotel: 'Hampton',
          days: 3,
          trip_images: [{ image: 'https://test-second-img-url.com' }],
        },
      ],
    });
    renderWithRedux(<TripList />);
  });

  it('renders with Redux', async () => {
    const TripListComponent = await screen.findByTestId('trips-container');
    expect(TripListComponent).toBeVisible();
  });

  it('matches the snapshot', async () => {
    const TripListComponent = await screen.findByTestId('trips-container');
    expect(TripListComponent).toMatchSnapshot();
  });

  it('renders with Redux', async () => {
    const TripListComponent = await screen.findByTestId('trips-container');
    expect(TripListComponent).toBeVisible();
    expect(TripListComponent.childNodes.length).toBe(2);
    expect(TripListComponent.childNodes.length).not.toBe(0);
  });

  it('renders with Redux', async () => {
    const imgPreview = await screen.findAllByTestId('img-preview');
    expect(imgPreview.length).toBe(2);
    expect(imgPreview[0]).toBeVisible();
    expect(imgPreview[1]).toBeVisible();
    expect(imgPreview[0]).toHaveProperty('src', 'https://test-first-img-url.com/');
    expect(imgPreview[1]).toHaveProperty('src', 'https://test-second-img-url.com/');
    expect(imgPreview[0]).not.toHaveProperty('src', '');
    expect(imgPreview[1]).not.toHaveProperty('src', '');
  });

  it('renders with Redux', async () => {
    const destinationPrev = await screen.findAllByTestId('destination-preview');
    expect(destinationPrev.length).toBe(2);
    expect(destinationPrev[0]).toBeVisible();
    expect(destinationPrev[1]).toBeVisible();
    expect(destinationPrev[0]).toHaveTextContent('Paris');
    expect(destinationPrev[1]).toHaveTextContent('Los Angeles');
    expect(destinationPrev[0]).not.toHaveTextContent('');
    expect(destinationPrev[1]).not.toHaveTextContent('');
  });

  it('renders with Redux', async () => {
    const pricePrev = await screen.findAllByTestId('price-preview');
    expect(pricePrev.length).toBe(2);
    expect(pricePrev[0]).toBeVisible();
    expect(pricePrev[1]).toBeVisible();
    expect(pricePrev[0]).toHaveTextContent('$123.43');
    expect(pricePrev[1]).toHaveTextContent('$163.32');
    expect(pricePrev[0]).not.toHaveTextContent('');
    expect(pricePrev[1]).not.toHaveTextContent('');
  });
});
