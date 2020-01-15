import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import {connect} from 'react-redux'

class BandsContainer extends Component {
 
 
 
  render() {
    return(
      <div>
      <BandInput addBand ={this.props.addBand} renderbands={this.props.bands.map(b => {
    return <li>{b.name}</li>
    })}/>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
   bands: state.bands 
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    addBand: (band) => { dispatch( {type: 'ADD_BAND', band})}
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
