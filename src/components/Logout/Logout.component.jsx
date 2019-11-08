import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/currentUser";

const Logout = ({ logout }) => {
  return (
    <form onSubmit={logout}>
      <button type="submit">Logout</button>
    </form>
  );
};

export default connect(
  null,
  { logout } // thunk allows redux to pass this function to dispatch
)(Logout);
