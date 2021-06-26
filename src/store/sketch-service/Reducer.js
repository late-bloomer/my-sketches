import {
    SAVE_SKETCHES_DATA
  } from './ActionType'
  
  export const initialState = {
    sketches:[]
  }
  
  export default function sketchReducer (state = initialState, action = {}) {
    const { type ='', payload = [] } = action
    switch (type) {
      case SAVE_SKETCHES_DATA:
        return {
          ...state,
          sketches: payload
        }
      default:
        return state
    }
  }