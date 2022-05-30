import React, { Component, Fragment } from "react";
// import BrowserRouter from "react-router-dom";
import AppRoute from "./route/AppRoute";

export class App extends Component {
  render() {
    return (
      <div>
        <Fragment>
          <AppRoute />
        </Fragment>
      </div>
    );
  }
}

export default App;
