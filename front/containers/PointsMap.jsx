import { connect } from 'react-redux'

import {
  mapIdle,
  mapIdleSetTimeout,
  mapIdleTimeout,
  responsePoints,
  markerClick
} from '../actions'

import PointsMap from '../components/PointsMap'

const mapStateToProps = (state) => {
  return {
    bounds: state.bounds,
    markers: state.markers,
    timeoutId: state.timeoutId,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    mapIdle: (bounds, timeoutId) => {
      dispatch(mapIdle(bounds, timeoutId))

      fetch(`/points?minlat=${bounds.southWest.lat}&maxlat=${bounds.northEast.lat}&minlng=${bounds.southWest.lng}&maxlng=${bounds.northEast.lng}`)
        .then(response => response.json())
        .then(json => dispatch(responsePoints(json)))
    },
    mapIdleTimeout: (timeoutId) => {
      dispatch(mapIdleTimeout(timeoutId))
    },
    markerClick: (marker) => {
      dispatch(markerClick(marker))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PointsMap)
