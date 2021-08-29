import React from 'react'
import AboutDesc from './about_components/about_para';

const About = () => {

    const contents = [
        {
            'title': 'About',
            'first': 'I specialize in rapidly building software companies and web applications. I use an entrepreneurial mindset to inform my design and engineering output.',
            'second': 'I prioritize communication while building. I am an excellent communicator, both written and verbal. I use screen casts, video calls, and written words to lead teams built on trust and transparency.',
            'third':  'I am an expert in JavaScript, working primarily in React and Firebase, but I have experience working in a wide range of technologies including Node & Express, MongoDB, PostgreSQL, React Native, Gatsby, REST API design, CircleCI, 3rd party APIs (Stripe, Discord, Slack, Amplitude, Google Auth, etc.), AWS (S3, CloudFront, Cognito, Build Pipeline, Route53, ACM), and many more.',
            'fourth': 'Additionally, I am an experienced interface and user experience designer. I use Figma to communicate ideas through low and high fidelity mockups, design systems, and clickable prototypes.',
            'class': 'main'   
        },

        {
            'title': 'Personal',
            'first': 'I’ve been a gamer my entire life. I play StarCraft, Fortnite, and Nintendo 64.',
            'second': 'I ran Division 3 track (400m) at Rochester Institute of Technology, and still hold school records to this day.',
            'third':  'I play guitar and bass, and I’m learning to record my own songs.',
            'fourth': 'I collect video games and action figures, and love SciFi.',
            'class': 'sub-main'   
        }
    ]




    return (
        <div >
            {contents.map((content) => {
                return (<AboutDesc text = "text" title = {content.title} first = {content.first} second = {content.second} third = {content.third} 
                    fourth = {content.fourth} class = {content.class}/>
                )
                }

                )
            }
            <div className="blank"></div>
        </div>
    )
}

export default About
