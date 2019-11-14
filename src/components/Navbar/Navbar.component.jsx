import React from "react";
import { connect } from "react-redux";

import { Navbar, Nav } from "react-bootstrap";
import Logout from "../Logout/Logout.component";
import Button from "react-bootstrap/Button";
import "./Navbar.styles.css";

const NavHeader = ({ currentUser }) => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand style={{ color: "#218838" }} href="/">
        PetFundr
      </Navbar.Brand>
      <Nav.Link href="/join" className="ml-auto">
        {!currentUser ? (
          <Button type="submit" variant="success">
            Join
          </Button>
        ) : null}
      </Nav.Link>
      {currentUser ? (
        <Nav.Link href="/pets" className="nav-links">
          Pets
        </Nav.Link>
      ) : null}
      {/* 
			{currentUser ? (
        // <Nav.Link href={`/users/${currentUser.data.id}`} className="nav-links"> //TODO: currentUser nested attributes change after refresh
        //   USERNAME
        // </Nav.Link>
			) : null}
			*/}
      {currentUser ? <Logout href="/logout">Logout</Logout> : null}
    </Navbar>
  );
};

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  };
};

export default connect(mapStateToProps)(NavHeader);
