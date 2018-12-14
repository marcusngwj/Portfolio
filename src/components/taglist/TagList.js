import React, { Component } from 'react';
import './style.scss';

import {ChipSet, Chip} from '@material/react-chips';

class TagList extends Component {
  render() {
    return (
      <ChipSet className="taglist">       
        {this.props.list.map((label) => <Chip id={label} key={label} label={label} className="tag"/>)}
      </ChipSet>
    );
  }
}

export default TagList;