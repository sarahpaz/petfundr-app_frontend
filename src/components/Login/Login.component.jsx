import React from "react";
import { connect } from "react-redux";
import { updateLoginForm } from "../../actions/loginForm";
import { login } from "../../actions/currentUser";

const Login = ({ loginFormData, updateLoginForm, login }) => {
  const handleOnChange = e => {
    const { name, value } = e.target;
    const updatedFormInfo = {
      ...loginFormData,
      [name]: value
    };
    updateLoginForm(updatedFormInfo);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    login(loginFormData);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        name="username"
        value={loginFormData.username}
        placeholder="username"
        onChange={handleOnChange}
      ></input>
      <input
        type="password"
        name="password"
        value={loginFormData.password}
        placeholder="password"
        onChange={handleOnChange}
      ></input>
      <button type="submit">Login</button>
    </form>
  );
};

const mapStateToProps = state => {
  // gives access to state from the store as props // getting what we need access to freom the store
  return {
    loginFormData: state.loginForm
  };
};

export default connect(
  mapStateToProps,
  { updateLoginForm, login } // thunk allows redux to pass this function to dispatch
)(Login);
