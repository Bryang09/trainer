import React, { Component } from "react";

class Sub3 extends Component {
  state = {
    events: [
      { name: "Cardio", time: "7:00 - 8:00" },
      { name: "Weight Lifting", time: "8:00 - 9:00" },
      { name: "Boxing", time: "10:00 - 11:00" },
      { name: "Yoga", time: "11:00 - 11:3uy0" }
    ]
  };

  render() {
    const dates = this.state.events.map((res, i) => {
      return (
        <div className="event" key={i}>
          <div className="left">
            <h3>{res.name}</h3>
            <h4>{res.time} A.M.</h4>
          </div>
          <div className="right">
            <h5>Sign Up</h5>
          </div>
        </div>
      );
    });
    return (
      <div className="Sub3">
        <div className="sub3Img" />
        <div className="sub3Text">
          <div className="schedule">{dates}</div>
        </div>
      </div>
    );
  }
}

export default Sub3;
