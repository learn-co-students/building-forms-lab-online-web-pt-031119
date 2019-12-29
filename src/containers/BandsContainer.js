import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'


class BandsContainer extends Component {

  renderBands = () => this.props.bands.map((band, index) => <li key={index}>{band.name}</li>)

  render() {
    return(
      <div>
        <div>
          <BandInput addBand={this.props.addBand} />
        </div>
        <ul>
          {this.renderBands()}
        </ul>
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
    addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData })
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
