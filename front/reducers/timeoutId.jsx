const timeoutId = (state = null, action) => {
  switch (action.type) {
    case 'MAP_IDLE':
      return action.timeoutId
    case 'MAP_IDLE_TIMEOUT':
      return null
    default:
      return state
  }
}

export default timeoutId
