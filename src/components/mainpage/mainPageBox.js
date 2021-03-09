import React, { Component } from 'react';

import tv from "../../images/tv.png";
import cardTwo from "../../images/cardTwo.jpg";
import cardThree from "../../images/cardThree.png";
import plus from "../../images/plus-thin.png";

// <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
//


// <span className="glyphicon glyphicon-plus"></span>

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
                        <img className="plusImage" src={plus} alt="plus" />
                    </button>
                    <div className="faq-closed"></div>
                  </li>
                  <li className="faq-list-item">
                    <button className="faq-question">
                      How much does Netflix cost?
                        <img className="plusImage" src={plus} alt="plus" />
                    </button>
                    <div className="faq-closed"></div>
                  </li>
                  <li className="faq-list-item">
                    <button className="faq-question">
                      Where can I watch?
                        <img className="plusImage" src={plus} alt="plus" />
                    </button>
                    <div className="faq-closed"></div>
                  </li>
                  <li className="faq-list-item">
                    <button className="faq-question">
                      How do I cancel?
                        <img className="plusImage" src={plus} alt="plus" />
                    </button>
                    <div className="faq-closed"></div>
                  </li>
                  <li className="faq-list-item">
                    <button className="faq-question">
                      What can I watch on Netflix?
                        <img className="plusImage" src={plus} alt="plus" />
                    </button>
                    <div className="faq-closed"></div>
                  </li>
                </ul>
                </div>
                <h3 className="top3" style={{"textAlign":"center"}}><br/>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className="inputGroup">
                    <input className="emailForm" defaultValue="Email address" type="email" minLength="5" maxLength="50"/>
                    <button className="getStartedButton" to="/registration">
                        Get Started
                    </button>
                </div>
              </div>
              <div className="mainPageBox no-bottom">
                <div className="footer-card">
                  <p className="footer-top">Questions? Call 1-111-111-1111</p>
                </div>
              </div>
          </div>  
        )
    }
}

export default MainPageBox;