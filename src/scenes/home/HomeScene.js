import React, { Component } from 'react';
import './style.scss';

import HeaderBanner from './header_banner/HeaderBanner';

class HomeScene extends Component {
  render() {
    return (
      <div className="home-scene">
        <HeaderBanner />
      </div>
    );
  }
}

export default HomeScene;