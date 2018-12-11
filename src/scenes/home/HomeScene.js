import React, {Component} from 'react';
import './style.scss';

import ButtonTheme from 'components/button/ButtonTheme';
import HeaderBanner from './header_banner/HeaderBanner';

class HomeScene extends Component {
  render() {
    return (
      <div className="home-scene">
        <HeaderBanner />
        <ButtonTheme />
      </div>
    );
  }
}

export default HomeScene;