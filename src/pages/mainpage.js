import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../images/logo.png';

class MainPage extends Component{
    render() {
        return (
            <HeaderComponent className="headerSection">
                <div id="background">
                </div>
                <div className="logoTop">
                    <Logo src={logo}  alt="Netflix Logo" style={{"width": "10.5vw", "height": "12.5vh"}}/>
                    <NavLink className="signInButton" to="/login">Sign In</NavLink>
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
        background: var(--main-red);
        position: absolute;
        translate: transform(-50%, -50%);
        cursor: PointerEvent;
        transition: background 0.2s ease-in;
    }

    .logoTop {
        position: absolute;
        top: 8%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
        height: 10rem;
        width: 80%;
        padding: 20px;
    }
`;
