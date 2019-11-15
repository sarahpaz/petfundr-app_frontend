import { resetLoginForm } from "./loginForm";
import { getAllPets } from "./pets.js";
import { resetSignupForm } from "./signupForm";
import { getAllUsers, clearAllUsers } from "./users";
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
export const login = (credentials, history) => {
  // console.log("here are the creds", credentials);
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
          dispatch(getAllPets());
          dispatch(resetLoginForm());
          dispatch(getAllUsers());
          history.push("/");
        }
      })
      .catch(console.log);
  };
};

export const logout = () => {
  return dispatch => {
    dispatch(clearCurrentUser()); // dispatch clears the front end, fetch clears the back end (logout route)
    dispatch(clearAllUsers());
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
          dispatch(setCurrentUser(user));
          dispatch(getAllPets());
          dispatch(getAllUsers()); // dispatch action creator
        }
      })
      .catch(console.log);
  };
};

export const signup = (credentials, history) => {
  return dispatch => {
    const userInfo = {
      user: credentials
    };
    return fetch("http://localhost:3001/api/v1/signup", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
      .then(res => res.json())
      .then(user => {
        if (user.error) {
          alert(user.error);
        } else {
          dispatch(setCurrentUser(user.data));
          dispatch(resetSignupForm());
          dispatch(getAllPets());
          history.push("/");
        }
      })
      .catch(console.log);
  };
};
