const express = require('express');
const path = require('path');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

server.listen(3000, function(){
    console.log('listening on *:3000');
});

io.on('connection', function(socket){
    socket.on('crow', function(){
        io.emit('crow');
    });
});
