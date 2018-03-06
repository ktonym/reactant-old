import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import {connect} from "react-redux";
import GuestRoute from "./components/routes/GuestRoute";
import UserRoute from "./components/routes/UserRoute";
import LoginPage from "./components/pages/LoginPage";
import HomePage from "./components/pages/HomePage";
import DashBoard from "./components/pages/DashBoard";
import "antd/dist/antd.css";
import ClientPage from "./components/pages/ClientPage";
//import {DatePicker} from 'antd';
//import LoginForm from "./components/forms/LoginForm";

class App extends Component {
  render() {
      const {location} = this.props;
    return (
      <div>
          <Route location={location} path="/" exact component={HomePage}/>
          <GuestRoute location={location} component={LoginPage}/>
          <UserRoute location={location} path="/dashboard" exact component={DashBoard}/>
          <UserRoute location={location} path="/clients" exact component={ClientPage}/>
      </div>
    );
  }
}

App.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired
};

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.user.access_token
});

export default connect(mapStateToProps)(App);
