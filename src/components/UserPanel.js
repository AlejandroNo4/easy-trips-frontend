import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const UserPanel = ({
  logoutHandler, updateHandler, createHandler, display,
}) => {
  const userState = useSelector((state) => state.UIReducer);
  const { user } = userState;
  const { username, email } = user;

  return (
    <div className={`user-panel flex-column ${display}`}>
      <div className="user-info-container d-flex flex-column">
        <img src={user.user_thumnail} alt={username} className="thumnail" />
        <div>
          <p className="username">{username}</p>
          <p className="small-gray-text">{email}</p>
        </div>
      </div>
      <div className="buttons-container d-flex flex-column justify-between">
        <div>
          <button type="button" className="user-info-btn">
            Show favorites
          </button>
          <button onClick={updateHandler} type="button" className="user-info-btn">
            Update Account
          </button>
          {userState.user.admin === true && (
            <button onClick={createHandler} type="button" className="user-info-btn">
              Create New Trip
            </button>
          )}
        </div>
        <button onClick={logoutHandler} type="button" className="user-info-btn logout-btn">
          Logout
        </button>
      </div>
    </div>
  );
};

UserPanel.propTypes = {
  logoutHandler: PropTypes.func.isRequired,
  updateHandler: PropTypes.func.isRequired,
  createHandler: PropTypes.func.isRequired,
  display: PropTypes.string.isRequired,
};

export default UserPanel;
