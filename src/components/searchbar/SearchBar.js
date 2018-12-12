import React, {Component} from 'react';
import './style.scss';
import TextField, {HelperText, Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

class SearchBar extends Component {
  state = {value: 'Search'};

  clearInput = () => {
    console.log(this.state.value);
    if (this.state.value!='yay') {
      this.setState({value: 'oop'});
    }
  }

  render() {
    return (
      <div className="searchbar">
      	<TextField
          className="container"
      	  label='school'
          helperText={<HelperText>Eg. Skills / Project Titles </HelperText>}
          fullWidth={true}
          leadingIcon={<MaterialIcon
                        icon='search'
                        className="icon-search" />}
          trailingIcon={<MaterialIcon
                         icon='cancel'
                         className="button-cancel"
                         onClick={() => this.setState({value: ''})} />}
        >
          <Input className="input-area" id="search-bar-input"
            value={this.state.value}
            onChange={(e) => this.setState({value: e.target.value})}
          />
        </TextField>
      </div>
    );
  }
}

export default SearchBar;