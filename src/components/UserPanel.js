import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';
import fetchingDelete from '../api/fetchingDelete';

const UserPanel = ({ display }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    const url = 'logout';
    const type = 'UI';
    fetchingDelete({
      dispatch,
      url,
      type,
    });
  };

  const updateHandler = () => {
    navigate('/update-account');
  };

  const createHandler = () => {
    navigate('/add-trip');
  };

  const favHandler = () => {
    navigate('/favorites');
  };

  const userState = useSelector((state) => state.UIReducer);
  const { user } = userState;
  const { username, email } = user;

  return (
    <div className={`user-panel ${display}`}>
      <div className="user-info">
        <img src={user.user_thumnail} alt={username} className="thumnail bm-10" />
        <div>
          <p className="bm-10 bold-text">{username}</p>
          <p className="bm-10 light-text">{email}</p>
        </div>
      </div>
      <div>
        <div>
          <button
            className="btn-user-panel"
            onClick={favHandler}
            type="button"
          >
            Show favorites
          </button>
          <button
            className="btn-user-panel"
            onClick={updateHandler}
            type="button"
          >
            Update Account
          </button>
          {userState.user.admin === true && (
            <button
              className="btn-user-panel"
              onClick={createHandler}
              type="button"
            >
              Create New Trip
            </button>
          )}
        </div>
        <div className="user-bottom-section">
          <div className="user-line" />
          <button
            className="btn-user-panel"
            onClick={logoutHandler}
            type="button"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

UserPanel.propTypes = {
  display: PropTypes.string.isRequired,
};

export default UserPanel;
