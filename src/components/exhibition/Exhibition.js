import React from 'react'
import './Exhibition.css'
import Draw1 from '../../pictures/akku.jpg'
import Draw2 from '../../pictures/bhawna.jpg'
import Draw3 from '../../pictures/fox.jpg'
import CardItem from '../card-item/CardItem'

function Exhibition() {
    return (
        <div className='exhibition'>
            <div className='exhibition__header__text'>Check out my MAGICAL Sketches !!!</div>
            <div className='exhibition__container'>
                <div className='exhibition__wrapper'>
                    <ul className='exhibition__items'>
                        <CardItem
                            src={Draw1}
                            text='Seeing this is a kind of meditation. More you see, more you get addicted.'
                            label='Moksha'
                            secondText='Mohit Sharma'
                            //path='/services'
                        />
                        <CardItem
                            src={Draw2}
                            text="How you draw is a reflection of how you feel about the world. You're not capturing it, you're interpreting it."
                            label='Luxury'
                            secondText='Mohit Sharma'
                            // path='/services'
                        />
                    </ul>
                    <ul className='exhibition__items'>
                        <CardItem
                            src={Draw1}
                            text="How you draw is a reflection of how you feel about the world. You're not capturing it, you're interpreting it."
                            label='Mystery'
                            secondText='Mohit Sharma'
                            small
                            //path='/services'
                        />
                        <CardItem
                            src={Draw2}
                            text='Seeing this is a kind of meditation. More you see, more you get addicted.'
                            label='Adventure'
                            secondText='Mohit Sharma'
                            small
                            //path='/products'
                        />
                        <CardItem
                            src={Draw3}
                            text='Seeing this is a kind of meditation. More you see, more you get addicted.'
                            label='Adrenaline'
                            secondText='Mohit Sharma'
                            small
                            //path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
      );
}

export default Exhibition
