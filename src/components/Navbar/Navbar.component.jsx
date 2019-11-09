import React from "react";
import { connect } from "react-redux";

import { Navbar, Nav } from "react-bootstrap";
import Logout from "../Logout/Logout.component";

const NavHeader = ({ currentUser }) => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand style={{ color: "#218838" }}>PetFundr</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="#">Donate</Nav.Link>
        {!currentUser ? <button className="btn btn-success"> Join</button> : ""}
        {currentUser ? (
          <Nav.Link href="#">{currentUser.username}</Nav.Link>
        ) : (
          ""
        )}
        {currentUser ? <Logout /> : ""}
      </Nav>
    </Navbar>
  );
};

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  };
};

export default connect(mapStateToProps)(NavHeader);
