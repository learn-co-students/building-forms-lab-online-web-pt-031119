import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addBand } from '../actions/bands';
import BandInput from '../components/BandInput';
import Bands from '../components/Bands';

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <Bands bands={this.props.bands.bands}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: (band) => dispatch(addBand(band))
  }
}

const mapStateToProps = state => {
  return {
    bands: state
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BandsContainer);

