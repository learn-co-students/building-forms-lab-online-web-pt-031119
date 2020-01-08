import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import Bands from '../components/Bands'
import { connect } from 'react-redux'

class BandsContainer extends Component {

  addBand = newBand => {
    const action = {
      type: 'ADD_BAND',
      newBand
    }
    
    this.props.dispatch(action)
  }

  render() {
    const {bands} = this.props
    return(
      <div>
        <BandInput 
          addBand={this.addBand}
        />
        <div className="bands-list">
          <Bands bands={bands} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state.bands)
  return {bands: state.bands}
}

export default connect(mapStateToProps)(BandsContainer)
