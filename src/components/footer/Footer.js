import React, { Component } from 'react'
import './Footer.css'

export class Footer extends Component {
    render() {
        return (
        <div className='footer-container'>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <small class='website-rights'>DRAWING DREAMS © 2021</small>
                    <div class='social-icons'>
                        <a
                            class='social-icon-link'
                            href='https://www.facebook.com/mohit2407'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i class='fab fa-facebook-f' />
                        </a>
                        <a
                            class='social-icon-link'
                            href='https://www.instagram.com/mohit_m_sharma2407/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i class='fab fa-instagram' />
                        </a>
                        <a
                            class='social-icon-link'
                            href='https://www.linkedin.com/in/mohitusharma2407/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i class='fab fa-linkedin' />
                        </a>
                    </div>
                </div>
            </section>
        </div>)
    }
}

export default Footer
