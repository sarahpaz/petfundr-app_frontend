// import React from "react";
import React, { Component } from "react";
import "./PetCard.styles.css";
import { Link } from "react-router-dom";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class PetCard extends Component {
  // state = {
  //   counter: 0
  // };

  // handleOnClick = () => {
  //   this.setState({ counter: this.state.counter + 1 });
  // };

  render() {
    const { pet } = this.props;
    return (
      <CardDeck
        className="col-md-6 col-lg-4"
        style={{
          margin: "1.5em auto"
          // border: "1px solid red"
        }}
      >
        <Card className="pet-card">
          <Card.Img
            variant="top"
            src={pet.attributes.image}
            alt={pet.attributes.name}
          />
          <Card.Body>
            <Card.Title>{pet.attributes.name}</Card.Title>
            <Card.Text>Cause: {pet.attributes.cause}</Card.Text>
            <Card.Text>Goal: ${pet.attributes.goal}</Card.Text>
            <Button variant="success">
              <Link key={pet.id} to={`/pets/${pet.id}`} className="link-button">
                Donate
              </Link>
            </Button>

            {/* 
						<Button variant="success" onClick={this.handleOnClick}>
              Vote {this.state.counter}
						</Button>
					*/}
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Learn more about{" "}
              <Link key={pet.id} to={`/pets/${pet.id}`}>
                {pet.attributes.name}
              </Link>
            </small>
          </Card.Footer>
        </Card>
      </CardDeck>
    );
  }
}

export default PetCard;
