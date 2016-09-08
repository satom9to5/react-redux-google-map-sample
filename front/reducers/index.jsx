import { combineReducers } from 'redux'
import bounds from './bounds'
import markers from './markers'
import timeoutId from './timeoutId'

const mapReducer = combineReducers({
  bounds,
  markers,
  timeoutId,
})

export default mapReducer
