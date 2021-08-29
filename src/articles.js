import React from 'react'
import Footer from './reuseables/footer';
import Header from './reuseables/headers'
import {SiTwitter} from "react-icons/si";
import {RiGithubFill} from "react-icons/ri";
import {RiDribbbleLine} from "react-icons/ri";
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
        console.log('this function was called')
        {articles.map((article)=>{
            console.log('function ran')
            return(
                <ArticleIntro date={article.date} title={article.title} snippet={article.snippet}/>
                )

            }
        )

        }

    }

    return (
        <div className = "App">
            <Header />
            <h2>Articles</h2>
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
            
            {/* {renderArticles()}
            {renderArticles()}          */}
            <Footer twitter = {<SiTwitter color="#ECF8FF"/>} github = {<RiGithubFill color="#ECF8FF"/>} dribble = {<RiDribbbleLine color="#ECF8FF"/>} />

        </div>
    )
}

export default Articles
