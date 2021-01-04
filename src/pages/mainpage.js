import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import styled from 'styled-components';

class MainPage extends Component{
    render() {
        return (
            <HeaderComponent className="logo">
                <div className="logotop">
                    <img src={logo}  alt="Netflix Logo" style={{"width": "100vw", "height": "100vh"}}/>
                    <NavLink className="signInButton" to="/login">Sign In</NavLink>
                </div>
            </HeaderComponent>
        )
    }
}

export default MainPage;

const HeaderComponent = styled.div`
    .signInButton{
        right: 0;
        margin: 1.125rem 3% 0;
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
`;