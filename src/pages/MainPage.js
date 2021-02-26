import React, { Component } from 'react';
import '../css/MainPage.css';
import '../css/MainPageBox.css';
import Header from '../components/mainpage/header';
import Box from '../components/mainpage/mainPageBox';


class MainPage extends Component {
    render() {
        return (
          <div>
              <Header />
              <Box />
          </div>  
        );
    }
}

export default MainPage;