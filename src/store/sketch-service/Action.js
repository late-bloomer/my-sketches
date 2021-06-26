import axios from 'axios';
import {
  SAVE_SKETCHES_DATA
} from './ActionType'


export function saveSketchDataSuccess (data=[]) {
  return {
    type: SAVE_SKETCHES_DATA,
    payload: data,
  }
}

export const getSketchDataFromJson = ()=> {
  return function(dispatch){
    return axios.get('/api-data/sketches-data.json').then((response)=>{
      const {data = {}} = response
      const {sketches = [] } = data
      dispatch(saveSketchDataSuccess(sketches))
  }).catch(err=>console.log(err))
}}
