import React, { Component } from 'react';
import './style.scss';

import {TopAppBarFixedAdjust} from '@material/react-top-app-bar';
import banner from './img/banner.png';
import TagList from 'components/taglist/TagList';
import PortfolioMetadata from 'scenes/portfolio/PortfolioMetadata';
import {Cell, Grid, Row} from '@material/react-layout-grid';
import ButtonIconGithub from 'components/button/ButtonIconGithub';

class P10002 extends Component {
  render() {
    return (
      <div className="p10002">
      	<TopAppBarFixedAdjust>
      	  <img src={banner} className="banner" alt="banner_p10002"/>
	      <TagList list={new PortfolioMetadata().getTagList('p10002')} tagClassName="tag"/>
	      <div className="button-container">
	        <ButtonIconGithub className="button" outlined label='Github' url='https://github.com/ruiwen905/kboxLyricsBot' />
	      </div>
	      <Grid>
	        <Row>
	      	  <Cell columns={2}></Cell>
	      	  <Cell columns={8}>
		        <p className="content-title">Summary</p>
		        <p className="content-text">
		          A telegram bot 
		        </p>
		      </Cell>
		      <Cell columns={2}></Cell>
		    </Row>
		  </Grid>
      	</TopAppBarFixedAdjust>
      </div>
    );
  }
}

export default P10002;