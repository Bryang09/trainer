import React from "react";

import Hero from "./Hero/Hero";
import Sub1 from "./Sub1/Sub1";
import Sub2 from "./Sub2/Sub2";
import Sub3 from "./Sub3/Sub3";
import Sub4 from "./Sub4/Sub4";

import "./Landing.scss";

const Landing = () => {
  return (
    <div className="Landing">
      <Hero />
      <Sub1 />
      <Sub2 />
      <Sub3 />
      <Sub4 />
    </div>
  );
};

export default Landing;
