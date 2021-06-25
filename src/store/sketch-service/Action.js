import axios from 'axios';
import {
  SAVE_SKETCHES_DATA
} from './ActionType'


export function saveSketchDataSuccess (data=[]) {
   console.log("data in data..",data);
  return {
    type: SAVE_SKETCHES_DATA,
    payload: data,
  }
}

export const getSketchDataFromJson = ()=> (dispatch)=>{
  console.log("getSketchDataFromJson...");
  // return function (dispatch) {

  console.log("getSketchDataFromJson...dispatch..");
    return axios.get('/api-data/sketches-data.json').then((response)=>{
        const {data = {}} = response
        const {sketches = [] } = data
      console.log("sketches..",sketches);
      dispatch(saveSketchDataSuccess(sketches))
    }).catch(err=>console.log(err))
  //} 
}
