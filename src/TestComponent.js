import React from 'react';
import MenuSurface, {Corner} from '@material/react-menu-surface';
import Button from '@material/react-button';

class TestComponent extends React.Component {
  state = {
    open: false,
    anchorElement: null,
  };

  setAnchorElement = (element) => {
    if (this.state.anchorElement) {
      return;
    }
    this.setState({anchorElement: element});
  }

  render() {
    return (
      <div
        className='mdc-menu-surface--anchor'
        ref={this.setAnchorElement}
      >
        <Button raised onClick={() => this.setState({open: true})}>Open Menu</Button>

        <MenuSurface
          open={this.state.open}
          anchorCorner={Corner.BOTTOM_RIGHT}
          onClose={() => this.setState({open: false})}
          anchorElement={this.state.anchorElement}
        >
          <img
            style={{maxWidth: '20vw', maxHeight: '20vh'}}
            src='http://images.my.photo.url' />
        </MenuSurface>
      </div>
    );
  }
}

export default TestComponent;