import React, { Component } from "react";

import Price from "./Price/Price";

import "./Sub2.scss";

class Sub2 extends Component {
  render() {
    return (
      <div className="Sub2">
        <div className="sub2Img">
          <h3>Training</h3>
          <h2>
            <span>Services</span> we offer
          </h2>
        </div>
        <Price />
      </div>
    );
  }
}

export default Sub2;
