import React from 'react'
import arrow from './img/arrow.png';
import { DiJsBadge } from "react-icons/di";
import {DiReact} from "react-icons/di";
import {SiStorybook} from "react-icons/si";
import Article from './home_components/article_head';
import Project from './home_components/project';
import {RiChat4Line} from "react-icons/ri";
import Chat from './home_components/chat_button';

const Home = () => {


    const articles = [

        {"logo": <DiJsBadge color="#F7DF1E"/>, "title": "Reducing cognitive load by theming my tools", "date": "September 08, 2019"},
        {"logo": <DiReact color="#61DAFB"/>, "title": "Code splitting & lazy loading a server side rendered React app", "date": "September 08, 2019"},
        {"logo": <SiStorybook color="#FF4785"/>, "title": "Easy project switching with Itermocil & command line shortcuts", "date": "September 08, 2019"},
    
      ]
    
      const first_project = "An online coworking community for indie hackers, entreprenuers, and founders. Chat live with app developers, designers, and mentors. Access video courses and tutorials."
      const second_project = "On a mission to democratize investing knowledge. My partner and I bootstrapped this company with zero funding."
      const third_project = "I lead web development full time at All Turtles, an AI startup studio."



    return (
        <div>
            <h1>I'm Oludamilare, software engineer and interface designer </h1>
            <p className="intro">I specialize in rapidly prototyping software 
                companies and web applications. I talk about 
                my journey on <a href = "twitter.com/dami_lareh" target="_blank" id="twitter"><u>Twitter</u></a>, commit code to <u><a href="github.com/olu-damilare" id="github">Github</a></u>,
               and take shots on <a href="dribble.com" target="_blank" id="dribble"><u>Dribble</u></a>.</p>
            <div className="latest">
                <h3>Latest Articles</h3>
                <div className="latest_right">
                <p>All articles</p>
                <img src={arrow} id="arrow" alt="arrow"/>
                </div>
            </div>

    
                <div className="article_list">
                {articles.map((article)=>{
                return(
                    <Article logo={article.logo} title={article.title} date={article.date}/>
                    )
                }
                )}
            </div>
            <h3 id="projects_head">Projects</h3>
            <Project  title_class="yawnch_title" title="Yawnch" button="yawnch_button" text = {first_project} className="yawnch"/>
            
            <div className="projects_split">
            <Project  title_class="stock_title" title="Stockstream.tv" button="stock_button" text = {second_project} className="stock"/>
            <Project  title_class="turtle_title" title="All Turtles" button="turtle_button" text = {third_project} className="turtles"/>
            </div>
            <div className="base">
                <h1 className="base_heading">What are you working on?</h1>
                <p>Let's have a conversation! I'd love to hear about what you're <br></br> working on and find a way to work together.</p>
                <Chat icon={<RiChat4Line color="#111A20"/>}/>
            </div>
        </div>
    )
}

export default Home
