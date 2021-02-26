import React, { Component } from 'react';

import tv from "../../images/tv.png";

class MainPageBox extends Component {
    render() {
        return (
          <div>
              <div className="mainPageBox">
                <div className="card">
                  <h1 className="card-title">Enjoy on your TV.</h1>
                  <h2 className="card-text">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>
                  <img className="card-image" src={tv} alt="tv"/>
                </div>
              </div>
          </div>  
        )
    }
}

export default MainPageBox;