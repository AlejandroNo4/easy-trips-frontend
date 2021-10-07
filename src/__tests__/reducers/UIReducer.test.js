import UIReducer from "../../reducers/UIReducer";

describe("UI reducer", () => {
  it("Return the state in case the action is not one of the listed ones", () => {
    const newState = UIReducer(undefined, {});
    expect(newState).toEqual({
      logged_in: false,
      user: {},
      message: "",
      errors: [],
      loading: false,
    });
  });

  it("Changes the loading state to true", () => {
    const loadingState = UIReducer(undefined, { type: "LOADING_USER" });
    expect(loadingState.loading).toEqual(true);
    expect(loadingState.loading).not.toEqual(false)
  });

  it("Store the user info when login", () => {
    const userState = UIReducer(undefined, {
      type: "LOGIN_USER",
      payload: {
        user: { name: "expected user result" },
      },
    });
    expect(userState.user.name).toEqual("expected user result");
    expect(userState.logged_in).toEqual(true);
    expect(userState.loading).toEqual(false);
    expect(userState.loading).not.toEqual(true);
    expect(userState.logged_in).not.toEqual(false);
    expect(userState.user.name).not.toEqual("");
  });

  it("Store the message when updated", () => {
    const userState = UIReducer(undefined, {
      type: 'USER_UPDATED',
      payload: {
        msg: 'expected msg',
      },
    });
    expect(userState.message).toEqual("expected msg");
    expect(userState.loading).toEqual(false);
    expect(userState.loading).not.toEqual(true);
    expect(userState.user.name).not.toEqual("");
  });

  it("Return initial state when logged out", () => {
    const userState = UIReducer(undefined, { type: 'LOGOUT_USER' });
    expect(userState).toEqual({
      logged_in: false,
      user: {},
      message: "",
      errors: [],
      loading: false,
    });
  });

  it("Return the same state already modified", () => {
    const userState = UIReducer(undefined, {
      type: "LOGIN_USER",
      payload: {
        user: { name: "expected user result" },
      },
    })
    UIReducer(undefined, { type: 'FAV_DELETED' });
    expect(userState.user.name).toEqual("expected user result");
    expect(userState.loading).toEqual(false);
    expect(userState.loading).not.toEqual(true);
    expect(userState.user.name).not.toEqual("");
  });

  it("Return the user errors when necessary", () => {
    const userState = UIReducer(undefined, {
      type: 'USER_ERRORS',
      payload: {
        errors: 'expected error',
      },
    })
    expect(userState.errors).toEqual('expected error');
    expect(userState.loading).toEqual(false);
    expect(userState.loading).not.toEqual(true);
    expect(userState.errors).not.toEqual("");
  });

  it("Clean all stored errors", () => {
    let userState = UIReducer(undefined, {
      type: 'USER_ERRORS',
      payload: {
        errors: 'expected error',
      },
    })
    userState = UIReducer(undefined, { type: 'CLEAN_ERRORS' });
    expect(userState.errors).toEqual([]);
    expect(userState.loading).toEqual(false);
    expect(userState.loading).not.toEqual(true);
    expect(userState.errors).not.toEqual('expected error');
  });

  it("Clean all stored errors", () => {
    let userState = UIReducer(undefined, {
      type: 'USER_ERRORS',
      payload: {
        errors: 'expected error',
      },
    })
    userState = UIReducer(undefined, { type: 'CLEAN_ERRORS' });
    expect(userState.errors).toEqual([]);
    expect(userState.loading).toEqual(false);
    expect(userState.loading).not.toEqual(true);
    expect(userState.errors).not.toEqual('expected error');
  });
});
