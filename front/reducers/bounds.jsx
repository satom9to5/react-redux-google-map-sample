const initialBounds = {
  center: {
    lat: 33.59264299,
    lng: 130.39957125,
  },
  southWest: {
    lat: 33.5779850057,
    lng: 130.3761609336,
  },
  northEast: {
    lat: 33.6073984893,
    lng: 130.4229815742,
  }
}

const bounds = (state = initialBounds, action) => {
  switch (action.type) {
    case 'MAP_IDLE':
      return action.bounds
    default:
      return state
  }
}

export default bounds
