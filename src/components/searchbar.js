import React, {Component} from 'react';

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {searchTerm: ""}
  }

  render() {
    return (
      <main className="search-bar">
        <input type="input"
          value = {this.state.searchTerm}
          onChange={(e) => this.onInputChange(e.target.value)}
        >
        </input>
      </main>
    );
  }
  onInputChange(searchTerm) {
    this.setState({searchTerm});
    this.props.onSearchTermChange(searchTerm);
  }
}

export default Searchbar;
