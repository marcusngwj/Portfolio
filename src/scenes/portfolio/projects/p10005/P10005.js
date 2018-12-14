import React, { Component } from 'react';
import './style.scss';

import banner from './img/banner.png';
import {TopAppBarFixedAdjust} from '@material/react-top-app-bar';

class P10005 extends Component {
  render() {
    return (
      <div className="p10005">
      	<TopAppBarFixedAdjust>
	      <img src={banner} className="banner"/>
	      
      	</TopAppBarFixedAdjust>
      </div>
    );
  }
}

export default P10005;