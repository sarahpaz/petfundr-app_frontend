import React from "react";
import { connect } from "react-redux";
import { updateSignupForm } from "../../actions/signupForm";
import { signup } from "../../actions/currentUser.js";
import Button from "react-bootstrap/Button";

const Signup = ({ signupFormData, updateSignupForm, signup }) => {
  const handleOnChange = e => {
    const { name, value } = e.target;
    const updatedFormInfo = {
      ...signupFormData,
      [name]: value
    };
    updateSignupForm(updatedFormInfo);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    signup(signupFormData);
  };

  return (
    <div className="signup=form">
      <h2>Join PetFundr</h2>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="username"
          value={signupFormData.username}
          placeholder="username"
          onChange={handleOnChange}
        ></input>
        <br />
        <input
          type="password"
          name="password"
          value={signupFormData.password}
          placeholder="password"
          onChange={handleOnChange}
        ></input>
        <br />
        <Button type="submit" variant="success">
          Join
        </Button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm
  };
};

export default connect(
  mapStateToProps,
  { updateSignupForm, signup }
)(Signup);
