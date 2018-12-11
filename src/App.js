import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.scss';

import NavBar from './components/navbar/NavBar';
import { TopAppBarFixedAdjust } from '@material/react-top-app-bar';

import HomeScene from './scenes/home/HomeScene';
import PortfolioScene from './scenes/portfolio/PortfolioScene';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <TopAppBarFixedAdjust>
            <Switch>
              <Route exact path='/' component={HomeScene} />
              <Route path='/portfolio' component={PortfolioScene} />
            </Switch>
  	      </TopAppBarFixedAdjust>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
