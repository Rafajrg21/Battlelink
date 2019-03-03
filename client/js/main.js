'use strict';

let $ = (id) => {
    return document.getElementById(id);
}

let socket = io('http://localhost:3000');

socket.on('news', (data) => {
    console.log(data);
    socket.emit('event b', { my: 'data' });
  });

  // Todo: add grid and basic layout (routes)
  // Todo: add ships and placement function
  // Todo: add collision event and explosions 
  // Todo: add game and room logic
  // Todo: add second player logic
  // Todo: add chat
  // Todo: add single player option
  // Todo: add random placement function
