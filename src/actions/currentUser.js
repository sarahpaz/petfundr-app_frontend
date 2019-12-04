import { resetLoginForm } from "./loginForm";
import { getAllPets, clearAllPets } from "./pets.js";
import { resetSignupForm } from "./signupForm";
// import { getAllUsers, clearAllUsers } from "./users";
import { getAllDonations, clearDonations } from "./donations";
import toast from "toasted-notes";
import "toasted-notes/src/styles.css";

// syncrhonous action creators - state is updated immediately
export const setCurrentUser = user => {
  console.log(user);
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
        // console.log(user);
        if (user.error) {
          // alert(user.error);
          toast.notify(user.error, {
            position: "bottom-right"
          });
        } else {
          dispatch(setCurrentUser(user)); // dispatch action creator
          dispatch(getAllPets());
          dispatch(resetLoginForm());
          // dispatch(getAllUsers());
          dispatch(getAllDonations());
        }
      })
      .catch(console.log);
  };
};

export const logout = () => {
  return dispatch => {
    dispatch(clearCurrentUser()); // dispatch clears the front end, fetch clears the back end (logout route)
    // dispatch(clearAllUsers());
    dispatch(clearAllPets());
    dispatch(clearDonations());
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
          // alert(user.error);
          toast.notify(user.error, {
            position: "bottom-right"
          });
        } else {
          dispatch(setCurrentUser(user));
          dispatch(getAllPets());
          // dispatch(getAllUsers());
          dispatch(getAllDonations());
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
          // alert(user.error);
          toast.notify(user.error, {
            position: "bottom-right"
          });
        } else {
          dispatch(setCurrentUser(user.data));
          dispatch(resetSignupForm());
          dispatch(getAllPets());
          dispatch(getAllDonations());
          history.push("/");
        }
      })
      .catch(console.log);
  };
};
