import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";

import NavHeader from "./components/Navbar/Navbar.component";
import { getCurrentUser } from "./actions/currentUser";
import Signup from "./components/Signup/Signup.component";
import MainContainer from "./components/MainContainer/MainContainer.component";
import PetList from "./components/PetListContainer/PetListContainer.component";
import HomePage from "./components/HomePage/HomePage.component";
import PetPage from "./components/PetPage/PetPage.component";
import UserPage from "./components/UserPage/UserPage.component";

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    const { loggedIn, pets, users } = this.props;

    return (
      <div className="App">
        <NavHeader />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (loggedIn ? <MainContainer /> : <HomePage />)}
          />
          <Route exact path="/join" component={Signup} />
          <Route exact path="/pets" component={PetList} />
          <Route
            exact
            path="/users/:id"
            render={props => {
              const user = users.find(
                user => user.id === props.match.params.id
              );
              return <UserPage user={user} />;
            }}
          />
          <Route
            exact
            path="/pets/:id"
            render={props => {
              const pet = pets.find(pet => pet.id === props.match.params.id);
              return <PetPage pet={pet} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: !!state.currentUser,
    pets: state.pets,
    users: state.users
  };
};

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
