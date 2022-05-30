import React, { Component, Fragment } from "react";
import AppRoutes from "./routes/AppRoutes";

export class App extends Component {
  render() {
    return (
      <Fragment>
        <AppRoutes />
      </Fragment>
    );
  }
}

export default App;
