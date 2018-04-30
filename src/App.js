import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/pages/MainPage'
import Login from './components/pages/LoginPage'
import Admin from './components/pages/AdminPage'
import { Route, Switch } from 'react-router-dom'

import { root, login, admin } from './routes'
class App extends Component {
  render() {
    return (
      <Switch>
        <Route component={Main} exact path={root} />
        <Route component={Admin} exact path={admin} />
        <Route component={Login} exact path={login} />
      </Switch>
    );
  }
}

export default App;
