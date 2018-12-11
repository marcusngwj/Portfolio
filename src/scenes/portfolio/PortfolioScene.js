import React, {Component} from 'react';
import './style.scss';

import PortfolioMetadata from './PortfolioMetadata.js';

import CardTheme from 'components/card/CardTheme';

class PortfolioScene extends Component {
  render() {
    return (
      <div className="portfolio-scene">
      	<CardTheme />
      </div>
    );
  }
}

export default PortfolioScene;