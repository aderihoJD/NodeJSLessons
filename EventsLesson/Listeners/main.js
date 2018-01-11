var event = require('events').EventEmitter;

var ev = new event();

ev.on('myEvent', function(){
   console.log('First listener!');
});

ev.on('myEvent', function(){
    console.log('Second listener!');
});

var listeners = ev.listeners('myEvent');

for (var i = 0; i < listeners.length; i++){
    listeners[i]();
}