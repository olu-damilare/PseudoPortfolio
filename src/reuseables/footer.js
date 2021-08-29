import React from 'react'

const Footer = (props) => {
    return (
        <footer>
            <div className="foot_text">
            <p>Designed and developed by Damilare Jolayemi.</p>
            <p>Built with <b>React</b>. Hosted on <b>Netlify</b>. Type set in <b>Jost*</b></p>
            </div>
            <div className="base_logos">
            <a href="twitter.com/dami_lareh">{props.twitter} </a> 
            <a id="git" href="github.com/olu-damilare">{props.github}</a>
            <a id="dril" href="dribble.com">{props.dribble}</a>
            </div>
      </footer>
    )
}

export default Footer
