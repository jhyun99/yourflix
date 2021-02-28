import React, { Component } from 'react';

import tv from "../../images/tv.png";
import cardTwo from "../../images/cardTwo.jpg";
import cardThree from "../../images/cardThree.png";

class MainPageBox extends Component {
    render() {
        return (
          <div>
              <div className="mainPageBox">
                <div className="card">
                  <div className="card-contents">
                    <h1 className="card-title">Enjoy on your TV.</h1>
                    <h3 className="card-text">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h3>
                  </div>
                  <img className="card-image" src={tv} alt="tv"/>
                </div>
              </div>
              <div className="mainPageBox">
                <div className="card">
                  <img className="card-image" src={cardTwo} alt="tv"/>
                  <div className="card-contents">
                    <h1 className="card-title">Download your shows to watch offline.</h1>
                    <h3 className="card-text">Save your favorites easily and always have something to watch.</h3>
                  </div>
                </div>
              </div>
              <div className="mainPageBox">
                <div className="card">
                  <div className="card-contents">
                    <h1 className="card-title">Watch everywhere.</h1>
                    <h3 className="card-text">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</h3>
                  </div>
                  <img className="card-image" src={cardThree} alt="tv"/>
                </div>
              </div>
              <div className="faq-box">
                <div className="faq-card">
                <h1 className="faq-title">Frequently Asked Questions</h1>
                <ul className="faq-list">
                  <li className="faq-list-item">
                    <button className="faq-question">
                      What is Netflix?
                    </button>
                    <div className="faq-closed"></div>
                  </li>
                </ul>
                </div>
              </div>
          </div>  
        )
    }
}

export default MainPageBox;