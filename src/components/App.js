import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import fetchingGet from '../api/fetchingGet';
import fetchingDelete from '../api/fetchingDelete';
import TripList from './TripList';
import UserPanel from './UserPanel';

function App() {
  const userState = useSelector((state) => state.UIReducer);
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

  if (userState.loading === true) {
    return <h1>------LOADING...------</h1>;
  }
  if (userState.user.logged_in === true && userState.loading === false) {
    return (
      <div>
        <h1>-----LOGGED IN-------</h1>
        <UserPanel logoutHandler={logoutHandler} updateHandler={updateHandler} />
        {userState.user.admin === true && <button onClick={createHandler} type="button">Create a new trip</button>}
        <TripList />
      </div>
    );
  }
  return (
    <div className="App">
      <h1>Connected!</h1>
      <h2>Status: NOT logged in</h2>
      <button onClick={loginHandler} type="button">---Login---</button>
      <button onClick={signUpHandler} type="button">---Sign Up---</button>
    </div>
  );
}

export default App;
