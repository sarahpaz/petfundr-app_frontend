import React from "react";
import "./PetPage.styles.css";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
// import { Link } from "react-router-dom";
// import newDonation from "../../reducers/newDonation";
import NewDonation from "../NewDonation/NewDonation.component";

const PetPage = ({ pet }) => {
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
            now={20} //TODO:update to show donation total
            style={{ width: "50%", margin: "auto" }}
          />
          {/* <Button type="submit" variant="success">
            <Link to="/donations/new" className="link-button">
              Donate
            </Link>
	</Button> */}

          <NewDonation pet={pet} />
        </Card.Body>
      </Card>
    </div>
  ) : null;
};

export default PetPage;
