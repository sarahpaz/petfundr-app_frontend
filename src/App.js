import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";

import NavHeader from "./components/Navbar/Navbar.component";
import { getCurrentUser } from "./actions/currentUser";
import Signup from "./components/Signup/Signup.component";
import MainContainer from "./components/MainContainer/MainContainer.component";
import PetList from "./components/PetListContainer/PetListContainer.component";
import HomePage from "./components/HomePage/HomePage.component";

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    const { loggedIn } = this.props;

    return (
      <div className="App">
        <NavHeader />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (loggedIn ? <MainContainer /> : <HomePage />)}
          />
          <Route path="/join" component={Signup} />
          <Route path="/pets" component={PetList} />
          <Route path="/logout" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: !!state.currentUser
  };
};

export default connect(mapStateToProps, { getCurrentUser })(App);
