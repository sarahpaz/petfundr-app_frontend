import React from "react";
import Button from "react-bootstrap/Button";

const NewDonation = () => {
  return (
    <div>
      <h1>New Donation Component</h1>
      <form>
        <input type="number" name="amount" min="0" placeholder="Amount"></input>
        <br />
        <input type="text" name="message"></input>
        <br />
        <Button type="submit" variant="success">
          Donate
        </Button>
      </form>
    </div>
  );
};

export default NewDonation;
