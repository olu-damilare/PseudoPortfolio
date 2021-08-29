import React from 'react'
import ArticleIntro from './articles_components/articles_intro';

const Articles = () => {
    const date = 'September 08, 2019';
    const snippet = 'Reasoning, approach, and goals Goals Faster initial load times. Users only download the code they need for the features they are using. This…';
    const title1 = 'Code splitting & lazy loading a server side rendered React app'
    const title2 = 'Easy project switching with Itermocil & command line shortcuts'
    
    const articles = [
        {
            'date': date,
            'title': title1,
            'snippet': snippet
        },
        {
            'date': date,
            'title': title2,
            'snippet': snippet
        },
        
    ]

    const renderArticles = () =>{
        {articles.map((article)=>{
            return(
                <ArticleIntro date={article.date} title={article.title} snippet={article.snippet}/>
                )

            }
        )

        }

    }

    return (
        <div >
            <h2 className="article_head">Articles</h2>
            {articles.map((article)=>{
            return(
                <ArticleIntro date={article.date} title={article.title} snippet={article.snippet}/>
                )

                 }
                )
             }

            {articles.map((article)=>{
            return(
                <ArticleIntro date={article.date} title={article.title} snippet={article.snippet}/>
                )

                 }
                )
             }

            <div className="blank">

            </div>
            

        </div>
    )
}

export default Articles
