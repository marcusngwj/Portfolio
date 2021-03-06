import React, { Component } from 'react';
import './style.scss';

import {TopAppBarFixedAdjust} from '@material/react-top-app-bar';
import banner from './img/banner.png';
import TagList from 'components/taglist/TagList';
import PortfolioMetadata from 'scenes/portfolio/PortfolioMetadata';
import {Cell, Grid, Row} from '@material/react-layout-grid';

import punchLogo from './img/punch_logo.png';
import ButtonIconPng from 'components/button/ButtonIconPng';
import ButtonIconGithub from 'components/button/ButtonIconGithub';

import ErDiagram from './img/er_diagram.png';
import Trigger1 from './img/trigger1.png';
import Trigger2 from './img/trigger2.png';
import Carousel from 'components/carousel/Carousel';
import PopupInvest from './img/popup_invest.gif';

class P10005 extends Component {
  render() {
    return (
      <div className="p10005">
      	<TopAppBarFixedAdjust>
	      <img src={banner} className="banner" alt="banner_p10005"/>
	      <TagList list={new PortfolioMetadata().getTagList('p10005')} tagClassName="tag"/>
	      <div className="button-container">
	        <ButtonIconPng className="button" outlined label='Project' url='https://cs2102-crowdfunding.herokuapp.com/' icon={punchLogo} />
	        <ButtonIconGithub className="button" outlined label='Github' url='https://github.com/CS2102Group18/CS2102' />
	      </div>
	      <Grid>
	        <Row>
	      	  <Cell columns={2}></Cell>
	      	  <Cell columns={8}>
		        <p className="content-title">Summary</p>
		        <p className="content-text">
		          A database project designed for module CS2102, an introductory module for database systems in NUS, over the course of 13 weeks.
		          We were assigned different topics and were required to work in teams of 4.
		          My group was assigned to design a crowdfunding web application.
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
		          As one of the project requirement was to host our website locally using Bitnami stacks and Apache server, we did not host it on any remote server.
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
		  <Grid>
	        <Row className="content-grid-row">
	      	  <Cell columns={2}></Cell>
	      	  <Cell columns={8}>
		        <p className="content-title">Database</p>
		        <p className="content-text">
		          My primary responsibility for this project was to create and maintain the database.
		          I am glad that I had the opportunity to design the schema, as well as various triggers. 
		        </p>
		      </Cell>
		      <Cell columns={2}></Cell>
		    </Row>
		    <Row className="content-grid-subrow">
	      	  <Cell columns={2}></Cell>
	      	  <Cell columns={4} tabletColumns={8} id="cell-er-diagram-img">
	      	    <img src={ErDiagram} className="content-image-fill-grid" alt='ER Diagram'/>
		      </Cell>
		      <Cell columns={4} tabletColumns={8} id="cell-er-diagram-text">
		        <p className="content-subtitle">ER Diagram</p>
		        <p className="content-text">
		          This was the Entity-Relationship diagram I designed for our project.
		          A member can represent either an entrepreneur or an investor.
		          In the relational schema, I had combined the relation 'advertise' and 'project'.
		          As any project can only be advertised by exactly 1 entrepreneur, there is an 1-to-1 relationship between the entrepreneur and his advertised project.
		          This schema is in 3NF. 
		        </p>
		      </Cell>
		      <Cell columns={2}></Cell>
		    </Row>
		    <Row className="content-grid-subrow">
	      	  <Cell columns={2}></Cell>
	      	  <Cell columns={4} tabletColumns={8}>
	      	    <p className="content-subtitle">Triggers</p>
		        <p className="content-text">
		          These triggers help to ensure the integrity of data in the database.
		          They are automatically executed when a Data Manipulation Language (DML) event occurs in the database server.
		        </p>
		      </Cell>
		      <Cell columns={4} tabletColumns={8}>
		        <Carousel settings={{dots: true,
		        	                 arrows: false,
                                     infinite: true,
                                     speed: 500,
                                     slidesToShow: 1,
                                     slidesToScroll: 1,
                                     autoplay: true}}>
		          <img src={Trigger1} alt='Trigger 1' />
		          <img src={Trigger2} alt='Trigger 2' />
		        </Carousel>
		      </Cell>
		      <Cell columns={2}></Cell>
		    </Row>
		    <Row id="row-title-ui">
		      <Cell columns={2}></Cell>
	      	  <Cell columns={8}>
	      	    <p className="content-title">User Interface</p>
	      	  </Cell>
	      	  <Cell columns={2}></Cell>
		    </Row>
		    <Row>
	      	  <Cell columns={2}></Cell>
	      	  <Cell columns={5} tabletColumns={8}>
		        <img src={PopupInvest} className="content-image-fill-grid" id="img-popup-invest" alt='Invest Popup Gif'/>
		      </Cell>
		      <Cell columns={3} phoneColumns={4} tabletColumns={8}>
		        <p className="content-text">
		          I also worked on some components on the front-end.
		          Beside this pop-up form, I also worked on some front-end logic such as the search function to filter the projects for display.
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

export default P10005;