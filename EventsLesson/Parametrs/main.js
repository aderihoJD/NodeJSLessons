var event = require('events').EventEmitter;

var ev = new event();

ev.on('myEvent', function (a,b) {
   console.log(arguments);
});

ev.emit('myEvent', 10, 15);