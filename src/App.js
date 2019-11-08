import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

import Login from "./components/Login/Login.component";
import Logout from "./components/Logout/Logout.component";
import NavHeader from "./components/Navbar/Navbar.component";
import { getCurrentUser } from "./actions/currentUser";

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <div className="App">
        <NavHeader />
        <div className="main-container">
          <h1 id="main-title">PetFundr</h1>
          {this.props.currentUser ? <Logout /> : <Login />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

export default connect(
  mapStateToProps,
  { getCurrentUser }
)(App);
