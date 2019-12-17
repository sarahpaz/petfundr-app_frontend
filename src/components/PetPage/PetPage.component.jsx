import React from "react";
import "./PetPage.styles.css";
import Card from "react-bootstrap/Card";
import NewDonation from "../NewDonation/NewDonation.component";

const PetPage = ({ pet }) => {
  return pet ? (
    <div className="pet-page">
      <h3>Meet {pet.attributes.name}!</h3>
      <Card className="pet-page-card">
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
};
export default PetPage;
