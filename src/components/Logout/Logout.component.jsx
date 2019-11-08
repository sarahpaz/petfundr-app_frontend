import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/currentUser";
import Button from "react-bootstrap/Button";

const Logout = ({ logout }) => {
  return (
    <form onSubmit={logout}>
      <Button type="submit" variant="success">
        Logout
      </Button>
    </form>
  );
};

export default connect(
  null,
  { logout } // thunk allows redux to pass this function to dispatch
)(Logout);
