import React from "react";
import { connect } from "react-redux";

import { Navbar, Nav } from "react-bootstrap";
import Logout from "../Logout/Logout.component";

const NavHeader = ({ currentUser }) => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand style={{ color: "#218838" }} href="/">
        PetFundr
      </Navbar.Brand>
      <Nav.Link href="/join" className="ml-auto">
        {!currentUser ? <button className="btn btn-success"> Join</button> : ""}
        {currentUser ? (
          <Nav.Link className="ml-auto" href={`/users/${currentUser.id}`}>
            {currentUser.username}
          </Nav.Link>
        ) : (
          ""
        )}
      </Nav.Link>
      {currentUser ? <Logout href="/" /> : ""}
    </Navbar>
  );
};

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  };
};

export default connect(mapStateToProps)(NavHeader);
