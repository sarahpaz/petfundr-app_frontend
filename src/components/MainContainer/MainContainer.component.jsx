import React from "react";
import "./MainContainer.styles.css";
import PetListContainer from "../PetListContainer/PetListContainer.component";

const MainContainer = () => {
  return (
    <div className="main-container">
      <PetListContainer />
    </div>
  );
};

export default MainContainer;
