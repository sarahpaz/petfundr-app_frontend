// import React from "react";
import React, { Component } from "react";
import "./PetPage.styles.css";
import Card from "react-bootstrap/Card";
import NewDonation from "../NewDonation/NewDonation.component";

class PetPage extends Component {
  render() {
    const { pet } = this.props;
    return pet ? (
      <div className="pet-page">
        <h3>Meet {pet.attributes.name}!</h3>
        <Card style={{ width: "35em", margin: "2em auto" }}>
          <Card.Img
            variant="top"
            src={pet.attributes.image}
            alt={pet.attributes.name}
          />
          <Card.Body>
            <Card.Text>Cause: {pet.attributes.cause}</Card.Text>
            <Card.Text>Age: {pet.attributes.age}</Card.Text>
            <Card.Text>Raise Goal: ${pet.attributes.goal}</Card.Text>
            <Card.Text>Owner: {pet.attributes.owner.username}</Card.Text>

            <NewDonation pet={pet} />
          </Card.Body>
        </Card>
      </div>
    ) : null;
  }
}

export default PetPage;
