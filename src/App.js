import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

import Login from "./components/Login/Login.component";
import Logout from "./components/Logout/Logout.component";
import { getCurrentUser } from "./actions/currentUser";

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <div className="App">
        <h1>PetFundr</h1>
        {this.props.currentUser ? <Logout /> : <Login />}
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
