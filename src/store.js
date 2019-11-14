import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import currentUser from "./reducers/currentUser";
import loginForm from "./reducers/loginForm";
import pets from "./reducers/pets";
import signupForm from "./reducers/signupForm";
import users from "./reducers/users";

const reducer = combineReducers({
  currentUser,
  loginForm,
  pets,
  signupForm,
  users
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
