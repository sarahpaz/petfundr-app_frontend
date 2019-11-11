import React from "react";
import "./PetCard.styles.css";

const PetCard = ({ pet }) => {
  return (
    <div className="pet-card">
      <h3>{pet.attributes.name}</h3>
      <img src={pet.attributes.image} alt={pet.attributes.name} />
      <p>Age: {pet.attributes.age}</p>
      <p>Cause: {pet.attributes.cause}</p>
      <p>Goal: {pet.attributes.goal}</p>
    </div>
  );
};

export default PetCard;
