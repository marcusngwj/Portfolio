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
	    <Grid>
	      <Row>
	        <Cell columns={2}></Cell>
	      	<Cell columns={8}>
		      <p className="content-title">Summary</p>
		      <p className="content-text">
		        A P2P network consisting of a centralised directory tracker and several peers.
		        Peers, behind symmetric NAT, are able to inform the tracker on new files available for sharing, as well as download desired chunks of files from other peers.
		        The tracker maintains a database of these chunk entries and pass information to the peers upon request.
		        A TURN server is also incorporated into the tracker. 
		        In this system, only text files are allowed for transfer.
		        <br /><br />
		        This project was developed for the module CS3103, Computer Neworks Practice, offered in NUS.
		      </p>
		    </Cell>
		    <Cell columns={2}></Cell>
		  </Row>
		  <Row className="content-grid-row">
	      	<Cell columns={2}></Cell>
	      	<Cell columns={8}>
		      <p className="content-title">My Responsibilities</p>
		      <div className="content-text">
		        In a team of four, I:
		        <ul id="responsibility-list">
		          <li>Suggested the initial overall architecture</li>
		          <li>Created Heartbat protocol for Tracker and Peers</li>
		        </ul>
		      </div>
		    </Cell>
		    <Cell columns={2}></Cell>
		  </Row>
		</Grid>
	  </div>
    );
  }
}

export default P10004;