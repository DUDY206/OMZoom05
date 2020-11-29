import React, {useState,useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './Chat.css';
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";

let socket;

const Chat = ({location}) => {
    const  [name,setName] = useState('');
    const  [room,setRoom] = useState('');
    const [message,setMessage] = useState('');
    const [messages,setMessages] = useState([]);
    const ENDPOINT = 'http://localhost:5000';

    useEffect(() => {
        // eslint-disable-next-line no-restricted-globals
        const {name,room} = queryString.parse(location.search);
        // eslint-disable-next-line no-restricted-globals
        const allowedOrigins = "http://localhost:3000";
        socket = io(ENDPOINT,{origin:allowedOrigins});
        setName(name);
        setRoom(room);

        socket.emit('join',{name,room},(error)=>{
            alert(error);
        });

        // return () => {
        //     socket.emit('disconnect');
        //     socket.off();
        // }
    },[ENDPOINT,location.search])

    useEffect(()=>{
        socket.on('message',(message) =>{
            setMessages([...messages,message])
        })
    }, [messages]);

    const sendMessage = (event) => {
        event.preventDefault();

        if(message){
            socket.emit('sendMessage',message, () => setMessage(''));
        }
    }

    console.log("message",message,"msgs:",messages);

    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room}/>
                <Messages messages={messages} name={name}/>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />

            </div>
        </div>
    )
}

export default Chat;