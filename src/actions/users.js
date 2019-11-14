// synchronous actions creators
export const setAllUsers = users => {
  return {
    type: "SET_ALL_USERS", // matches the case in the reducer
    users // shorthand version of payload: user
  };
};

// asynchronous actions creators
export const getAllUsers = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/users", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(users => {
        if (users.error) {
          alert(users.error);
        } else {
          dispatch(setAllUsers(users.data)); // dispatch action creator
        }
      })
      .catch(console.log);
  };
};
