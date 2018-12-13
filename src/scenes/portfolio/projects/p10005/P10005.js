import React, { Component } from 'react';
import './style.scss';

import banner from './img/banner.png';

class P10005 extends Component {
  render() {
    return (
      <div className="p10005">
      	<img src={banner} className="banner"/>
      	<h1>P10005</h1>
      </div>
    );
  }
}

export default P10005;