import React from 'react'

const Chat = (props) => {
    return (
        <button id="chat">
            {props.icon}
            &nbsp; Chat
        </button>
    )
}

export default Chat
