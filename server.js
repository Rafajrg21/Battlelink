
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log('listening on port ' + port));

const io = require('socket.io')(server);

app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/node_modules'));

io.on('connection', (socket) =>{
    io.emit('news', {hello: 'world'} );
    socket.on('event b', (data) => {
        console.log(data.my);
    });
});