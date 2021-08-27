import React from 'react'
import Button from '../reuseables/button'

const Project = (props) => {
    return (
        <div className={props.className}>
            <h3 className={props.title_class}>{props.title}</h3>
            <p className="project_text">{props.text}</p>
            <Button class={props.button} name="Button"/>
        </div>
    )
}

export default Project
