import React, { Component } from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getCountries,getMortality} from '../actions/index';

class SearchBar extends Component {

  constructor(props){
    super(props);
    this.state={selectedCountry: this.props.defaultCountry}
  }

  componentWillMount(){
      this.props.getCountries();
  }

  search = (e) => {
    this.setState(
      {
        selectedCountry: e.target.value
      },
      ()=>{
        this.props.getMortality(this.state.selectedCountry)
      }
    )
  }


  renderSelectBox = () => {
    const {countries} = this.props;
    //console.log(countries);
    if(countries){
      return(
        <select value={this.state.selectedCountry} className="col-md-12 input-group" onChange={(e)=>this.search(e)}>
          {
            countries.map(
                (countrie) => 
                {
                  return(
                    <option key={countrie} value={countrie}>
                      {countrie}
                    </option>
                  )
                  
                }
              )
          }
        </select>
      );
    }
    else {
      return(
        <p>Chargement ....</p>
      )
    }
  };

  render() {
    return (
      <div className="search_bar">
        {this.renderSelectBox()}
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
    return bindActionCreators({getCountries,getMortality},dispatch);
};
export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);