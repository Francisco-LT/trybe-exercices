const e = require('express');
const express = require('express');
var randon = require('random-name');

const app = express();
const http = require('http').createServer(app);
const randonAvatar = require('random-avatar');

const io = require('socket.io')(http, {
  cors: {
    origin: "http://localhost:3000", // url aceita pelo cors
    methods: ['GET', 'POST'], // métodos aceitos pela url
  }
});

const PORT = 3000;

io.on('connection', (socket) => {
  console.log(`novo usuario conectado ${socket.id}`);

  const newUser = { name: randon(), avatar: randonAvatar() }

  socket.emit('confirmConnection', newUser ); // o primiero parâmetro é o nome do event, o segundo o objeto que vai ser passado

  socket.broadcast.emit('newUserConnect', newUser );

})

app.use(express.static(__dirname + '/public'));

http.listen(PORT, () => console.log('App listening on PORT %s', PORT))