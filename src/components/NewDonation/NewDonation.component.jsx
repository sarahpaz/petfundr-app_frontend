// import React from "react";
import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import "./NewDonation.styles.css";
import { updateNewDonationInfo } from "../../actions/newDonation";
import { createDonation } from "../../actions/donations";
import { withRouter } from "react-router-dom";
class NewDonation extends Component {
  render() {
    const {
      formData,
      updateNewDonationInfo,
      createDonation,
      userId,
      pet
    } = this.props;
    const { amount, message } = formData;
    const petId = pet.id;

    const handleOnChange = e => {
      const { name, value } = e.target;
      updateNewDonationInfo(name, value);
    };
    const handleOnSubmit = e => {
      e.preventDefault();
      createDonation({
        ...formData,
        userId,
        petId
      });
    };

    return (
      <div className="donation-container">
        <h4>Make a Donation</h4>
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
          <br />
          <Button type="submit" variant="success" className="link-button">
            Donate
          </Button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const userId = state.currentUser.data.id;
  return {
    formData: state.newDonation,
    userId
  };
};

export default withRouter(
  connect(mapStateToProps, {
    updateNewDonationInfo,
    createDonation
  })(NewDonation)
);
