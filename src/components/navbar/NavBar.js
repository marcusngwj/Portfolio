import React, {Component} from 'react';
import TopAppBar from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';
import './style.scss';

class NavBar extends Component {
  render() {
    return (
      <div>
      <TopAppBar
        className="navbar"
        title='Testing navbar'
        navigationIcon={<MaterialIcon
          icon='home'
          onClick={() => console.log('click')}
        />}

        actionItems={[<MaterialIcon key='item' 
                       icon='menu' 
                       className='hamburger-icon' 
                       onClick={() => console.log('sada')}/>]}
      />
      
    </div>
    );
  }
}

export default NavBar;