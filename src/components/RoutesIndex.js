import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateAccount from '../containers/CreateAccount';
import Login from '../containers/Login';
import TripManagement from '../containers/TripManagement';
import UpdateAccount from '../containers/UpdateAccount';
import App from '../containers/App';
import TripList from './TripList';
import NotFound from './NotFound';
import Trip from './Trip';
import FavoriteList from './FavoriteList';

const RoutesIndex = () => (
  <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<TripList />} />
          <Route path="/trips/:tripId" element={<Trip />} />
          <Route path="/favorites" element={<FavoriteList />} />
        </Route>
        <Route path="/sign-up" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-trip" element={<TripManagement />} />
        <Route path="/update-account" element={<UpdateAccount />} />
        <Route path="/update-trip/:tripId" element={<TripManagement />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default RoutesIndex;
