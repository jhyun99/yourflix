import './css/App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './pages/mainpage.js';
import Header from './components/header.js';

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/login" component={Header} />
    </Switch>
  );
};

export default App;
