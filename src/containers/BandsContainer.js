import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import { connect } from 'react-redux';

class BandsContainer extends Component {

renderInput = () => {
  return <ul><BandInput addBand={this.props.addband} renderbands={this.props.bands.map(b => {
    // debugger
    return <li>{b.name}</li>
    })}></BandInput></ul>
}

  render() {
    return(
      <div>
        {this.renderInput()}
      </div>
    )
  }

// renderbands = () => {
//     this.props.bands.map(b => {
//     return <li>{b}</li>
//     })
//   }
}

export const addband = band => {
    return {
      type: 'ADD_BAND',
      band: band
    }
}


export const mapStateToProps = (state) => {
  return {bands: state.bands}
}

export default connect(mapStateToProps,{addband})(BandsContainer)
