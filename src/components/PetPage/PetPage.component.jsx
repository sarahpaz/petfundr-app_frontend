// import React from "react";
import React, { Component } from "react";
import "./PetPage.styles.css";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import NewDonation from "../NewDonation/NewDonation.component";

class PetPage extends Component {
  // initial state is total of current donations
  state = {
    donations: 40
  };
  // setState to total of donations + new donation amount
  totalDonations = () => {
    return this.setState({
      donations: this.state.donations
    });
  };

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
            <ProgressBar
              striped
              variant="info"
              now={this.state.donations} //TODO:update to show donation total
              style={{ width: "50%", margin: "auto" }}
            />

            <NewDonation pet={pet} />
          </Card.Body>
        </Card>
      </div>
    ) : null;
  }
}

export default PetPage;
