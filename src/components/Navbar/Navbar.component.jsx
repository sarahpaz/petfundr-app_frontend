import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavHeader = () => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand style={{ color: "#218838" }}>PetFundr</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#">Join </Nav.Link>
        <Nav.Link href="#">Donate</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavHeader;
