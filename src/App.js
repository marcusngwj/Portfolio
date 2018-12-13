import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Path } from './Path';
import './App.scss';

import NavBar from './components/navbar/NavBar';

import HomeScene from './scenes/home/HomeScene';
import PortfolioScene from './scenes/portfolio/PortfolioScene';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path={Path.HOME} component={HomeScene} />
            <Route path={Path.PORTFOLIO} component={PortfolioScene} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
