import React from "react";
import "./PetCard.styles.css";
import { Link } from "react-router-dom";

const PetCard = ({ pet }) => {
  return (
    <div className="pet-card">
      <Link to={`/pets/${pet.id}`}>
        <h3>{pet.attributes.name}</h3>
      </Link>
      <img src={pet.attributes.image} alt={pet.attributes.name} />
      <p>Age: {pet.attributes.age}</p>
      <p>Cause: {pet.attributes.cause}</p>
      <p>Goal: {pet.attributes.goal}</p>
    </div>
  );
};

export default PetCard;
