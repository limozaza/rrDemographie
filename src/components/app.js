import React, { Component } from 'react';

import SearchBar from '../containers/SearchBar';

const DEFAULT_COUNTRY = 'France';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar defaultCountry={DEFAULT_COUNTRY}/>
      </div>
    );
  }
}
