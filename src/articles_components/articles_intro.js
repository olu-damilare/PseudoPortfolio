import React from 'react'

const ArticleIntro = (props) => {
    
    return (
        <div className="article_intro">
            <p id="article_date">{props.date}</p>
            <h3 className="article_title">{props.title}</h3>
            <p className="article_snippet">{props.snippet}</p>
            <p id="article_readmore"><a href = "#" >Read more...</a></p>
        </div>
    )
}

export default ArticleIntro
