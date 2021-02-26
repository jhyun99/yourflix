import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../images/logo.png';

class MainPageHeader extends Component {
    render() {
        return (
            <div className="headerSection">
                <div className="logoTop">
                    <img className="logo" src={logo}  alt="Netflix Logo" style={{"width": "10.5vw", "height": "12.5vh"}}/>
                    <NavLink className="signInButton" to="/login">Sign In</NavLink>
                </div>
                <div className="headerTopText">
                    <h1 className="top1">Unlimited movies, TV<br/> shows and more.</h1>
                    <h2 className="top2">Watch anywhere. Cancel anytime.</h2>
                    <h3 className="top3"><br/>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className="inputGroup">
                    <input className="emailForm" defaultValue="Email address" type="email" minLength="5" maxLength="50"/>
                    <button className="getStartedButton" to="/registration">
                        Get Started
                    </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPageHeader;