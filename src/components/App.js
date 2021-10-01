import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import fetchingGet from '../api/fetchingGet';
import fetchingDelete from '../api/fetchingDelete';
import TripList from './TripList';
import UserPanel from './UserPanel';

function App() {
  const userState = useSelector((state) => state.UIReducer);
  const [showPanel, updatePanel] = useState('d-none');
  const history = useHistory();
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

  const logoutHandler = () => {
    const url = 'logout';
    const type = 'UI';
    fetchingDelete({
      dispatch,
      url,
      type,
    });
  };

  const loginHandler = () => {
    history.push('/login');
  };

  const signUpHandler = () => {
    history.push('/sign-up');
  };

  const createHandler = () => {
    history.push('/add-trip');
  };

  const updateHandler = () => {
    history.push('/update-account');
  };

  const toggleUserPanel = () => {
    if (showPanel === 'd-none') {
      updatePanel('d-flex');
    } else {
      updatePanel('d-none');
    }
  };

  if (userState.loading === true) {
    return <h1>------LOADING...------</h1>;
  }
  if (userState.user.logged_in === true && userState.loading === false) {
    return (
      <div className="d-flex">
        <UserPanel
          logoutHandler={logoutHandler}
          updateHandler={updateHandler}
          createHandler={createHandler}
          display={showPanel}
        />
        <div>
          <div className="nav-bar-mobile d-flex space-between">
            <FontAwesomeIcon icon={faBars} onClick={toggleUserPanel} />
            <h1 className="main-title">Easy Trips</h1>
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
        <TripList />
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
