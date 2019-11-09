import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

import Login from "./components/Login/Login.component";
import MainContainer from "./components/MainContainer/MainContainer.component";
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
        {this.props.currentUser ? <MainContainer /> : ""}
        <div className="login-container">
          {this.props.currentUser ? "" : <Login />}
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
