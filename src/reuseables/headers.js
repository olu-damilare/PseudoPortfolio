import React from 'react'
import Button from './button'
import heart from '../img/heart.png';

 
const Header = () => {
    return (
        <header>
            <div className="header_left">
                <img src={heart} alt = "heart"/>
                <p className="name">Olu Jolayemi</p>
            </div>
            <div className="header_right">
                <a href="#" target="_blank" id="article">Articles</a>
                <a href="#" target="_blank" id="snippets">Snippets</a>
                <a href="#" target="_blank" id="about">About</a>
                <Button name="Contact" className="contact"/>
            </div>
        </header>
    )
}

export default Header
