import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Button from '../button/Button'
import './NavBar.css'

function NavBar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    const handleClick = () => {
        setClick(!click)
    }
    const closeMobileMenu = () => {
        setClick(false)
    }

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton);
    return (
        <>
          <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/my-sketches" className="navbar-logo" onClick={closeMobileMenu}>
                    <i class="fab fa-firstdraft" />DRAWING DREAMS 
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/my-sketches" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/my-sketches/about-me" className='nav-links-mobile' onClick={closeMobileMenu}>
                               About Artist
                            </Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link to="/contact-me" className="nav-links" onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li> */}
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>About Artist</Button>
                    }
                </div>
          </nav>
        </>
    )
}

export default NavBar

