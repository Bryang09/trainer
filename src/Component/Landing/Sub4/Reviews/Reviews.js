import React, { Component } from "react";

import "../Sub4.scss";

class Reviews extends Component {
  state = {
    reviews: [
      {
        name: "Chandler",
        class: "Resistance Training",
        src:
          "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7e89aa20603ea9fe62ddc6014276ca41&auto=format&fit=crop&w=634&q=80"
      },
      {
        name: "Phoebe",
        class: "Boxing",
        src:
          "https://images.unsplash.com/photo-1535324492437-d8dea70a38a7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5020948430163a1dccb8aa26070664c4&auto=format&fit=crop&w=687&q=80"
      },
      {
        name: "Ross",
        class: "Yoga",
        src:
          "https://images.unsplash.com/photo-1535441577682-5a7bc0702a7d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=077e17fb017e1258f3d5d3709729640a&auto=format&fit=crop&w=500&q=60"
      }
    ]
  };
  render() {
    const review = this.state.reviews.map((res, i) => {
      return (
        <div className="Review" key={i}>
          <div
            className="reviewImg"
            style={{
              background: `url(${res.src})
          no-repeat center 26% / cover`
            }}
          />
          <div className="reviewText">
            <h4>{res.name}</h4>
            <h5 style={{ textTransform: "uppercase" }}>{res.class}</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              illo repellat quisquam earum numquam mollitia veniam, ea et
              accusantium at sapiente quo odio non quae eaque perspiciatis natus
              quas inventore.
            </p>
          </div>
        </div>
      );
    });

    return <div className="Reviews">{review}</div>;
  }
}

export default Reviews;
