import React, { Component } from 'react';
import './style.scss';

import banner from './img/banner.png';
import {TopAppBarFixedAdjust} from '@material/react-top-app-bar';
import TagList from 'components/taglist/TagList';
import PortfolioMetadata from 'scenes/portfolio/PortfolioMetadata';

class P10005 extends Component {
  render() {
    return (
      <div className="p10005">
      	<TopAppBarFixedAdjust>
	      <img src={banner} className="banner"/>
	      <div className="content-container">
	      	<TagList list={new PortfolioMetadata().getTagListFromProject('p10005')} />
	      </div>
      	</TopAppBarFixedAdjust>
      </div>
    );
  }
}

export default P10005;