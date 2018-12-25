import React, { Component } from 'react';
import './style.scss';

import {TopAppBarFixedAdjust} from '@material/react-top-app-bar';
import banner from './img/banner.png';
import TagList from 'components/taglist/TagList';
import PortfolioMetadata from 'scenes/portfolio/PortfolioMetadata';
import {Cell, Grid, Row} from '@material/react-layout-grid';

import ButtonIconGithub from 'components/button/ButtonIconGithub';

class P10004 extends Component {
  render() {
    return (
      <div className="p10004">
      	<TopAppBarFixedAdjust>
	      <img src={banner} className="banner" alt="banner_p10004"/>
	      <TagList list={new PortfolioMetadata().getTagList('p10004')} tagClassName="tag"/>
	      <div className="button-container">
	        <ButtonIconGithub className="button" outlined label='Github' url='https://github.com/cs3103group3/cs3103' />
	      </div>
	    </TopAppBarFixedAdjust>
	  </div>
    );
  }
}

export default P10004;