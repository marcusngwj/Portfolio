import React, { Component } from 'react';
import './App.scss';

import NavBar from './components/navbar/NavBar';
import {TopAppBarFixedAdjust} from '@material/react-top-app-bar';

import HomeScene from './scenes/home/HomeScene';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <TopAppBarFixedAdjust>
          <HomeScene />
	    </TopAppBarFixedAdjust>
      </div>
    );
  }
}

export default App;
