import React, {Component} from 'react';
import './style.scss';

class HeaderBanner extends Component {
  render() {
    return (
      <div className="header-banner">
      	<div className="content">
	      <p className="title">Hello, I'm Marcus!</p>
	      <p className="subtitle">Final Year NUS Computer Science Undergraduate</p>
      	</div>
      </div>
    );
  }
}

export default HeaderBanner;