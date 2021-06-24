import React, { Component } from 'react'
import Exhibition from '../exhibition/Exhibition'
import './Home.css'
import Draw1 from '../../pictures/rDraw1.jpg'
import Draw2 from '../../pictures/rDraw2.jpg'
import Draw3 from '../../pictures/rDraw3.jpg'

var slideIndex = 0;
var dotIndex = 0;
var images = [
    Draw1,
    Draw2,
    Draw3
]
var idSetTimeout = null;
export class Home extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
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
        if (dotIndex > 3) {dotIndex = 1}    
        for (i = 0; i < 3; i++) {
          dots[i].className = dots[i].className.replace("dot-active", "");
        } 
        dots[dotIndex-1].className += " dot-active";
        idSetTimeout = setTimeout(this.showSlides, 2500); // Change image every 2.5 seconds
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
                    </div>
                </div>
                <Exhibition />
            </>
        )
    }
}

export default Home
