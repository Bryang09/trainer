import React, { Component } from "react";

class Price extends Component {
  state = {
    text: [
      { title: "Cardio", price: 45 },
      { title: "Body Weight", price: 40 },
      { title: "Resistance Training", price: 50 }
    ]
  };

  render() {
    const Text = this.state.text.map((res, i) => {
      return (
        <div className="priceBox" key={i}>
          <div className="priceText">
            <h2>{res.title}</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Explicabo, enim ipsa modi quis harum repellendus ea! Adipisci sed
              at similique eaque aliquam pariatur doloribus inventore molestias
              repellendus? Molestiae, ad doloremque?
            </p>
            <h4>
              <b>${res.price}</b>/ month
            </h4>
          </div>
        </div>
      );
    });
    return <div className="sub2Prices">{Text}</div>;
  }
}
export default Price;
