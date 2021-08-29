import React from 'react'

const ArticleIntro = (props) => {
    
    return (
        <div className="article_intro">
            <p id="article_date">{props.date}</p>
            <h3>{props.title}</h3>
            <p className="article_snippet">{props.snippet}</p>
            <a href = "#" id="article_readmore">Read more...</a>
        </div>
    )
}

export default ArticleIntro
