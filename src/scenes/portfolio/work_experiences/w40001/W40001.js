import React, { Component } from 'react';
import './style.scss';

import {TopAppBarFixedAdjust} from '@material/react-top-app-bar';
import banner from './img/banner.png';
import TagList from 'components/taglist/TagList';
import PortfolioMetadata from 'scenes/portfolio/PortfolioMetadata';
import {Cell, Grid, Row} from '@material/react-layout-grid';
import Carousel from 'components/carousel/Carousel';

import firstPR from './img/first_pull_request.png';
import rsvpMainIphone from './img/rsvp_main_iphone.png';
import rsvpMainIpad from './img/rsvp_main_ipad.png';
import sortEventIpad from './img/sort_event_ipad.png';
import dws from './img/dws.png';

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
		    <Row>
		      <Cell columns={1} phoneColumns={2}></Cell>
		      <Cell columns={10} phoneColumns={8}>
		        <div className="testimonial-background">
		          <div className="testimonial-content">
		            <p>"As his mentor, I found Marcus to be an independent learner as he had required only little guidance from myself. He managed to learn fast and picked up mobile development within a month without prior experience. He was receptive in suggestions for improvements and showed plenty of desire to learn.</p>
                    <p>Throughout his internship, Marcus has been diligent in his work. He took responsibility in finishing his work on time and produced quality work. From his pull requests and extensive documentation, one can tell that he took his work very seriously. As his code reviewer, I rarely found any issues with his code, other than suggestions on how to write cleaner code which he would swiftly amend and took note of for future references.</p> 
                    <p>As part of his work, Marcus was required to convert software requirements and designs into an actual working mobile application. Being detail orientated, he would clarify ambiguous items with our project manager and designer. He was particularly thoughtful of the user experience and was comprehensive in ensuring that the app works well across all iOS devices.</p>
                    <p>Since our company is based in 4 cities, Marcus was required to work remotely with other team members based in Malaysia, Taiwan and Hong Kong. Despite this and being new, he managed to communicate well and built rapport with the team. As a testament, he is missed dearly by his team mates.</p>
                    <p>I am pleased to have had the opportunity to work with Marcus and I think he would be a great member to any team he joins. I wish him all the best in his final year of studies and look forward to him returning to Micepad as a full time member."</p>
		          </div>
		          <div className="testimonial-recommender">
		            <p className="name">James Gwee</p>
		            <p className="designature">Chief Technology Officer</p>
		          </div>
		        </div>
		      </Cell>
		      <Cell columns={1} phoneColumns={2}></Cell>
		    </Row>
		    <Row className="content-grid-row">
		      <Cell columns={2}></Cell>
	      	  <Cell columns={8}>
	      	    <p className="content-title">My Journey</p>
	      	  </Cell>
	      	  <Cell columns={2}></Cell>
		    </Row>
		    <Row>
		      <Cell columns={2}></Cell>
	      	  <Cell columns={4} tabletColumns={8}>
	      	    <p className="content-text">
	      	      I joined the team without any prior knowledge on iOS development and Objective-C nor did I have any experience working with macOS.
	      	      The initial learning curve, thus, was very steep.
	      	      Not only did I need to learn to work with using a new OS, I had to learn a new programming language, as well as the many different tools that I would be using for development.
	      	      Thanks to the videos by Devslopes, I was able to quickly learn the basics and deliever my first pull request in 1 week.
	      	    </p>
	      	  </Cell>
	      	  <Cell columns={4} tabletColumns={8}>
	      	    <img src={firstPR} className="content-image-fill-grid" alt='firstPR'/>
		      </Cell>
	      	  <Cell columns={2}></Cell>
		    </Row>
		    <Row className="content-grid-subrow">
		      <Cell columns={2}></Cell>
		      <Cell columns={4} tabletColumns={8} id="cell-rsvp-main-lhs">
		        <img src={rsvpMainIphone} className="content-image-fill-grid" alt='rsvpMainIphone' />  
		      </Cell>
	      	  <Cell columns={4} tabletColumns={8} id="cell-rsvp-main-rhs">
	      	    <p className="content-text">
	      	      Slowly, I moved away from building individual small UI components to building more complex deliverables based on the blueprint design provided by the UI/UX designer.
	      	      My first challenge was to give the login page a makeover.
	      	    </p>
	      	    <img src={rsvpMainIpad} className="content-image-fill-grid" id="rsvpMainIpad" alt='rsvpMainIpad' />
	      	  </Cell>
	      	  <Cell columns={2}></Cell>
		    </Row>
		    <Row className="content-grid-subrow">
		      <Cell columns={2}></Cell>
	      	  <Cell columns={8}>
	      	    <p className="content-text">
	      	      As I got more familiar with the UI design and structure, the level of difficulty of tasks increases.
	      	      Besides creating and fixing static UI, I had had the opportunity to create more dynamic UI such as presenting search results based on user's search input.
	      	    </p>
	      	  </Cell>
	      	  <Cell columns={2}></Cell>
		    </Row>
		    <Row className="content-grid-subrow">
		      <Cell columns={2}></Cell>
	      	  <Cell columns={8}>
	      	    <img src={sortEventIpad} className="content-image-fill-grid" alt='sortEventIpad' />
	      	  </Cell>
	      	  <Cell columns={2}></Cell>
		    </Row>
		    <Row className="content-grid-subrow">
		      <Cell columns={2}></Cell>
	      	  <Cell columns={8}>
	      	    <p className="content-text">
	      	      For my internship, there was no hard and fast guidelines or fixed training programme.
	      	      Although we observed the Agile SDLC on a weekly basis, there were rooms for negotiation.
	      	      The faster I clear my assigned task, the higher the chance I could ask to try working on something new, something challenging.
	      	      By doing so allowed me to gain more experience and have a fulfiling internship. 
	      	    </p>
	      	  </Cell>
	      	  <Cell columns={2}></Cell>
		    </Row>
		    <Row className="content-grid-row">
		      <Cell columns={2}></Cell>
	      	  <Cell columns={8}>
	      	    <p className="content-title">DWS Asia Investment Submit 2018</p>
	      	  </Cell>
	      	  <Cell columns={2}></Cell>
		    </Row>
		    <Row>
		      <Cell columns={2}></Cell>
	      	  <Cell columns={4} tabletColumns={8}>
	      	    <p className="content-text">
	      	      In May 2018, I was given the opportunity to assist as a receptionist in the DWS flagship event, where investors from around the globe meet for discussion.
	      	      During this event, I got to interact with organisers from Hong Kong and Germany and understand their working culture, as well as investors from different parts of the world.
	      	      Besides helping to check in attendees using our app, I was able to get firsthand feedbacks from the users.
	      	      Collecting feedbacks is very important for developers as it helps us to improve the products we are developing.
	      	    </p>
	      	  </Cell>
	      	  <Cell columns={4} tabletColumns={8}>
	      	    <img src={dws} className="content-image-fill-grid" id="dws-reception" alt='dws'/>
		      </Cell>
	      	  <Cell columns={2}></Cell>
		    </Row>
		    <Row className="content-grid-row">
		      <Cell columns={2}></Cell>
	      	  <Cell columns={8}>
	      	    <p className="content-title">Kuala Lumpur Trip</p>
	      	  </Cell>
	      	  <Cell columns={2}></Cell>
		    </Row>
		    <Row className="content-grid-row">
		      <Cell columns={2}></Cell>
	      	  <Cell columns={8}>
	      	    <p className="content-title">Retrospect</p>
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