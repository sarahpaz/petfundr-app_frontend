import React from "react";
import "./PetListContainer.styles.css";
import PetCard from "../PetCard/PetCard.component";

import { connect } from "react-redux";

const PetList = props => {
  const petCards = props.pets.map(p => <PetCard pet={p} key={p.id} />);

  return <div>{petCards.length > 0 ? petCards : null}</div>;
};

const mapStateToProps = state => {
  return {
    pets: state.pets
  };
};

export default connect(mapStateToProps)(PetList);
