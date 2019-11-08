// syncrhonous action creators - state is updated immediately
export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER", // matches the case in the reducer
    user // shorthand version of payload: user
  };
};

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  };
};

// asynchronous action creators -- requests to the backend are required first
export const login = credentials => {
  console.log("testing", credentials);
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
      .then(res => res.json())
      .then(user => {
        if (user.error) {
          alert(user.error);
        } else {
          dispatch(setCurrentUser(user)); // dispatch action creator
        }
      })
      .catch(console.log);
  };
};

export const logout = () => {
  return dispatch => {
    dispatch(clearCurrentUser());
    return fetch("http://localhost:3001/api/v1/logout", {
      credentials: "include",
      method: "DELETE"
    });
  };
};

export const getCurrentUser = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/get_current_user", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(user => {
        if (user.error) {
          alert(user.error);
        } else {
          dispatch(setCurrentUser(user)); // dispatch action creator
        }
      })
      .catch(console.log);
  };
};
