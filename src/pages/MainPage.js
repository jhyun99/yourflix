import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../images/logo.png';

class MainPage extends Component {
    render() {
        return (
            <HeaderComponent className="headerSection">
                <div className="logoTop">
                    <Logo src={logo}  alt="Netflix Logo" style={{"width": "10.5vw", "height": "12.5vh"}}/>
                    <NavLink className="signInButton" to="/login">Sign In</NavLink>
                </div>
                <div className="headerTopText">
                    <Top1>Unlimited movies, TV<br/> shows and more.</Top1>
                    <Top2>Watch anywhere. Cancel anytime.</Top2>
                    <Top3><br/>Ready to watch? Enter your email to create or restart your membership.</Top3>
                    <div className="inputGroup">
                    <input className="emailForm" defaultValue="Email address" type="email" minLength="5" maxLength="50"/>
                    <button className="getStartedButton" to="/registration">
                        Get Started
                    </button>
                    </div>
                </div>
            </HeaderComponent>
        )
    }
}

export default MainPage;

/* Logo */
const Logo = styled.img`
    width: 10rem;
    height: 3.5rem;
    position: absolute;
    top: 30%;
    left: 7%;
    transform: translate(-50%, -50%);
`;

/*  Entire header of logo/sign in button */
const HeaderComponent = styled.div`
    .signInButton{
        right: 0;
        margin: 1.7rem 3% 0;
        padding: 0.4375rem 1.0625rem;
        font-weight: 400;
        line-height: normal;
        border-radius: 0.1875rem;
        font-size: 1rem;
        background: var(--red);
        position: absolute;
        translate: transform(-50%, -50%);
        cursor: PointerEvent;
        transition: background 0.2s ease-in;
    }

    .logoTop {
        position: relative;
        height: 10rem;
        z-index: 2;
    }

    .headerTopText {
        width: 65%;
        position: relative;
        margin: 4.5rem auto 0;
        display: flex;
        z-index: 2;
        text-align: center;
        align-content: center;
        justify-content: center;
        flex-direction: column;
    }

    .inputGroup {
        display: flex;
        justify-content: center;
    }

    .emailForm {
        font-size: 1rem;
        color: gray;
        padding: 10px;
        display: inline-block;
        height: 4.185rem;
        width: 30rem;
        border: none;
        outline: none;
    }

    .getStartedButton {
        display: inline-block;
        background: var(--red);
        color: white;
        border: none;
        outline: none;
        height: 4.2rem;
        width: 18rem;
        border: 1px var(--red);
        font-size: 1.9rem;
        text-align: center;
        transition: background .2s ease-in;
        cursor: pointer;
    }

    .getStartButton:hover {
        background-color: var(--dark);
        color: white;
    }
`;

const Top1 = styled.h1`
    margin: 0 0 1.2rem;
    font-size: 4rem;
    font-weight: 680; 
    line-height: 1.15em;
`;

const Top2 = styled.h2`
    margin: 0 0 1.2rem;
    font-size: 1.7em;
    font-weight: 500;
    line-height: 1em;
`;

const Top3 = styled.h3`
    margin: 0 0 1.2rem;
    font-size: 1.5;
    font-weight: 400;
    line-height: 1em;
`;