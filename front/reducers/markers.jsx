const marker = (state, action) => {
  switch (action.type) {
    case 'RESPONSE_POINTS':
      return {
        id: state.properties.P34_001 + '-' + state.properties.P34_003,
        position: {
          lat: state.geometry.coordinates[1],
          lng: state.geometry.coordinates[0],
        },
        defaultAnimation: 2,
        properties: state.properties,
        isShowInfo: false,
      }
    case 'MARKER_CLICK':
      if (state.id !== action.marker.id) {
        return state
      }

      return Object.assign({}, state, {
        isShowInfo: !state.isShowInfo
      })
    default:
      return state
  }
}

const markers = (state = [], action) => {
  switch (action.type) {
    case 'RESPONSE_POINTS':
      const stateIds = state.reduce((obj, point) => {
        obj[point.id] = point.isShowInfo
        return obj
      }, {})

      return action.points.map(p => {
        let m = marker(p, action)
        if (stateIds.hasOwnProperty(m.id)) {
          m.isShowInfo = stateIds[m.id]
        }
        return m
      })
    case 'MARKER_CLICK':
      return state.map(m =>
        marker(m, action)
      )
    default:
      return state
  }
}

export default markers
