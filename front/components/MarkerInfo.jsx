import React, { Component, PropTypes } from 'react'

class MarkerInfo extends Component {
  render() {
    const { marker } = this.props
    return (
     <div>{marker.properties.P34_003}&nbsp;({marker.properties.P34_004})</div>
    )
  }
}

export default MarkerInfo
