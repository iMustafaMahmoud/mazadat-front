export const login =
  (dispatch: any) => (uid: any, token: any, expirationDate: any) => {
    dispatch({ type: "LOGIN" });
    setUserId(dispatch, uid);
    setToken(dispatch, token);

    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: uid,
        token: token,
      })
    );
  };

export const logout = (dispatch: any) => () => {
  dispatch({ type: "LOGOUT" });
  setUserId(dispatch, null);
  setToken(dispatch, null);
  localStorage.removeItem("userData");
};

export const setUserId = (dispatch: any, uid: any) => {
  dispatch({ type: "SET_USER_ID", payload: uid });
};

export const setToken = (dispatch: any, token: any) => {
  dispatch({ type: "SET_TOKEN", payload: token });
};
