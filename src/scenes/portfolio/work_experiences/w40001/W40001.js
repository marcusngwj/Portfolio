import React, { Component } from 'react';
import './style.scss';

import {TopAppBarFixedAdjust} from '@material/react-top-app-bar';
import banner from './img/banner.png';
import TagList from 'components/taglist/TagList';
import PortfolioMetadata from 'scenes/portfolio/PortfolioMetadata';
import {Cell, Grid, Row} from '@material/react-layout-grid';

class W40001 extends Component {
  render() {
    return (
      <div className="w40001">
      	<TopAppBarFixedAdjust>
	      <img src={banner} className="banner" alt="banner_w40001"/>
	      <TagList list={new PortfolioMetadata().getTagList('w40001')} tagClassName="tag"/>
	      <Grid>
	        <Row>
	      	  <Cell columns={2}></Cell>
	      	  <Cell columns={8}>
		        <p className="content-title">Summary</p>
		        <p className="content-text">
		          <a target='_blank' rel='noopener noreferrer' href="https://www.micepadapp.com/">Micepad</a> is an event platform that is widely used in the MICE (Meeting, Incentives, Conferences and Exibitions) industry in Southeast Asia.
		          It strives to bring excitement and engagement for the participants and organisers.
		          In January 2018, I joined the team as an iOS intern, working alongside the Chief Technology Officer (CTO), as well as other developers situated in Malaysia.
		          Occassionally, I have to collaborate with sales and business teams from Taiwan and Hong Kong.
		        </p>
		      </Cell>
		      <Cell columns={2}></Cell>
		    </Row>
		    <Row className="content-grid-row">
	      	  <Cell columns={2}></Cell>
	      	  <Cell columns={8}>
		        <p className="content-title">My Responsibilities</p>
		        <div className="content-text">
		          As an iOS intern, my primary responsibilities were to:
		          <ul>
		            <li>Develop front-end applications using Objective-C</li>
		            <li>Convert software requirements into working solutions</li>
		            <li>Ensure the performance, quality and responsiveness of applications</li>
		            <li>Help to maintain code quality and organization</li>
		            <li>Collaborate with cross-functional teams from overseas to design and publish features</li>
		          </ul>
		          During peak period when there was a surge in the number of ongoing events, I was given opportunities to assist the business team at the event location.
		          Hence, my secondary responsibilities were to:
		          <ul>
		            <li>Provide on-site technical assistance</li>
		            <li>Assist work at the reception</li>
		          </ul>
		        </div>
		      </Cell>
		      <Cell columns={2}></Cell>
		    </Row>
		  </Grid>
      	</TopAppBarFixedAdjust>
      </div>
    );
  }
}

export default W40001;