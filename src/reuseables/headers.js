import React from 'react'
import Button from './button'
import heart from '../img/heart.png';
import {BrowserRouter as Router,
    Switch,
    Route, Link } from 'react-router-dom'
import Articles from '../articles';

 
const Header = () => {
    return (
        <Router>
            <header>
                <div className="header_left">
                    <img src={heart} alt = "heart"/>
                    <p className="name">Olu Jolayemi</p>
                </div>
                <div className="header_right">
                    <Link className = "link" to="/articles">Articles</Link>
                    <Link className = "link" to="/#/">Snippets</Link>
                    <Link className = "link" to="/#/">About</Link>
                    {/* <a href="../articles.js" target="_blank" id="article">Articles</a> */}
                    {/* <a href="#" target="_blank" id="snippets">Snippets</a>
                    <a href="#" target="_blank" id="about">About</a> */}
                    <Button name="Contact" className="contact"/>
                </div>

                   <Switch> 
                    <Route path="/articles" component = {Articles}/> 

                    {/* <Route path="../articles" component={Articles} /> */}
                    </Switch>
            </header>
        </Router>
    )
}

export default Header
