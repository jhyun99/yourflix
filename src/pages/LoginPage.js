import React, {Component} from 'react';
import '../css/LoginPage.css';
import styled from "styled-components";
import logo from "../images/logo.png";

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: "",
            password: "",
        }

        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
    }

    inputChangeHandler() {

    }

    passwordChangeHandler() {

    }

    render() {
        return (
            <HeaderComponent className="headerSection">
                <div className="logoTop">
                    <Logo src={logo}  alt="Netflix Logo" style={{"width": "10.5vw", "height": "12.5vh"}}/>
                </div>
                <div>
                    Sign In
                    <input type="text" onChange={() => this.inputChangeHandler()} defaultValue="Email or phone number"/>
                    <input type="text" onChange={() => this.passwordChangeHandler()} defaultValue="Password"/>
                </div>
            </HeaderComponent>
        )
    }
}

const HeaderComponent = styled.div`
    .logoTop {
        position: relative;
        height: 10rem;
        z-index: 2;
    }
`;

const Logo = styled.img`
    width: 10rem;
    height: 3.5rem;
    position: absolute;
    top: 30%;
    left: 7%;
    transform: translate(-50%, -50%);
`;

export default LoginPage;