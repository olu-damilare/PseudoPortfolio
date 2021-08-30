import React from 'react'
import { Link } from 'react-router-dom'

const ArticleIntro = (props) => {
    
    return (
        <div className="article_intro">
            <p id="article_date">{props.date}</p>
            <h3 className="article_title">{props.title}</h3>
            <p className="article_snippet">{props.snippet}</p>
            <p id="article_readmore"><Link className = "link" to="/articles">Read more...</Link></p>
        </div>
    )
}

export default ArticleIntro
