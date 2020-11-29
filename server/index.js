
const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');
const mongooes = require('mongoose');

const dotenv = require("dotenv");
const {addUser,removeUser,getUser,getUsersInRoom} = require( './users.js');
const PORT = process.env.PORT || 5000;
//import route
const router = require('./routers/router');
const messageRoute = require('./routers/message');
const roomRoute = require('./routers/room');
const roomMemberRoute = require('./routers/roomMember');
const messageRoomRoute = require('./routers/messageRoom');


const app = express();
const server = http.createServer(app);
const bodyParser = require('body-parser');
const io = require('socket.io')(server,{
    cors:{
        origin:'*',
    }
});


app.use(cors());

//socket io
io.on('connection', (socket) => {
    socket.on('join',({name,room}, callbacks) => {
        const {error,user} = addUser({id:socket.id, name,room});

        if(error) return callbacks(error);
        socket.emit('message',{user:'admin',text:`${user.name} , welcome to the room ${user.room}`});
        socket.broadcast.to(user.room).emit('message',{
            user:'admin',
            text:`${user.name} has join`
        })
        socket.join(user.room);
        io.to(user.room).emit('roomData',{room:user.room,users:getUsersInRoom(user.room)})

        callbacks();
    });

    socket.on('sendMessage',(message,callbacks) => {
        const user = getUser(socket.id);
        // console.log(user);
        io.to(user.room).emit('message',{user:user.name,text:message});
        io.to(user.room).emit('roomData',{room:user.room,users:getUsersInRoom(user.room)});

        callbacks();
    })

    socket.on('register_req',({name,email,password},callback) => {

    })

    socket.on('disconnect', () => {
        const user = removeUser(socket.id);

        if(user){
            io.to(user.room).emit('message',{user:'admin',text:`${user.name} has left`});
        }
    });
});

//config env and connect db
dotenv.config();
mongooes.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
    console.log("connected to db");
});
//handle router
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({extended:false});
app.use(urlencodedParser);
app.use(bodyParser.json());
app.use(router,messageRoute,roomRoute,roomMemberRoute,messageRoomRoute);

//create server
server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));

////////////


