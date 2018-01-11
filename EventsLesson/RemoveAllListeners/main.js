var event = require('events').EventEmitter;

var ev = new event();

ev.on('myEvent', function () {
   console.log('Listener # 1');
});

ev.on('myEvent', function () {
    console.log('Listener # 2');
});

ev.on('myEvent', function () {
    console.log('Listener # 3');
});

ev.emit('myEvent');

ev.removeAllListeners('myEvent');
console.log('Listeners was deleted!');

ev.emit('myEvent');