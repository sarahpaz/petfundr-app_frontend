import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/currentUser";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router-dom";

const Logout = ({ logout, history }) => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        logout();
        history.push("/");
      }}
    >
      <Button type="submit" variant="success">
        Logout
      </Button>
    </form>
  );
};

export default withRouter(
  connect(
    null,
    { logout } // thunk allows redux to pass this function to dispatch
  )(Logout)
);
