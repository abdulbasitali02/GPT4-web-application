import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai_img from '../../assets/ai.png';

const Header = () => {
  return (
    <div className="gpt4__header section__padding" id="home">
      <div className="gpt4__header-content">
        <h1 className="gradient__text">
          Let's build something amazing with GPT-4 OpenAI
        </h1>
        <p>
          ENTER THE PARAGRAPH TEXT IN THIS SPACE HERE
        </p>

        <div className="gpt4__header-content__input">
          <input type="email " placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt4__header-content__people">
          <img src={people} alt="people"/>
          <p>ENTER THE PARAGRAPH TEXT IN THIS SPACE</p>
        </div>
        <div className="gpt4__header-image">
          <img src={ai_img} alt="ai_img" />
        </div>
      </div>
    </div>
  )
}

export default Header