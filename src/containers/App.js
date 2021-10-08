import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';
import fetchingGet from '../api/fetchingGet';
import UserPanel from '../components/UserPanel';
import NoSession from '../components/NoSession';

function App() {
  const userState = useSelector((state) => state.UIReducer);
  const [showPanel, updatePanel] = useState('d-none');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const url = 'logged_in';
    const type = 'UI';
    fetchingGet({
      dispatch,
      url,
      type,
    });
  }, []);

  const loginHandler = () => {
    navigate('/login');
  };

  const signUpHandler = () => {
    navigate('/sign-up');
  };

  const homeHandler = () => {
    navigate('/');
  };

  const toggleUserPanel = () => {
    if (showPanel === 'd-none') {
      updatePanel('d-block');
    } else {
      updatePanel('d-none');
    }
  };

  if (userState.loading === true) {
    return (
      <div className="d-flex flex-column justify-center align-center w-100 h-100">
        <h1 className="session-title">Loading...</h1>
      </div>
    );
  }
  if (userState.user.logged_in === true && userState.loading === false) {
    return (
      <div className="trips-user-container d-flex" data-testid="app">
        <UserPanel display={showPanel} />
        <div>
          <div className="nav-bar d-flex space-between">
            <FontAwesomeIcon icon={faBars} onClick={toggleUserPanel} />
            <h1>Easy Trips</h1>
            <FontAwesomeIcon icon={faHome} onClick={homeHandler} />
          </div>
        </div>
        <Outlet />
      </div>
    );
  }
  return (
    <NoSession loginHandler={loginHandler} signUpHandler={signUpHandler} />
  );
}

export default App;
