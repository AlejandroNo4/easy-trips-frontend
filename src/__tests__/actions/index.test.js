import * as action from '../../actions/index';

describe('Actions file', () => {
  it('returns the expected result action: loadingUser', () => {
    expect(action.loadingUser()).toEqual({ type: 'LOADING_USER' });
    expect(action.loadingUser()).not.toEqual({ type: '' });
  });

  it('returns the expected result action: loadingTrip', () => {
    expect(action.loadingTrip()).toEqual({ type: 'LOADING_TRIP' });
    expect(action.loadingTrip()).not.toEqual({ type: '' });
  });

  it('returns the expected result action: loginUser', () => {
    expect(action.loginUser({ name: 'Alf' })).toEqual({
      type: 'LOGIN_USER',
      payload: {
        user: { name: 'Alf' },
      },
    });
    expect(action.loginUser()).not.toEqual({ type: '' });
  });

  it('returns the expected message action: userUpdated', () => {
    expect(action.userUpdated('expected')).toEqual({
      type: 'USER_UPDATED',
      payload: {
        msg: 'expected',
      },
    });
    expect(action.userUpdated()).not.toEqual({ type: '' });
  });

  it('returns the expected result action: logoutUser', () => {
    expect(action.logoutUser()).toEqual({ type: 'LOGOUT_USER' });
    expect(action.logoutUser()).not.toEqual({ type: '' });
  });

  it('returns the expected result action: favDeleted', () => {
    expect(action.favDeleted()).toEqual({ type: 'FAV_DELETED' });
    expect(action.favDeleted()).not.toEqual({ type: '' });
  });

  it('returns the expected error action: userErrors', () => {
    expect(action.userErrors('expected')).toEqual({
      type: 'USER_ERRORS',
      payload: {
        errors: 'expected',
      },
    });
    expect(action.userErrors()).not.toEqual({ type: '' });
  });

  it('returns the expected result action: tripSuccess', () => {
    expect(action.tripSuccess({ destination: 'Argentina' })).toEqual({
      type: 'TRIP_SUCCESS',
      payload: {
        trip: { destination: 'Argentina' },
      },
    });
    expect(action.tripSuccess()).not.toEqual({ type: '' });
  });

  it('returns the expected result action: allTripsSuccess', () => {
    expect(action.allTripsSuccess({ destination: 'Argentina' })).toEqual({
      type: 'ALL_TRIPS_SUCCESS',
      payload: {
        trips: { destination: 'Argentina' },
      },
    });
    expect(action.allTripsSuccess()).not.toEqual({ type: '' });
  });

  it('returns the expected result action: tripUpdated', () => {
    expect(action.tripUpdated({ destination: 'Argentina' })).toEqual({
      type: 'TRIP_UPDATED',
      payload: {
        trip: { destination: 'Argentina' },
      },
    });
    expect(action.tripUpdated()).not.toEqual({ type: '' });
  });

  it('returns the expected result action: tripErrors', () => {
    expect(action.tripErrors('Expected error')).toEqual({
      type: 'TRIP_ERRORS',
      payload: {
        errors: 'Expected error',
      },
    });
    expect(action.tripErrors()).not.toEqual({ type: '' });
  });

  it('returns the expected result action: tripDeleted', () => {
    expect(action.tripDeleted()).toEqual({ type: 'TRIP_DELETED' });
    expect(action.tripDeleted()).not.toEqual({ type: '' });
  });

  it('returns the expected result action: cleanupTrip', () => {
    expect(action.cleanupTrip()).toEqual({ type: 'CLEAN_TRIP' });
    expect(action.cleanupTrip()).not.toEqual({ type: '' });
  });

  it('returns the expected result action: cleanupErrors', () => {
    expect(action.cleanupErrors()).toEqual({ type: 'CLEAN_ERRORS' });
    expect(action.cleanupErrors()).not.toEqual({ type: '' });
  });
});
