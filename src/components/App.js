import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import fetchingGet from '../api/fetchingGet';
import fetchingDelete from '../api/fetchingDelete';

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
      history,
    });
  };

  const toLogin = () => {
    history.push('/login');
  };

  const toSignUp = () => {
    history.push('/signUp');
  };

  console.log(userState);
  if (userState.loading === true) {
    return <h1>------LOADING...------</h1>;
  }
  if (userState.user.logged_in === true && userState.loading === false) {
    return (
      <div>
        <h1>-----LOGGED IN-------</h1>
        <img
          src={userState.user.user_thumnail}
          alt="imeime"
          className="card-image"
        />
        <button onClick={logoutHandler} type="button">LOG OUT</button>
      </div>
    );
  }
  return (
    <div className="App">
      <h1>Connected!</h1>
      <h2>Status: NOT logged in</h2>
      <button onClick={toLogin} type="button">---Login---</button>
      <button onClick={toSignUp} type="button">---Sign Up---</button>
    </div>
  );
}

export default App;
