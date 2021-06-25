import React, { Component } from 'react'
import Exhibition from '../exhibition/Exhibition'
import './Home.css'

import Draw1 from '../../pictures/comDraw7.jpg'
import Draw2 from '../../pictures/comDraw6.jpg'
import Draw3 from '../../pictures/comDraw3.jpg'
import Draw4 from '../../pictures/comDraw1.jpg'

import Draw11 from '../../pictures/comDraw77.jpg'
import Draw22 from '../../pictures/comDraw66.jpg'
import Draw33 from '../../pictures/comDraw33.jpg'
import Draw44 from '../../pictures/comDraw11.jpg'


var slideIndex = 0;
var dotIndex = 0;
var images = window.innerWidth <= 550 ? [
    Draw11,
    Draw22,
    Draw33,
    Draw44
] : [
    Draw1,
    Draw2,
    Draw3,
    Draw4
]

var idSetTimeout = null;

export class Home extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        //idSetTimeout = setInterval(this.showSlides, 2300)
        this.showSlides()
    }

    showSlides = () => {
        let i;
        var slides = document.querySelector("#home-container");
        var dots = document.getElementsByClassName("dot");
        dotIndex++;
        slides.style.backgroundImage = "url(" + images[slideIndex] + ")";
        slideIndex = slideIndex + 1;
        if (slideIndex === images.length) {
            slideIndex =  0;
        }
        if (dotIndex > 4) {dotIndex = 1}    
        for (i = 0; i < 4; i++) {
          dots[i].className = dots[i].className.replace("dot-active", "");
        } 
        dots[dotIndex-1].className += " dot-active";
        idSetTimeout = setTimeout(this.showSlides, 2300); // Change image every 2.3 seconds
    }

    componentWillUnmount() {
        clearTimeout(idSetTimeout)
    }
    
    
    render() {
        return (
            <>
                <div id='home-container' className="home-container">
                    <h1>CANVAS OF LIFE AWAITS</h1>
                    <p>What are you waiting for?</p>
                    <div style={{"textAlign":"center"}}>
                        <span className="dot"></span> 
                        <span className="dot"></span> 
                        <span className="dot"></span> 
                        <span className="dot"></span> 
                    </div>
                    <div className="home-slider">
                       <i className="fas fa-angle-double-down"></i>
                    </div>
                </div>
                <Exhibition />
            </>
        )
    }
}

export default Home
