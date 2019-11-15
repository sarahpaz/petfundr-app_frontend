import React from "react";
import "./PetPage.styles.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const PetPage = ({ pet }) => {
  return pet ? (
    <div className="pet-page">
      <h1>Meet {pet.attributes.name}!</h1>
      <img src={pet.attributes.image} alt={pet.attributes.name} />
      <p>Cause: {pet.attributes.cause}</p>
      <p>Age: {pet.attributes.age}</p>
      <p>Raise Goal: ${pet.attributes.goal}</p>
      <p>Owner: {pet.attributes.owner.username}</p>
      <progress value="200" max={pet.attributes.goal}></progress>
      <br />
      <Button type="submit" variant="success">
        <Link to="/donations/new" className="link-button">
          Donate
        </Link>
      </Button>
    </div>
  ) : null;
};

export default PetPage;
