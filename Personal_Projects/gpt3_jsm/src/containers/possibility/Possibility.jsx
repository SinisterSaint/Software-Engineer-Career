import React from 'react'
import possibilityImage from '../../assets/possibility.png';
import './possiblity.css';

const Possibility = () => {
  return (
    <div className="gpt3__possibility section_padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="">The possibilities are <br /> beyond your imagination</h1>
      <p>"Despite any discomfort during travel, there was no hesitation in seeking assistance. All negative thoughts were replaced with the joy of experiencing changes and the enthusiasm for the upcoming journey. Over the years, we've become accustomed to accommodating various requests at our gatherings."</p>
      <h4>Request Early Acces to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility