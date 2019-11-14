import React, { Component } from "react";
import Login from "../Login/Login.component";
import "./HomePage.styles.css";

class HomePage extends Component {
  render() {
    return (
      <div className="homepage-container">
        <Login />
      </div>
    );
  }
}

export default HomePage;
