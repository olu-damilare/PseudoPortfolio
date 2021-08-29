import React from 'react'
import Button from './button'
import heart from '../img/heart.png';
import {Link } from 'react-router-dom'

 
const Header = () => {
    return (
        <header>
            <div className="header_left">
                <img src={heart} alt = "heart"/>
                <p className="name"><Link to="/"> Olu Jolayemi </Link> </p>
            </div>
            <div className="header_right">
                <Link className = "link" to="/articles">Articles</Link>
                <Link className = "link" to="/#/">Snippets</Link>
                <Link className = "link" to="/about">About</Link>
                <Button name="Contact" className="contact"/>
            </div>

              
        </header>
    )
}

export default Header
