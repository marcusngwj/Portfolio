import React, { Component } from 'react';
import './style.scss';

import {TopAppBarFixedAdjust} from '@material/react-top-app-bar';
import banner from './img/banner.png';
import TagList from 'components/taglist/TagList';
import PortfolioMetadata from 'scenes/portfolio/PortfolioMetadata';
import {Cell, Grid, Row} from '@material/react-layout-grid';

import ButtonIconGithub from 'components/button/ButtonIconGithub';

import architecture from './img/architecture.png';
import heartbeat from './img/heartbeat.png';

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
		  <Row className="content-grid-row">
		    <Cell columns={2}></Cell>
	      	<Cell columns={8}>
	      	  <p className="content-title">Overall Architecture</p>
	      	</Cell>
	      	<Cell columns={2}></Cell>
		  </Row>
		  <Row>
		    <Cell columns={2}></Cell>
	      	<Cell columns={8}>
	      	  <img src={architecture} className="content-image-fill-grid" alt='architecture'/>
	      	  <p className="content-text">
	      	    Initially, I suggested to have a separate relay entity outside of the tracker after some primary research on TURN server.
	      	    Peers could first contact the tracker and the tracker would update the relay entity with information of the peers, before exhanging information between peers via the relay, using only one communication channel.
	      	    <br /><br />
	      	    After discussing with my teammates, we decided on the above architecture, where the relay entity resides in the tracker to facilitate better passing of information from the tracker to the relay.
	      	    The tracker would remember the metadata of a peer whenever a new peer joins the network.
	      	    Permanent sockets for sending and receiving information from the tracker were also established.
	      	    Temporary communication channels would be established with the trakcer if a peer wishes to communicate with another peer.
	      	  </p>
	      	</Cell>
	      	<Cell columns={2}></Cell>
		  </Row>
		  <Row className="content-grid-row">
		    <Cell columns={2}></Cell>
	      	<Cell columns={8}>
	      	  <p className="content-title">Heartbeat Protocol</p>
	      	</Cell>
	      	<Cell columns={2}></Cell>
		  </Row>
		  <Row>
		    <Cell columns={2}></Cell>
	      	<Cell columns={8}>
	      	  <p className="content-text">
	      	    As the tracker kept a record of the peers in the network whenever a new peer joins the network, the list would increase in size over time.
	      	    There were no clean-up mechanism put in place for removing peers that were no longer in the network, either by quitting the program or leaving abruptly.
	      	    To resolve this issue, I proposed a top-down approach where the tracker initiates to send a heartbeat signal to every peer in its record at regular intervals.
	      	    Heartbeat signals would be sent on a separate thread so that it would not block any communication on the main thread.
	      	    However, due to the restriction caused by the NAT, implementation of such protocol would be challenging.
	      	    If we were to make use of the permanent connection established earlier, the heartbeat pulse might hinder important communication between the peer and the tracker.
	      	    Considering these challenges and to keep things simple, I decided to change it to a bottom-up approach where peer sends heartbeat signal to the tracker at regular intervals.
	      	    At regular intervals, the tracker would remove any peers that did not send a heartbeat signal.
	      	  </p>  
	      	</Cell>
	      	<Cell columns={2}></Cell>
		  </Row>
		  <Row className="content-grid-subrow">
		    <Cell columns={2}></Cell>
	      	<Cell columns={8}>
	      	  <img src={heartbeat} className="content-image-fill-grid" alt='heartbeat'/>
	      	</Cell>
	      	<Cell columns={2}></Cell>
		  </Row>
		</Grid>
	  </div>
    );
  }
}

export default P10004;