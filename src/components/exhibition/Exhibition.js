import React from 'react'
import './Exhibition.css'
import Draw1 from '../../pictures/akku.jpg'
import Draw2 from '../../pictures/bhawna.jpg'
import Draw3 from '../../pictures/fox.jpg'
import CardItem from '../card-item/CardItem'

function Exhibition() {
    return (
        <div className='exhibition'>
            <h1>Check out these MAGICAL Sketches !!!</h1>
            <div className='exhibition__container'>
                <div className='exhibition__wrapper'>
                    <ul className='exhibition__items'>
                        <CardItem
                            src={Draw1}
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            //path='/services'
                        />
                        <CardItem
                            src={Draw2}
                            text='Travel through the Islands of Bali in a Private Cruise'
                            label='Luxury'
                            // path='/services'
                        />
                    </ul>
                    <ul className='exhibition__items'>
                        <CardItem
                            src={Draw1}
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Mystery'
                            //path='/services'
                        />
                        <CardItem
                            src={Draw2}
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='Adventure'
                            //path='/products'
                        />
                        <CardItem
                            src={Draw3}
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            //path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
      );
}

export default Exhibition
