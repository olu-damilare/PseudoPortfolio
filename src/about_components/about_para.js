import React from 'react'

const AboutDesc = (props) => {
    return (
        <div className="about_desc">
            <h2 className={props.class}>{props.title}</h2>
            <p className={props.text}>{props.first} </p>
            <p className={props.text}>{props.second} </p>
            <p className={props.text}>{props.third} </p>
            <p className={props.text}>{props.fourth} </p>
        </div>
    )
}

export default AboutDesc
