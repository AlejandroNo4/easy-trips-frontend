import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const UserPanel = ({ logoutHandler, updateHandler }) => {
  const userState = useSelector((state) => state.UIReducer);
  const { user } = userState;
  const { username, email } = user;

  return (
    <div>
      <img src={user.user_thumnail} alt={username} />
      <p>{username}</p>
      <p>{email}</p>
      <button onClick={logoutHandler} type="button">
        LOG OUT
      </button>
      <button onClick={updateHandler} type="button">
        UPDATE ACCOUNT
      </button>
    </div>
  );
};

UserPanel.propTypes = {
  logoutHandler: PropTypes.func.isRequired,
  updateHandler: PropTypes.func.isRequired,
};

export default UserPanel;
