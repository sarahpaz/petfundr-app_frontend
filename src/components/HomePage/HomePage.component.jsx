import React, { Component } from "react";
import Login from "../Login/Login.component";

class HomePage extends Component {
  render() {
    return (
      <div className="homepage-container">
        {/* <h1>Homepage component</h1> */}
        <Login />
      </div>
    );
  }
}

export default HomePage;
