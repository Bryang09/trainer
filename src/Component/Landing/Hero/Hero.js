import React from "react";

import "./Hero.scss";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="HeroImg">
        <div className="heroText">
          <h1>
            Elsa <span>Mars</span>
          </h1>
          <h2>
            Looking for personalized personal training? Then you are in the
            right place!
          </h2>
          <div className="heroButtons">
            <h5>View Pricing</h5>
            <h5>Testimonials</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
