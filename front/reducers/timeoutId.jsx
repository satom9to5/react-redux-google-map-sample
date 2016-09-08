const timeoutId = (state = null, action) => {
  switch (action.type) {
    case 'CENTER_CHANGE':
      return action.timeoutId
    case 'CENTER_CHANGE_TIMEOUT':
      return null
    default:
      return state
  }
}

export default timeoutId
