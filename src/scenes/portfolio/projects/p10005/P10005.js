import React, { Component } from 'react';
import './style.scss';

import {TopAppBarFixedAdjust} from '@material/react-top-app-bar';
import banner from './img/banner.png';
import TagList from 'components/taglist/TagList';
import PortfolioMetadata from 'scenes/portfolio/PortfolioMetadata';
import {Cell, Grid, Row} from '@material/react-layout-grid';

class P10005 extends Component {
  render() {
    return (
      <div className="p10005">
      	<TopAppBarFixedAdjust>
	      <img src={banner} className="banner" alt="banner_p10005"/>
	      <TagList list={new PortfolioMetadata().getTagListFromProject('p10005')} />
	      <Grid>
	        <Row>
	      	  <Cell columns={2}></Cell>
	      	  <Cell columns={8}>
		        <p className="content-title">Summary</p>
		        <p className="content-text">
		          A database project designed for module CS2102, an introductory module for database systems in NUS, over the course of 13 weeks.
		          We were assigned different topics and were required to work in teams of 4.
		          My group was assigned to design a crowdfunding website.
		        </p>
		      </Cell>
		      <Cell columns={2}></Cell>
		    </Row>
		    <Row className="content-grid-row">
	      	  <Cell columns={2}></Cell>
	      	  <Cell columns={8}>
		        <p className="content-title">My Responsibilities</p>
		        <div className="content-text">
		          While the project was ongoing, I:
		          <ul>
		            <li>Created and maintained the database with PostgreSQL</li>
		            <li>Contributed to components used on the Front-end</li>
		            <li>Wrote project report</li>
		          </ul>
		          As one of the project requirement was to host our website locally using Bitnami stacks, we did not host it on any remote server.
		          However, after the project ended, I hosted the website on Heroku while making use of their PostgreSQL database.
		        </div>
		      </Cell>
		      <Cell columns={2}></Cell>
		    </Row>
		  </Grid>
		  <div className="problem-statement-container">	
		  	<Grid>
		  	  <Row>
		  	    <Cell columns={1}></Cell>
		  	    <Cell columns={10}>
		  	      <p className="problem-statement-title">Problem Statement</p>
		  	  	</Cell>
		  	  	<Cell columns={1}></Cell>
		  	  </Row>
		  	  <Row>
		  	    <Cell columns={1}></Cell>
		  	    <Cell columns={10}>
		  	      <p className="problem-statement-divider">───✱*.｡:｡✱*.:｡✧*.｡✰*.:｡✧*.｡:｡*.｡✱ ───</p>
		  	  	</Cell>
		  	  	<Cell columns={1}></Cell>
		  	  </Row>
		  	  <Row>
		  	    <Cell columns={1}></Cell>
		  	    <Cell columns={10}>
		  		  <p className="problem-statement-text">Design a crowdfunding website where projects are advertised by entrepreneurs and funded by investors.</p>
		  	  	</Cell>
		  	  	<Cell columns={1}></Cell>
		  	  </Row>
		  	</Grid>
		  </div>
      	</TopAppBarFixedAdjust>
      </div>
    );
  }
}

export default P10005;