import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import fetchingPost from '../api/fetchingPost';
import fetchingDelete from '../api/fetchingDelete';

function FavBtn({ id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userState = useSelector((state) => state.UIReducer);
  const idNumber = parseInt(id, 10);

  const addFav = () => {
    const formData = {
      trip_id: id,
    };
    const url = 'favorites';
    const type = 'fav';
    fetchingPost({
      dispatch,
      url,
      formData,
      navigate,
      type,
    });
  };

  const removeFav = () => {
    const url = `favorites/${id}`;
    const type = 'fav';
    fetchingDelete({
      dispatch,
      url,
      type,
    });
  };

  if (userState.user !== undefined) {
    const favorites = userState.user.trips;
    const isFav = favorites.some((i) => i.id === idNumber);
    return (
      <div>
        {isFav === true && (
          <button type="button" className="fav-btn bold-text white" onClick={removeFav}>
            Remove from favorites
          </button>
        )}
        {isFav === false && (
          <button type="button" className="fav-btn bold-text white" onClick={addFav}>
            Add to favorites
          </button>
        )}
      </div>
    );
  }
}

FavBtn.propTypes = {
  id: PropTypes.string.isRequired,
};

export default FavBtn;
