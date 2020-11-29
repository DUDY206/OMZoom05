import React from 'react';

import './Input.css';
import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';

const Input = ({message,setMessage,sendMessage}) => {
    return (
        <form className="form" action="">
            <input type="text"
                className="input"
                placeholder="Type a message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null}
            />
            <button className="sendButton"
                    onClick={(event) => sendMessage(event)}>Send</button>
        </form>
    );
}

export default Input;