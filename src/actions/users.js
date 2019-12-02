// synchronous actions creators
import toast from "toasted-notes";
import "toasted-notes/src/styles.css";
export const setAllUsers = users => {
  return {
    type: "SET_ALL_USERS", // matches the case in the reducer
    users // shorthand version of payload: user
  };
};

export const clearAllUsers = () => {
  return {
    type: "CLEAR_ALL_USERS"
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
          // alert(users.error);
          toast.notify(users.error, {
            position: "bottom-right"
          });
        } else {
          dispatch(setAllUsers(users.data)); // dispatch action creator
        }
      })
      .catch(console.log);
  };
};
