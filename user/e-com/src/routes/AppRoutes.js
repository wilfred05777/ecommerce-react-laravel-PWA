import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
export class AppRoutes extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/home" exact element={<HomePage />} />
        </Routes>
      </Router>
    );
  }
}

export default AppRoutes;
