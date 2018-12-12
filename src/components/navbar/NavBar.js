import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Path } from 'Path';
import TopAppBar from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';
import MenuSurface, { Corner } from '@material/react-menu-surface';

import './style.scss';

class NavBar extends Component {
  state = {
    open: false,
    anchorElement: null,
    coordinates: null
  };

  setAnchorElement = (element) => {
    if (this.state.anchorElement) {
      return;
    }
    this.setState({anchorElement: element});
  }

  render() {
    return (
      <div className="mdc-menu-surface--anchor" ref={this.setAnchorElement}>
        <TopAppBar
          className="navbar"
          navigationIcon={<Link to={Path.HOME} ><MaterialIcon icon='home'/></Link>}

          actionItems={[<MaterialIcon key='item' 
                         icon='menu' 
                         className="hamburger-icon" 
                         onClick={() => this.setState({open: true, 
                                                       coordinates: {x: this.state.anchorElement.lastChild.getBoundingClientRect().right, 
                                                                     y: this.state.anchorElement.lastChild.getBoundingClientRect().bottom} }) } />]}
        />
        <MenuSurface
          className="menu-list"
          open={this.state.open}
          onClose={() => this.setState({open: false, coordinates: null})}
          coordinates={this.state.coordinates}
        >
          <Link to={Path.ABOUT} className="menu-item"><h4>About</h4></Link>
          <Link to={Path.PORTFOLIO} className="menu-item"><h4>Portfolio</h4></Link>
          <a target='_blank' href={Path.RESUME} className="menu-item"><h4>Resume</h4></a>
          <Link to={Path.CONTACT} className="menu-item"><h4>Contact Me</h4></Link>
        </MenuSurface>
    </div>
    );
  }
}

export default NavBar;