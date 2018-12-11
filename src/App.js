import React, { Component } from 'react';

import ButtonTheme from './components/button/ButtonTheme';
import NavBar from './components/navbar/NavBar';
import {TopAppBarFixedAdjust} from '@material/react-top-app-bar';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <TopAppBarFixedAdjust>
	      <ButtonTheme />
	      <div className="tempdiv"></div>
	    </TopAppBarFixedAdjust>
      </div>
    );
  }
}

export default App;
