import { combineReducers } from 'redux'
import sketchReducer from './sketch-service/Reducer'

const rootReducer = combineReducers({
    sketchReducer,
  });
  
export default rootReducer