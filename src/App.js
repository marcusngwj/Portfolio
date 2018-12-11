import React, { Component } from 'react';
import './App.scss';

import NavBar from './components/navbar/NavBar';
import {TopAppBarFixedAdjust} from '@material/react-top-app-bar';

import HomeScene from './scenes/home/HomeScene';
import PortfolioScene from './scenes/portfolio/PortfolioScene';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <TopAppBarFixedAdjust>
          <HomeScene />
          <PortfolioScene />
	    </TopAppBarFixedAdjust>
      </div>
    );
  }
}

export default App;
