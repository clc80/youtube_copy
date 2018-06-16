import React, {Component} from 'react';

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {searchTerm: ""}
  }

  render() {
    return (
      <main>
        <h1 > Searchbar </h1>
        <input type="input"
          value = {this.state.searchTerm}
          onChange={(e) => this.setState({searchTerm: e.target.value})}
        >

        </input>
      </main>
    )
  }
}

export default Searchbar;
