import React, { Component } from "react";
import "./Carousel.css";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import Card from "./Card";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = { cardIdx: 0 };
    this.goForward = this.goForward.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  goForward() {
    this.setState(st => ({ cardIdx: st.cardIdx + 1 }));
  }

  goBack() {
    this.setState(st => ({ cardIdx: st.cardIdx - 1 }));
  }

  render() {
    const card = this.props.cardData[this.state.cardIdx];
    const total = this.props.cardData.length;
    const leftIconHidden = this.state.cardIdx === 0 ? "hidden" : "";
    const rightIconHidden = this.state.cardIdx === total - 1 ? "hidden" : "";
    return (
      <div className="Carousel">
        <h1>{this.props.title}</h1>
        <div className="Carousel-main">
          <i
            className={`fas fa-chevron-circle-left fa-2x ${leftIconHidden}`}
            onClick={this.goBack}
            data-testid="left-arrow"
          />
          <Card
            caption={card.caption}
            src={card.src}
            currNum={this.state.cardIdx + 1}
            totalNum={total}
          />
          <i
            className={`fas fa-chevron-circle-right fa-2x ${rightIconHidden}`}
            onClick={this.goForward}
            data-testid="right-arrow"
          />
        </div>
      </div>
    );
  }
}

Carousel.defaultProps = {
  cardData: [
    {
      src: image1,
      caption: "Photo by Richard Pasquarella on Unsplash"
    },
    {
      src: image2,
      caption: "Photo by Pratik Patel on Unsplash"
    },
    {
      src: image3,
      caption: "Photo by Josh Post on Unsplash"
    }
  ],
  title: "Shells from far away beaches."
};

export default Carousel;
