import './css/App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage.js';
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/login" component={LoginPage} />
    </Switch>
  );
};

export default App;
