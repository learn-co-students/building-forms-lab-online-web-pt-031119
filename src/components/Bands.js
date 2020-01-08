import React from 'react'

const Bands = ({bands}) => bands.map(band => <li key={band.name}>{band.name}</li>)

export default Bands