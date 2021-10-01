import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import fetchingGet from '../api/fetchingGet';
import fetchingDelete from '../api/fetchingDelete';
import UserPanel from './UserPanel';
import Trip from './Trip';

const TripItemContainer = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userState = useSelector((state) => state.UIReducer);
  const [showPanel, updatePanel] = useState('d-none');
  const {
    params: { tripId },
  } = match;

  useEffect(() => {
    const url = 'logged_in';
    const type = 'UI';
    fetchingGet({
      dispatch,
      url,
      type,
    });
    if (userState.user.logged_in === false) history.push('/');
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
    return <h1>------LOADING USER...------</h1>;
  }
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
          <h1 className="main-title">Trip</h1>
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      <Trip id={tripId} />
    </div>
  );
};

TripItemContainer.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default TripItemContainer;
