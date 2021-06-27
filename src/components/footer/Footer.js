import React, { Component } from 'react'
import './Footer.css'

export class Footer extends Component {
    render() {
        return (
        <div className='footer-container'>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <small className='website-rights'>
                        DRAWING DREAMS © 2021
                        <i className="fas fa-heart footer-heart"></i>
                    </small>
                    <div className='social-icons'>
                        <a
                            className='social-icon-link'
                            href='https://www.facebook.com/mohit2407'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i className='fab fa-facebook-f' />
                        </a>
                        <a
                            className='social-icon-link'
                            href='https://www.instagram.com/mohit_m_sharma2407/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i className='fab fa-instagram' />
                        </a>
                        <a
                            className='social-icon-link'
                            href='https://www.linkedin.com/in/mohitusharma2407/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin' />
                        </a>
                    </div>
                </div>
            </section>
        </div>)
    }
}

export default Footer
