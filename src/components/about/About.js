import React, { Component } from 'react'
import './About.css'
import ME from '../../pictures/Me.jpg'

export class About extends Component {
    render() {
        return (
            <div className="about-container">
                <div className="about-text">
                    <div className="about-me-text">About Me</div>
                    <div className="about-me-para about-me-para-first">
                        Hi, I am Mohit,
                        An Enthusiastic Frontend Web Developer from Bangalore, India.
                        A Die-hard fan of Cricket, a sketch artist, an adventure junkie 
                        and having million dreams inside my heart<i className="fas fa-heart about-heart"></i>.
                    </div>
                    <div className="about-me-para about-me-para2">
                        When I am not coding, you will find me watching movie or on the 
                        cricket pitch.
                    </div>
                    <div className="about-me-para3">
                        Thank you for visiting me virtually. <span className='about-me-life'>Life is good !!!</span>
                    </div>
                </div>
                <div className="about-image">
                    <img src={ME} alt="Mohit Sharma" className="me-img" />
                </div>
            </div>
        )
    }
}

export default About
