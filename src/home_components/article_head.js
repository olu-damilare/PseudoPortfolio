import React from 'react'


const Article = (props) => {
    return (
        <div className="article">
            {props.logo}
            <div className="article_details">
                <p>{props.title}</p>
                <p className="date">{props.date}</p>
            </div>
        </div>
    )
}

export default Article
