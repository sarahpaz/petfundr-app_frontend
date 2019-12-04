// import React from "react";
import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import "./NewDonation.styles.css";
import { updateNewDonationInfo } from "../../actions/newDonation";
import { createDonation } from "../../actions/donations";
import { withRouter } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";

class NewDonation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // pet: props.pet,
      donations: props.pet.attributes.donations.reduce(
        (acc, donations) => acc + donations.amount,
        0
      )
    };
    // console.log(
    //   "total left over",
    //   props.pet.attributes.goal -
    //     props.pet.attributes.donations.reduce(
    //       (acc, donations) => acc + donations.amount,
    //       0
    //     )
    // );
    // console.log(this.state.donations);
    // console.log(this.props.pet.attributes.goal);
  }

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
      // console.log(e.target[0].value);
      createDonation({
        ...formData,
        userId,
        petId
      });
      const newTotalDonations =
        this.state.donations + parseInt(e.target[0].value);
      this.setState({ donations: newTotalDonations });
      // console.log(newTotalDonations);
    };
    const donationPercentage =
      (this.state.donations / this.props.pet.attributes.goal) * 100;

    return (
      <div className="donation-container">
        <ProgressBar
          striped
          variant="info"
          now={donationPercentage} // total dontations made towards goal
          style={{ width: "50%", margin: "auto" }}
        />
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
