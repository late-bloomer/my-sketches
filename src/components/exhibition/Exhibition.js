import React, {useState, useEffect} from 'react'
import './Exhibition.css'
import CardItem from '../card-item/CardItem'

function Exhibition({sketchData}) {
    const [exhibitionSketchDataFirstTwo, setExhibitionSketchDataFirstTwo] = useState([])
    const [exhibitionSketchDataRest, setExhibitionSketchDataRest] = useState([])
    
    useEffect(() => {
       if(sketchData.length>0){
           const tempData = convertToDesireData(sketchData)
            setExhibitionSketchDataFirstTwo(tempData[0])
            setExhibitionSketchDataRest(tempData[1])
       }
    }, [sketchData])

    const convertToDesireData = (sketches=[]) => {
        let tempArrFirst = []
        let tempArrRest = []
        tempArrFirst.push(sketches.slice(0,2));
        let countArr = (sketches.length-2) / 3; //making chunk of threes
        let start = 2;
        for(let index=0 ; index<countArr ; index++){
            let chunk = sketches.slice(start, start+3)
            tempArrRest.push(chunk)
            start= start+3;
        }
        return [tempArrFirst, tempArrRest];
    }

    return (
        <div className='exhibition'>
            <div className='exhibition__header__text'>Check out my MAGICAL Sketches !!!</div>
            <div className='exhibition__container'>
                <div className='exhibition__wrapper'>
                    {exhibitionSketchDataFirstTwo && exhibitionSketchDataFirstTwo.length>0 && 
                    exhibitionSketchDataFirstTwo.map((data, key)=>(
                    <ul className='exhibition__items' key={key}>
                        <CardItem
                            src={process.env.PUBLIC_URL + data[0].image}
                            text={data[0].quote}
                            label={data[0].name}
                            key={data[0].name}
                            secondText={data[0].quote_writer}
                            type={data[0].type}
                            //path='/services'
                        />
                        <CardItem
                            src={process.env.PUBLIC_URL + data[1].image}
                            text={data[1].quote}
                            label={data[1].name}
                            key={data[1].name}
                            secondText={data[1].quote_writer}
                            type={data[1].type}
                            //path='/services'
                        />
                    </ul>))}
                    {exhibitionSketchDataRest && exhibitionSketchDataRest.length>0 && 
                    exhibitionSketchDataRest.map((data, key)=>(
                    <ul className='exhibition__items' key={key}>
                        {data[0] && <CardItem
                            src={process.env.PUBLIC_URL + data[0].image}
                            text={data[0].quote}
                            label={data[0].name}
                            key={data[0].name}
                            secondText={data[0].quote_writer}
                            type={data[0].type}
                            //path='/services'
                        />}
                        {data[1] && <CardItem
                            src={process.env.PUBLIC_URL + data[1].image}
                            text={data[1].quote}
                            label={data[1].name}
                            key={data[1].name}
                            secondText={data[1].quote_writer}
                            type={data[1].type}
                            //path='/services'
                        />}
                        {data[2] && <CardItem
                            src={process.env.PUBLIC_URL + data[2].image}
                            text={data[2].quote}
                            label={data[2].name}
                            key={data[2].name}
                            secondText={data[2].quote_writer}
                            type={data[2].type}
                            //path='/services'
                        />}
                    </ul>))}
                </div>
            </div>
        </div>
      );
}

export default Exhibition
