import React, { Component } from 'react'
import BandInput from '../components/BandInput';
import { connect } from 'react-redux';
import Bands from '../components/Bands'

class BandsContainer extends Component {



  render() {

    console.log('props', this.props)
    const { bands, addBand } = this.props

    return(
      <div>

        <BandInput addBand={addBand} />
        <Bands bands={bands} />


      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return ({ addBand: band => dispatch({type: 'ADD_BAND', band}) })
}

const mapStateToProps = state => {
  return ({ bands: state.bands })
}



export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
