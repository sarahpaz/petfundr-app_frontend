import React from "react";
import "./PetListContainer.styles.css";
import PetCard from "../PetCard/PetCard.component";

const PetListContainer = () => {
  return (
    <div className="petlist-container">
      <PetCard />
    </div>
  );
};

export default PetListContainer;
