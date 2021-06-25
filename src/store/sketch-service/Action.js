import axios from 'axios';

export function getSketchDataFromJson(){
    axios.get('/api-data/sketches-data.json').then((response)=>{
        const {data = {}} = response
        const {sketches = [] } = data
      console.log("sketches..",sketches);
    }).catch(err=>console.log(err))
}