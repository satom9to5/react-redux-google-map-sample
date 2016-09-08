import { connect } from 'react-redux'

import {
  centerChange,
  centerChangeSetTimeout,
  centerChangeTimeout,
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
    centerChange: (bounds, timeoutId) => {
      dispatch(centerChange(bounds, timeoutId))

      fetch(`/points?minlat=${bounds.southWest.lat}&maxlat=${bounds.northEast.lat}&minlng=${bounds.southWest.lng}&maxlng=${bounds.northEast.lng}`)
        .then(response => response.json())
        .then(json => dispatch(responsePoints(json)))
    },
    centerChangeTimeout: (timeoutId) => {
      dispatch(centerChangeTimeout(timeoutId))
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
