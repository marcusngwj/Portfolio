import React, { Component } from 'react';
import './style.scss';

import {TopAppBarFixedAdjust} from '@material/react-top-app-bar';
import banner from './img/banner.png';
import TagList from 'components/taglist/TagList';
import PortfolioMetadata from 'scenes/portfolio/PortfolioMetadata';
import {Cell, Grid, Row} from '@material/react-layout-grid';
import ButtonIconGithub from 'components/button/ButtonIconGithub';
import ButtonIconTelegram from 'components/button/ButtonIconTelegram';

class P10002 extends Component {
  render() {
    return (
      <div className="p10002">
      	<TopAppBarFixedAdjust>
      	  <img src={banner} className="banner" alt="banner_p10002"/>
	      <TagList list={new PortfolioMetadata().getTagList('p10002')} tagClassName="tag"/>
	      <div className="button-container">
	        <ButtonIconTelegram className="button" outlined label='Telegram' url='https://t.me/kboxLyricsBot' />
	        <ButtonIconGithub className="button" outlined label='Github' url='https://github.com/ruiwen905/kboxLyricsBot' />
	      </div>
	      <Grid>
	        <Row>
	      	  <Cell columns={2}></Cell>
	      	  <Cell columns={8}>
		        <p className="content-title">Summary</p>
		        <p className="content-text">
		          A telegram bot that retrieves song lyrics from <a target='_blank' rel='noopener noreferrer' href="https://genius.com/">Genius</a> when provided with a song title or singer's name.
		          My friend and I created this during NUS Hack&Roll Hackathon in 2017.
		          After the hackathon, I further developed it to the current state.
		        </p>
		      </Cell>
		      <Cell columns={2}></Cell>
		    </Row>
		    <Row className="content-grid-row">
	      	  <Cell columns={2}></Cell>
	      	  <Cell columns={8}>
		        <p className="content-title">My Responsibilities</p>
		        <div className="content-text">
		          During the hackathon, the bot was built using our very limited knowledge of Python.
		          My role was to learn and perform web scrapping using Beautiful Soup Python Library and present the resulting lyrics directly to the user.
		          The bot was served locally from my laptop as we had not found a suitable server to host it.
		          <br /><br />
		          After the hackathon, I went to find ways to structure our code better and a more reliable method to retrieve data as compared to web scrapping.
		          Hence I:
		          <ul>
		            <li>Redesigned the overall architecture</li>
		            <li>Incorporated the use of Genius API</li>
		            <li>Hosted the bot on Heroku</li>
		          </ul>
		        </div>
		      </Cell>
		      <Cell columns={2}></Cell>
		    </Row>
		    <Row className="content-grid-row">
		      <Cell columns={2}></Cell>
	      	  <Cell columns={8}>
	      	    <p className="content-title">Motivation</p>
	      	  </Cell>
	      	  <Cell columns={2}></Cell>
		    </Row>
		    <Row>
		      <Cell columns={2}></Cell>
	      	  <Cell columns={8}>
	      	    <p className="content-text">
	      	      Initially, we did not have any idea what to build in 24 hours.
	      	      We just started our programming journey not long ago and were very inexperienced.
	      	      A friend from another team suggested that we can try learning Python and build a telegram bot, which was quite a hot topic in the hackathon, together with chrome extension.
	      	      As we were thinking about what one can do when using the messenger app, the idea of sharing struck us.
	      	      If we were to sing in a group, how frustrating would it be for someone who does not know the lyrics?
	      	      How convenient it would be if a person can quickly search for the lyrics and send it to everyone in the group chat, without leaving the messenging app.
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