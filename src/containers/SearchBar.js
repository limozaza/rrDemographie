import React, { Component } from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getCountries} from '../actions/index';

class SearchBar extends Component {


  componentWillMount(){
      this.props.getCountries();
  }  
  render() {
    return (
      <div>
        dsds
      </div>
    );
  }
}
const mapStateToProps = (state) => {
    return {
        countries: state.countries
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({getCountries},dispatch);
};
export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);