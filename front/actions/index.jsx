export const mapIdle = (bounds, timeoutId) => {
  return {
    type: 'MAP_IDLE',
    bounds,
    timeoutId
  }
}

export const mapIdleTimeout = (timeoutId) => {
  return {
    type: 'MAP_IDLE_TIMEOUT',
    timeoutId
  }
}

export const responsePoints = (points) => {
  return {
    type: 'RESPONSE_POINTS',
    points
  }
}

export const markerClick = (marker) => {
  return {
    type: 'MARKER_CLICK',
    marker
  }
}

