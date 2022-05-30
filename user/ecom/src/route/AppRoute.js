import React, { Component, Fragment } from "react";
// import { Router, Route, Routes } from "react-router";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import Contact from "../pages/Contact";
import HomePage from "../pages/HomePage";

export class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </Fragment>
    );
  }
}

export default AppRoute;
