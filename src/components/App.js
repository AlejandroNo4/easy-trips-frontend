import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';
import fetchingGet from '../api/fetchingGet';
import UserPanel from './UserPanel';

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
      updatePanel('d-flex');
    } else {
      updatePanel('d-none');
    }
  };

  if (userState.loading === true) {
    return <h1>------LOADING USER...------</h1>;
  }
  if (userState.user.logged_in === true && userState.loading === false) {
    return (
      <div className="d-flex">
        <UserPanel display={showPanel} />
        <div>
          <div className="nav-bar-mobile d-flex space-between">
            <FontAwesomeIcon icon={faBars} onClick={toggleUserPanel} />
            <h1 className="main-title">Easy Trips</h1>
            <FontAwesomeIcon icon={faHome} onClick={homeHandler} />
          </div>
        </div>
        <Outlet />
      </div>
    );
  }
  return (
    <div className="app">
      <h1>Connected!</h1>
      <h2>Status: NOT logged in</h2>
      <button onClick={loginHandler} type="button">
        ---Login---
      </button>
      <button onClick={signUpHandler} type="button">
        ---Sign Up---
      </button>
    </div>
  );
}

export default App;
