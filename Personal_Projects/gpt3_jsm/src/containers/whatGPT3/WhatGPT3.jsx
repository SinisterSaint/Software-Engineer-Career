import React from 'react'
import { Feature } from '../../components';
import './whatGPT3.css';


const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient-text">The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-contatiner">
      <Feature title="Chatbots" text="Our advanced chatbot technology allows for delightful interactions, making communication with friends and colleagues a breeze." />
      <Feature title="Knowledgebase" text="Our extensive knowledgebase provides a wealth of information and resources, ensuring you have access to valuable insights and solutions." />
      <Feature title="Education" text="Our educational platform offers a wide range of courses and materials, making learning enjoyable and accessible from the comfort of your own space." />
      </div>
    </div>
  )
}

export default WhatGPT3