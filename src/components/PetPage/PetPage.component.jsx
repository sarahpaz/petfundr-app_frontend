import React from "react";

const PetPage = ({ pet }) => {
  return pet ? (
    <div className="pet-page">
      <h1>Pet Page Component</h1>
      <p>{pet.attributes.name}</p>
    </div>
  ) : null;
};

export default PetPage;
