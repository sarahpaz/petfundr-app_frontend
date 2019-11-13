import React from "react";
import "./PetPage.styles.css";

const PetPage = ({ pet }) => {
  return pet ? (
    <div className="pet-page">
      <h1>Meet {pet.attributes.name}!</h1>
      <img src={pet.attributes.image} alt={pet.attributes.name} />
      <p>Cause: {pet.attributes.cause}</p>
      <p>Age: {pet.attributes.age}</p>
      <p>Raise Goal: ${pet.attributes.goal}</p>
      <p>Owner: {pet.attributes.owner.username}</p>
      <p>Make a donation!</p>
    </div>
  ) : null;
};

export default PetPage;
