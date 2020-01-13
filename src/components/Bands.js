import React from 'react';
// import { connect } from 'react-redux'

const Bands = props =>


  <div>
    
    {props.bands.map(band => <li key={band.name}>{band.name}</li>)}
  </div>


export default Bands;
