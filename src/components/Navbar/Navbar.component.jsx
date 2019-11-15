import React from "react";
import { connect } from "react-redux";

import { Navbar } from "react-bootstrap";
import Logout from "../Logout/Logout.component";
import Button from "react-bootstrap/Button";
import "./Navbar.styles.css";
import { Link } from "react-router-dom";

const NavHeader = ({ currentUser }) => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand>
        <Link to="/" className="brand-logo">
          PetFundr
        </Link>
      </Navbar.Brand>
      <Link to="/join" className="ml-auto">
        {!currentUser ? (
          <Button type="submit" variant="success">
            Join
          </Button>
        ) : null}
      </Link>
      {currentUser ? (
        <Link to="/pets" className="nav-links">
          Pets
        </Link>
      ) : null}
      {/* 
			{currentUser ? (
        // <Link href={`/users/${currentUser.data.id}`} className="nav-links"> //TODO: currentUser nested attributes change after refresh
        //   USERNAME
        // </Link>
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
