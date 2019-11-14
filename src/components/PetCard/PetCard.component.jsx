import React from "react";
import "./PetCard.styles.css";
import { Link } from "react-router-dom";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";

const PetCard = ({ pet }) => {
  return (
    <CardDeck
      className="col-md-6 col-lg-4"
      style={{
        margin: "2em auto"
        // border: "1px solid red"
      }}
    >
      <Card>
        <Card.Img
          variant="top"
          src={pet.attributes.image}
          alt={pet.attributes.name}
        />
        <Card.Body>
          <Card.Title>{pet.attributes.name}</Card.Title>
          <Card.Text>
            Cause: {pet.attributes.cause} <br />
            Age: {pet.attributes.age}
          </Card.Text>
          <Card.Text>Goal: ${pet.attributes.goal}</Card.Text>
          <progress value="200" max={pet.attributes.goal}></progress>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            Learn more about{" "}
            <Link to={`/pets/${pet.id}`}>{pet.attributes.name}</Link>
          </small>
        </Card.Footer>
      </Card>
    </CardDeck>
  );
};

export default PetCard;
