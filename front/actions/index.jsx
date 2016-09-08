export const centerChange = (bounds, timeoutId) => {
  return {
    type: 'CENTER_CHANGE',
    bounds,
    timeoutId
  }
}

export const centerChangeTimeout = (timeoutId) => {
  return {
    type: 'CENTER_CHANGE_TIMEOUT',
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

