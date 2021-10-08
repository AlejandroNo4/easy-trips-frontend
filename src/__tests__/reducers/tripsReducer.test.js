import tripsReducer from '../../reducers/tripsReducer';

describe('Tris reducer', () => {
  it('Return the state in case the action is not one of the listed ones', () => {
    const newState = tripsReducer(undefined, {});
    expect(newState).toEqual({
      loading: false,
      trip_data: {},
      all_trips_data: [],
      errors: '',
    });
  });

  it('Changes the loading state to true', () => {
    const loadingState = tripsReducer(undefined, { type: 'LOADING_TRIP' });
    expect(loadingState.loading).toEqual(true);
    expect(loadingState.loading).not.toEqual(false);
  });

  it('Store the trip info when login', () => {
    const tripState = tripsReducer(undefined, {
      type: 'TRIP_SUCCESS',
      payload: {
        trip: { destination: 'Mexico' },
      },
    });
    expect(tripState.trip_data.destination).toEqual('Mexico');
    expect(tripState.loading).toEqual(false);
    expect(tripState.loading).not.toEqual(true);
    expect(tripState.trip_data.destination).not.toEqual('');
  });

  it('Cleans all data from stored trips', () => {
    let tripState = tripsReducer(undefined, {
      type: 'TRIP_SUCCESS',
      payload: {
        trip: { destination: 'Mexico' },
      },
    });
    tripState = tripsReducer(undefined, { type: 'CLEAN_TRIP' });
    expect(tripState.trip_data.destination).toEqual(undefined);
    expect(tripState.loading).toEqual(false);
    expect(tripState.loading).not.toEqual(true);
    expect(tripState.trip_data.destination).not.toEqual('Mexico');
  });

  it('Saves updated trip data', () => {
    let tripState = tripsReducer(undefined, {
      type: 'TRIP_SUCCESS',
      payload: {
        trip: { destination: 'Mexico' },
      },
    });
    tripState = tripsReducer(undefined, {
      type: 'TRIP_UPDATED',
      payload: {
        trip: { destination: 'Paris' },
      },
    });
    expect(tripState.trip_data.destination).toEqual('Paris');
    expect(tripState.loading).toEqual(false);
    expect(tripState.loading).not.toEqual(true);
    expect(tripState.trip_data.destination).not.toEqual('Mexico');
  });

  it('Store multiple trips in an array', () => {
    const tripState = tripsReducer(undefined, {
      type: 'ALL_TRIPS_SUCCESS',
      payload: {
        trips: [{ destination: 'Monaco' }, { destination: 'Moscow' }],
      },
    });
    expect(tripState.all_trips_data[0].destination).toEqual('Monaco');
    expect(tripState.all_trips_data.length).toEqual(2);
    expect(tripState.loading).toEqual(false);
    expect(tripState.all_trips_data.length).not.toEqual(0);
    expect(tripState.loading).not.toEqual(true);
    expect(tripState.all_trips_data[0].destinatio).not.toEqual('');
  });

  it('Deletes a stored trip', () => {
    let tripState = tripsReducer(undefined, {
      type: 'TRIP_SUCCESS',
      payload: {
        trip: { destination: 'Mexico' },
      },
    });
    tripState = tripsReducer(undefined, { type: 'TRIP_DELETED' });
    expect(tripState.trip_data).toEqual({});
    expect(tripState.loading).toEqual(false);
    expect(tripState.loading).not.toEqual(true);
    expect(tripState.trip_data.destination).not.toEqual('Mexico');
  });

  it('Return the user errors when necessary', () => {
    const tripState = tripsReducer(undefined, {
      type: 'TRIP_ERRORS',
      payload: {
        errors: 'expected error',
      },
    });
    expect(tripState.errors).toEqual('expected error');
    expect(tripState.loading).toEqual(false);
    expect(tripState.loading).not.toEqual(true);
    expect(tripState.errors).not.toEqual('');
  });
});
