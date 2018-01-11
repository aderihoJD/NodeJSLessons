var event = require('events').EventEmitter;

var ev = new event();

ev.setMaxListeners(20);

for (var index = 0; index < 20; index++) {
    (function(){
        var current = index;
        ev.on('myEvent', function(){
            console.log(current);
        });
    })();
}

console.log('EV has ', ev.listenerCount('myEvent'), ' listeners.');

ev.emit('myEvent');