import React from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import "./NewDonation.styles.css";
import { updateNewDonationInfo } from "../../actions/newDonation"; // 1. import action creator
import { createDonation } from "../../actions/donations";
import { withRouter } from "react-router-dom";

//* 3) Redux gives a prop (updateNewDonationInfo)
const NewDonation = ({
  formData,
  updateNewDonationInfo,
  createDonation,
  props
}) => {
  const { amount, message, pet_id } = formData;

  const handleOnChange = e => {
    const { name, value } = e.target;
    updateNewDonationInfo(name, value);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    createDonation(formData);
    console.log(props);
  };

  return (
    <div className="donation-container">
      <h3>Make a Donation</h3>
      <form onSubmit={handleOnSubmit}>
        <input
          type="number"
          name="amount"
          min="0"
          placeholder="Amount"
          value={amount}
          onChange={handleOnChange}
        ></input>
        <br />
        <input
          type="text"
          name="message"
          placeholder="Message"
          value={message}
          onChange={handleOnChange}
        ></input>
        <input type="hidden" pet={pet_id} name="pet_id" />
        <br />
        <Button type="submit" variant="success" className="link-button">
          Donate
        </Button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    formData: state.newDonation
  };
};

export default withRouter(
  connect(mapStateToProps, {
    updateNewDonationInfo,
    createDonation
  })(NewDonation)
);
//2. action creator passed through redux's connect (mapDispatchToProps / object shorthand)