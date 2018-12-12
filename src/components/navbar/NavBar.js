import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TopAppBar from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';
import './style.scss';

class NavBar extends Component {
  render() {
    return (
      <div>
        <TopAppBar
          className="navbar"
          navigationIcon={<Link to='/' ><MaterialIcon icon='home'/></Link>}

          actionItems={[<MaterialIcon key='item' 
                         icon='menu' 
                         className="hamburger-icon" 
                         onClick={() => console.log('sada')} />]}
        />
    </div>
    );
  }
}

export default NavBar;