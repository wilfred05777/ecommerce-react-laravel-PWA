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
import NotificationPage from "../pages/NotificationPage";
import PrivacyPage from "../pages/PrivacyPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import PurchasePage from "../pages/PurchasePage";
import RefundPage from "../pages/RefundPage";
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
            <Route path="/privacy" exact element={<PrivacyPage />} />
            <Route path="/refund" exact element={<RefundPage />} />
            <Route path="/purchase" exact element={<PurchasePage />} />
            <Route
              path="/productdetails"
              exact
              element={<ProductDetailsPage />}
            />
            <Route path="/notification" exact element={<NotificationPage />} />
          </Routes>
        </Router>
      </Fragment>
    );
  }
}

export default AppRoute;
