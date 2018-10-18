import React, { Component } from "react";

import "./Sub4.scss";

import Reviews from "./Reviews/Reviews";

class Sub4 extends Component {
  render() {
    return (
      <div className="Sub4">
        <h1>Words From Our Clients</h1>
        <Reviews />
      </div>
    );
  }
}

export default Sub4;
