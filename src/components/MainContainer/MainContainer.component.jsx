import React from "react";
import "./MainContainer.styles.css";
import PetListContainer from "../PetListContainer/PetListContainer.component";

const MainContainer = () => {
  return (
    <div className="main-container">
      <h1>Main Container Component</h1>
      <PetListContainer />
    </div>
  );
};

export default MainContainer;
