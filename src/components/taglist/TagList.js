import React, { Component } from 'react';
import './style.scss';

import {ChipSet, Chip} from '@material/react-chips';

class TagList extends Component {
  render() {
    return (
      <ChipSet className={"taglist-main-class " + this.props.className}>       
        {this.props.list.map((label) => <Chip id={label} key={label} label={label} className={"tag-main-class " + this.props.tagClassName}/>)}
      </ChipSet>
    );
  }
}

export default TagList;