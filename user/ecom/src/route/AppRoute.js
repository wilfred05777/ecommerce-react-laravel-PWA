import React, { Component, Fragment } from "react";
// import { Router, Route, Routes } from "react-router";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Switch,
} from "react-router-dom";

import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import UserLoginPage from "../pages/UserLoginPage";

export class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/contact" exact element={<ContactPage />} />
            <Route path="/login" exact element={<UserLoginPage />} />
          </Routes>
        </Router>
      </Fragment>
    );
  }
}

export default AppRoute;
