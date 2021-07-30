import React, { Component, Fragment } from "react";
import Header from "../parts/Header";

export default class LandingPage extends Component {
  render() {
    return (
      <Fragment>
        <Header>{this.props}</Header>
      </Fragment>
    );
  }
}
